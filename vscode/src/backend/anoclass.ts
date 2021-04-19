import {
  CharStreams,
  CommonTokenStream,
  Token,
  ParserRuleContext,
} from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { AnoLexer } from "../parser/AnoLexer";

import * as Ano from "../parser/AnoParser";

export const DATATYPES = "text,boolean,integer,decimal,date,datetime,time";
export const CONVERSIONS =
  "String2Date,String2DateTime,String2Decimal,String2Integer,String2Time";
export const TRANSFORMATIONS = "Email,CreditCard";
export const DISTRIBUTIONS = "AllCombinations,EvenWithDeviation,SimpleSpread";
export const RANDOMTYPES = "decimal,date,datetime,time,integer";

export function createAnoHolder(content: string): AnoHolder {
  return new AnoHolderClass(content);
}

export interface FK {
  pTable: string;
  cTable: string;
  pColumns: string[];
  cColumns: string[];
  setNull: boolean;
}

export interface AnoHolder {
  tree: Ano.ModelContext;
  tokens: Token[];
  rules: ParseTree[];
  parser: Ano.AnoParser;
  findToken(line: number, char: number): Token | null;
  findRule(tokenIndex: number): ParseTree;
  getTableName(ctx: ParserRuleContext): string;
  getTableDef(tableName: string): Ano.TableContext | undefined;
  getColumnDef(
    tableDef: Ano.TableContext,
    columnName: string
  ): Ano.ColumnContext | undefined;
  getTableNames(): string[];
  getColumnNames(tableDef: Ano.TableContext | undefined): string[];
  getConversionNames(): string[];
  getTransformationNames(): string[];
  getDistributionNames(): string[];
  getFKs(): FK[];
}

let activeAno: () => AnoHolder;

export function setActiveAno(getter: () => AnoHolder) {
  activeAno = getter;
}

export function getActiveAno() {
  return activeAno();
}

export class AnoHolderClass implements AnoHolder {
  tree: Ano.ModelContext;
  tokens: Token[];
  parser: Ano.AnoParser;
  foreignKeys: FK[] | undefined;
  rules: ParseTree[]=[];
  constructor(content: string) {
    const lexer = new AnoLexer(CharStreams.fromString(content));
    const ch = new CommonTokenStream(lexer);
    this.parser = new Ano.AnoParser(ch);
    this.tree = this.parser.model();
    this.tokens = ch.getTokens();
    this.flatten(this.rules,this.tree);
  }

  flatten(rules: ParseTree[],node:ParserRuleContext){
    const ch=node.children;
    if(ch){
      rules.push(...ch);
      ch.filter(x=> x instanceof ParserRuleContext).forEach(x=> this.flatten(rules,<ParserRuleContext>x));
    }
  }

  getFKs(): FK[] {
    if (!this.foreignKeys) {
      this.foreignKeys = this.tree.fk().map((fk) => {
        const p = fk.fkParent().fkCols();
        const c = fk.fkChild().fkCols();
        return {
          pTable: p.tableid().id().text,
          cTable: c.tableid().id().text,
          pColumns: p
            .columns()
            .columnid()
            .map((x) => x.id().text),
          cColumns: c
            .columns()
            .columnid()
            .map((x) => x.id().text),
          setNull: !!fk.setNull(),
        };
      });
    }
    return this.foreignKeys;
  }
  getTableNameFromChild(cols: ParseTree[] | undefined, num: number) {
    return cols && cols.length > num ? (<Ano.TableidContext>cols[num]).text : "";
  }
  getTableName(ctx: ParserRuleContext) {
    switch (ctx?.constructor) {
      case Ano.PkContext:
      case Ano.UniqueContext:
      case Ano.ColumnContext:
      case Ano.ColumnsContext:
      case Ano.AnonymizationContext:
      case Ano.MaskContext:
      case Ano.ShuffleContext:
      case Ano.MaskColumnContext:
      case Ano.SourceColumnContext:
      case Ano.SourceContext:
      case Ano.RandomizeContext:
      case Ano.CreateParentColumnsContext:
      case Ano.PropagateContext:
      case Ano.TableidContext:
      case Ano.ColumnidContext:
      case Ano.ChildColsContext:
        return this.getTableName(<ParserRuleContext>ctx.parent);
      case Ano.EraseContext:
      case Ano.CreateContext:
      case Ano.DistributeContext:
      case Ano.DeleteContext:
      case Ano.CreateTableContext:
      case Ano.EraseTableContext:
      case Ano.DeleteTableContext:
      case Ano.SarTableContext:
      case Ano.SarContext:
      case Ano.UpdateContext:
        return this.getTableNameFromChild(ctx.children, 1);
      case Ano.ParentColsContext:
        return this.getTableName(<ParserRuleContext>ctx.parent?.parent);
      case Ano.CreateChildColumnsContext:
        return this.getTableName(<ParserRuleContext>ctx.parent?.parent?.parent);
      case Ano.TableContext:
        return (<Ano.TableContext>ctx).tableid().text;
      case Ano.FkColsContext:
      case Ano.PropagateColumnContext:
        return this.getTableNameFromChild(ctx.children, 0);
      default:
        return "";
    }
  }

  getTableNames() {
    return this.tree.table().map((x) => x.tableid().text);
  }
  getTableDef(name: string) {
    return this.tree.table().find((x) => x.tableid().text == name);
  }
  getColumnDef(table: Ano.TableContext, name: string) {
    return table.column().find((x) => x.columnid().text == name);
  }
  getColumnNames(table: Ano.TableContext | undefined) {
    return table?.column().map((x) => x.columnid().text) ?? [];
  }

  getConversionNames() {
    return this.getProgs(
      CONVERSIONS,
      this.tree.conversion().map((x) => x.text)
    );
  }

  getTransformationNames() {
    return this.getProgs(
      TRANSFORMATIONS,
      this.tree.transformation().map((x) => x.text)
    );
  }

  getDistributionNames() {
    return this.getProgs(
      DISTRIBUTIONS,
      this.tree.distribution().map((x) => x.text)
    );
  }

  getProgs(predef: string, nodes: string[]) {
    const list = predef.split(",");
    nodes.forEach((x) => {
      const a = x.split(".").pop();
      if (a) list.push(a);
    });
    return list;
  }

  findToken(line: number, char: number) {
    return (
      this.tokens.find((t) => {
        return (
          t.line > line ||
          (t.line == line &&
            t.charPositionInLine + (t.text?.length ?? 0) >= char)
        );
      }) ?? null
    );
  }
  traverse(ctx: ParserRuleContext, i: number) {
    const found = ctx.children?.find((ch) => {
      if (ch instanceof ParserRuleContext) {
        const from = ch.start.tokenIndex;
        const to = ch.stop?.tokenIndex ?? from;
        return i >= from && i <= to;
      }
      if (ch instanceof TerminalNode) {
        return ch.symbol.tokenIndex == i;
      }
      return false;
    });
    if (found instanceof TerminalNode) {
      return found;
    }
    if (found instanceof ParserRuleContext) {
      if (found.start.tokenIndex == i) {
        if (found.children?.length) {
          // Drill deeper if it has a child with same start
          const child = found.children[0];
          if (child instanceof ParserRuleContext) {
            if (child.start.tokenIndex != i) return found;
          }
        } else {
          return found;
        }
      }
      return this.traverse(found, i);
    }
    return null;
  }
  findRule(i: number) {
    return this.traverse(this.tree, i);
  }
}
