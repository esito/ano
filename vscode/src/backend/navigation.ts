import { AnoHolder, getActiveAno } from "./anoclass";
import * as Ano from "../parser/AnoParser";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ParserRuleContext, Token } from "antlr4ts";
import { AnoListener } from "../parser/AnoListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

export interface AnoLoc {
  line: number;
  col: number;
  word: string;
}

function wrap(node: Token | undefined): AnoLoc | null {
  return node
    ? {
      line: node.line,
      col: node.charPositionInLine,
      word: node.text ?? "",
    }
    : null;
}

export function getDefinition(line: number, char: number): AnoLoc | null {
  const ano = getActiveAno();
  const rule = getDefNode(line, char, ano);
  return wrap(rule?._start);
}

function getDefNode(
  line: number,
  char: number,
  ano: AnoHolder
): ParserRuleContext | undefined {
  const node = ano.findToken(line, char);
  const rule = node ? ano.findRule(node.tokenIndex) : null;
  return findDefinition(rule, ano);
}

function findDefinition(
  rule: ParseTree | null,
  ano: AnoHolder
): ParserRuleContext | undefined {
  if (!rule) return undefined;
  switch (rule?.constructor) {
    case TerminalNode:
    case Ano.NamespaceContext:
    case Ano.IdContext:
      return findDefinition(rule?.parent ?? null, ano);
    case Ano.TableidContext: {
      const tname = ano.getTableName(<Ano.TableidContext>rule);
      const tctx = ano.getTableDef(tname);
      return tctx?.tableid();
    }
    case Ano.ColumnidContext: {
      const tableName = ano.getTableName(<Ano.ColumnidContext>rule);
      const columnName = rule.text;
      const tableDef = ano.getTableDef(tableName);
      if (tableDef) {
        const cctx = ano.getColumnDef(tableDef, columnName);
        return cctx?.columnid();
      }
      return undefined;
    }
    case Ano.ConversionContext:
    case Ano.TransformationContext:
    case Ano.DistributionContext:
      return <ParserRuleContext>rule;
    case Ano.ConvertprogContext: {
      return ano.tree
        .conversion()
        .find((x) => x.text.endsWith("." + rule.text));
    }
    case Ano.TransformprogContext: {
      return ano.tree
        .transformation()
        .find((x) => x.text.endsWith("." + rule.text));
    }
    case Ano.DistributeprogContext: {
      return ano.tree
        .distribution()
        .find((x) => x.text.endsWith("." + rule.text));
    }
  }
  return undefined;
}

export function getReference(line: number, char: number): AnoLoc[] {
  const ano = getActiveAno();
  const rule = getDefNode(line, char, ano);
  if (!rule) return [];
  const refs: ParserRuleContext[] = [];
  switch (rule.constructor) {
    case Ano.TableidContext: {
      const tname = rule.text;
      const walker = new (class implements AnoListener {
        enterTableid(ctx: Ano.TableidContext) {
          if (tname == ano.getTableName(ctx)) {
            refs.push(ctx);
          }
        }
      })();
      return process(walker, ano, refs);
    }
    case Ano.ColumnidContext: {
      const tname = ano.getTableName(<Ano.ColumnidContext>rule);
      const cname = rule.text;
      const walker = new (class implements AnoListener {
        enterColumnid(ctx: Ano.ColumnidContext) {
          if (tname == ano.getTableName(ctx) && cname == ctx.text) {
            refs.push(ctx);
          }
        }
      })();
      return process(walker, ano, refs);
    }
    case Ano.ConversionContext: {
      const ename = rule.text.split(".").pop();
      const walker = new (class implements AnoListener {
        enterConvertprog(ctx: Ano.ConvertprogContext) {
          if (ename == ctx.text) {
            refs.push(ctx);
          }
        }
      })();
      return process(walker, ano, refs);
    }
    case Ano.TransformationContext: {
      const ename = rule.text.split(".").pop();
      const walker = new (class implements AnoListener {
        enterTransformprog(ctx: Ano.TransformprogContext) {
          if (ename == ctx.text) {
            refs.push(ctx);
          }
        }
      })();
      return process(walker, ano, refs);
    }
    case Ano.DistributionContext: {
      const ename = rule.text.split(".").pop();
      const walker = new (class implements AnoListener {
        enterDistributeprog(ctx: Ano.DistributeprogContext) {
          if (ename == ctx.text) {
            refs.push(ctx);
          }
        }
      })();
      return process(walker, ano, refs);
    }
  }
  return [];
}

function process(
  walker: AnoListener,
  ano: AnoHolder,
  refs: ParserRuleContext[]
) {
  ParseTreeWalker.DEFAULT.walk(<ParseTreeListener>walker, ano.tree);
  const refs2: AnoLoc[] = [];
  refs.forEach((x) => {
    const ref = wrap(x?._start);
    if (ref) refs2.push(ref);
  });
  return refs2;
}

export function getRenames(line: number, char: number): AnoLoc[] {
  return getReference(line, char);
}
