import { ParserRuleContext, RuleContext } from "antlr4ts";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import * as Ano from "../parser/AnoParser";
import { DATATYPES, getActiveAno, RANDOMTYPES } from "./anoclass";

export function getError(ctx: any): string | null {
  return new Validation().getError(ctx);
}

export class Validation {
  ano = getActiveAno();
  getErrors() {
    return this.ano.rules
      .filter((x) => this.getError(x))
      .map((x) =>
        x instanceof ParserRuleContext ? x.start : (<TerminalNode>x).symbol
      );
  }
  getError(ctx: any): string | null {
    switch (ctx.constructor) {
      case TerminalNode:
      case Ano.IdContext:
        return this.getError(ctx.parent);
      case ErrorNode: // Parser Error
        return "Unexpected symbol " + ctx.text;
      case Ano.TableidContext:
        return this.validateTable(<Ano.TableidContext>ctx);
      case Ano.ColumnidContext:
        return this.validateColumn(<Ano.ColumnidContext>ctx);
      case Ano.DatatypeContext:
        return DATATYPES.split(",").includes(ctx.text)
          ? null
          : "Cannot find datatype " + ctx.text;
      case Ano.TextinContext:
        return this.validateTextin(<Ano.TextinContext>ctx);
      case Ano.RandomTypeContext:
        return RANDOMTYPES.split(",").includes(ctx.text)
          ? null
          : "Cannot find randomtype " + ctx.text;
      case Ano.DeleteTableContext:
        return this.validateDep(
          this.ano.getTableName(<ParserRuleContext>ctx.parent),
          ctx.tableid().id().text,
          ctx.parentCols().columns(),
          ctx.childCols().columns()
        );
      case Ano.CreateTableContext:
        try {
          return this.validateDep(
            ctx.tableid().id().text,
            this.ano.getTableName(<ParserRuleContext>ctx.parent?.parent),
            ctx.createParentColumns().columns(),
            ctx.createChildColumns().columns()
          );
        } catch (error) {
          return "column missing";
        }

      case Ano.EraseTableContext:
        return this.validateDep(
          this.ano.getTableName(<ParserRuleContext>ctx.parent),
          ctx.tableid().id().text,
          ctx.parentCols().columns(),
          ctx.childCols().columns()
        );
      case Ano.SarTableContext:
        return this.validateDep(
          this.ano.getTableName(<ParserRuleContext>ctx.parent),
          ctx.tableid().id().text,
          ctx.parentCols().columns(),
          ctx.childCols().columns()
        );
      case Ano.TransformprogContext:
        return this.ano.getTransformationNames().includes(ctx.text)
          ? null
          : "Transformation " + ctx.text + " not found";
      case Ano.ConvertprogContext:
        return this.ano.getConversionNames().includes(ctx.text)
          ? null
          : "Conversion " + ctx.text + " not found";
      case Ano.DistributeprogContext:
        return this.ano.getDistributionNames().includes(ctx.text)
          ? null
          : "Distribution " + ctx.text + " not found";
    }
    return null;
  }

  validateDep(
    ptable: string,
    ctable: string,
    pcols: Ano.ColumnsContext,
    ccols: Ano.ColumnsContext
  ): string | null {
    const pcolumns = pcols
      .columnid()
      .map((x) => x.id().text)
      .join(",");
    const ccolumns = ccols
      .columnid()
      .map((x) => x.id().text)
      .join(",");
    const fks = this.ano.getFKs();
    const found = fks.find(
      (fk) =>
        fk.pTable == ptable &&
        fk.cTable == ctable &&
        fk.pColumns.join(",") == pcolumns &&
        fk.cColumns.join(",") == ccolumns
    );
    return found ? null : "Unknown relation " + ptable + "-" + ctable;
  }

  validateTable(ctx: Ano.TableidContext): string | null {
    return ctx.parent instanceof Ano.TableContext
      ? null
      : this.ano.getTableNames().includes(ctx.text)
      ? null
      : "Unknown table: " + ctx.text;
  }

  validateColumn(ctx: Ano.ColumnidContext) {
    return ctx.parent instanceof Ano.ColumnContext
      ? null
      : this.ano
          .getColumnNames(
            this.ano.getTableDef(
              this.ano.getTableName(<ParserRuleContext>ctx.parent)
            )
          )
          .includes(ctx.text)
      ? null
      : "Unknown column: " +
        ctx.text +
        " for table " +
        this.ano.getTableName(<ParserRuleContext>ctx.parent);
  }

  validateProg(
    name: string,
    arr: RuleContext[],
    prestring: string
  ): string | null {
    const pre = prestring.split(",");
    if (pre.includes(name)) return null;
    const find = arr.find((x) =>
      (<Ano.ConversionContext>x).text.endsWith("." + name)
    );
    return find ? null : "Cannot find program " + name;
  }

  validateTextin(ctx: Ano.TextinContext): string | null {
    let numberOfSources =
      ctx.parent?.constructor == Ano.RandomizeContext ? 1 : 0;
    const sourceCTX: ParseTree[] | undefined =
      ctx.parent?.parent?.children?.filter(
        (x) => x.constructor == Ano.SourceContext
      );

    numberOfSources += sourceCTX ? sourceCTX.length : 0;
    const formatPoints =
      ctx.text.match(
        /((?<!\\)(%(tA|ta|tB|tb|tC|tc|tD|td|te|tF|tH|th|tI|tj|tk|tl|tM|tm|tN|tp|tQ|tR|tr|tS|ts|tT|tY|ty|tZ|tz|a|b|c|d|e|f|\.\df|g|h|n|o|s|t|x)(?!\$)))/g
      )?.length || 0;

    const numberedFormatPoints = ctx.text.match(
      /(?<!\\)(%\d\$(tA|ta|tB|tb|tC|tc|tD|td|te|tF|tH|th|tI|tj|tk|tl|tM|tm|tN|tp|tQ|tR|tr|tS|ts|tT|tY|ty|tZ|tz|a|b|c|d|e|f|\.\df|g|h|n|o|s|t|x))/g
    );

    const highestNumberedFormatPoints = numberedFormatPoints
      ? numberedFormatPoints
          .map((x) => parseInt(x.replace(/\D/g, "")))
          .reduce((highest, current) => (highest > current ? highest : current))
      : 0;

    return Math.max(formatPoints, highestNumberedFormatPoints) ==
      numberOfSources || 0 == numberOfSources
      ? null
      : "the number of format points(e.g. %d) is different from the number of sources";
    //find strings matching format strings with negative lookahead
    // regex example %s matches \%s does not
  }
}
