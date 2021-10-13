import { AnoHolder, getActiveAno } from "./anoclass";
import * as Ano from "../parser/AnoParser";
import { AnoLexer } from "../parser/AnoLexer";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParserRuleContext, Token } from "antlr4ts";
import { AnoListener } from "../parser/AnoListener";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

export interface AnoEdit {
  line1: number;
  col1: number;
  line2: number;
  col2: number;
  text: string;
}

const CRLF = "\r\n";

export function formatDoc(indenting: string): AnoEdit[] {
  const indentTxt = indenting;
  const edits: AnoEdit[] = [];
  const ano = getActiveAno();
  if (ano.rules.filter((e) => e?.constructor === ErrorNode).length != 0) {
    return [];
  }
  let indent = 0;
  let marker = 0;

  const createEdit: () => AnoEdit = () => {
    let endline = 1;
    let endchar = 0;
    if (marker) {
      const last = ano.tokens[marker - 1];
      endline = last.line;
      endchar = last.charPositionInLine;
      const txt = last.text ?? "";
      if (txt) {
        if (txt.includes("\n")) {
          const parts = txt.split("\n");
          endchar = txt.split("\n").pop()?.length ?? 0;
          endline += parts.length - 1;
        } else {
          endchar += txt.length;
        }
      }
    }
    const t = ano.tokens[marker];
    return {
      line1: endline,
      col1: endchar,
      line2: t.line,
      col2: t.charPositionInLine,
      text: "",
    };
  };

  const format = (ctx: ParserRuleContext, stop: number, isNewline: boolean) => {
    // find beginning of text between tokens
    for (; marker <= stop; marker++) {
      const minusLine =
        marker && ano.tokens[marker - 1].type == AnoLexer.SL_COMMENT ? 1 : 0;
      const aedit = createEdit();
      const t = ano.tokens[marker];
      const slcomm = t.type == AnoLexer.SL_COMMENT;
      const mlcomm = t.type == AnoLexer.ML_COMMENT;
      let lines = aedit.line2 - aedit.line1; // Keep empty lines, adjust SL-comments
      const isline =
        (stop == marker && isNewline) || (lines && (slcomm || mlcomm));
      lines = (isline && lines < 2 ? 1 : lines) - minusLine;
      aedit.text = isline
        ? (marker ? CRLF : "").repeat(lines) + indentTxt.repeat(indent)
        : t.text == ","
        ? ""
        : " ";
      /*       if(t.type==AnoLexer.ML_COMMENT){
        const t0=ano.tokens[marker-1];
        const l1=t0.line;
        const c1=t0.charPositionInLine;
        const l2=t.line;
        const c2=t.charPositionInLine;
        const txt1=t0.text;
        const txt2=t.text;
      }
 */ edits.push(aedit);
    }
  };
  const skip = (ctx: ParserRuleContext) => {
    format(ctx, ctx.start.tokenIndex, false);
    marker = (ctx.stop?.tokenIndex ?? marker) + 1;
  };
  const skipStart = (ctx: ParserRuleContext) => {
    format(ctx, ctx.start.tokenIndex, false);
  };
  const skipEnd = (ctx: ParserRuleContext) => {
    marker = ctx.stop?.tokenIndex ?? marker;
  };
  const newline = (ctx: ParserRuleContext, ind?: number) => {
    if (ind) {
      indent = ind;
    }
    format(ctx, ctx.start.tokenIndex, true);
  };
  const walker = new (class implements AnoListener {
    exitModel(ctx: Ano.ModelContext) {
      newline(ctx, 0);
    }
    enterTable(ctx: Ano.TableContext) {
      newline(ctx, 0);
    }
    exitTable(ctx: Ano.TableContext) {
      indent = 0;
    }
    enterColumn(ctx: Ano.ColumnContext) {
      newline(ctx, 1);
    }
    enterPrecision(ctx: Ano.PrecisionContext) {
      newline(ctx, 2);
    }
    enterPk(ctx: Ano.PkContext) {
      newline(ctx, 1);
    }
    enterFk(ctx: Ano.FkContext) {
      newline(ctx);
    }
    enterFkCols(ctx: Ano.FkColsContext) {
      indent++;
      newline(ctx);
    }
    exitFkCols(ctx: Ano.FkColsContext) {
      indent--;
    }
    enterConversion(ctx: Ano.ConversionContext) {
      newline(ctx, 0);
    }
    enterTransformation(ctx: Ano.TransformationContext) {
      newline(ctx, 0);
    }
    enterDistribution(ctx: Ano.DistributionContext) {
      newline(ctx, 0);
    }
    enterNamespace(ctx: Ano.NamespaceContext) {
      skip(ctx);
    }
    enterFilename(ctx: Ano.FilenameContext) {
      skip(ctx);
    }
    enterWorkTask(ctx: Ano.WorkTaskContext) {
      newline(ctx);
      indent++;
    }
    exitWorkTask(ctx: Ano.WorkTaskContext) {
      indent--;
    }
    enterTaskGroup(ctx: Ano.TaskGroupContext) {
      newline(ctx);
    }
    enterBracketStart(ctx: Ano.BracketStartContext) {
      newline(ctx);
      indent++;
    }
    enterBracketEnd(ctx: Ano.BracketEndContext) {
      indent--;
      newline(ctx);
    }
    enterAnonymization(ctx: Ano.AnonymizationContext) {
      newline(ctx);
      indent++;
    }
    exitAnonymization(ctx: Ano.AnonymizationContext) {
      indent--;
    }
    enterFormat(ctx: Ano.FormatContext) {
      newline(ctx);
    }
    enterTransform(ctx: Ano.TransformContext) {
      newline(ctx);
    }
    enterDistribute(ctx: Ano.DistributeContext) {
      newline(ctx);
    }
    enterUniqueMask(ctx: Ano.UniqueMaskContext) {
      newline(ctx);
    }
    enterRandomizeType(ctx: Ano.RandomizeTypeContext) {
      newline(ctx);
    }
    enterConvert(ctx: Ano.ConvertContext) {
      newline(ctx);
    }
    enterOffset(ctx: Ano.OffsetContext) {
      newline(ctx);
    }
    enterFlatNoise(ctx: Ano.FlatNoiseContext) {
      newline(ctx);
    }
    enterPercentageNoise(ctx: Ano.PercentageNoiseContext) {
      newline(ctx);
    }
    enterMaskColumn(ctx: Ano.MaskColumnContext) {
      newline(ctx);
      indent++;
    }
    exitMaskColumn(ctx: Ano.MaskColumnContext) {
      indent--;
    }
    enterWhere(ctx: Ano.WhereContext) {
      newline(ctx);
    }
    enterPropagate(ctx: Ano.PropagateContext) {
      newline(ctx);
    }
    enterPropagateColumn(ctx: Ano.PropagateColumnContext) {
      skip(ctx);
    }
    enterTextin(ctx: Ano.TextinContext) {
      skip(ctx);
    }
    enterTempKey(ctx: Ano.TempKeyContext) {
      newline(ctx);
    }
    enterSource(ctx: Ano.SourceContext) {
      newline(ctx);
      indent++;
    }
    exitSource(ctx: Ano.SourceContext) {
      indent--;
    }
    enterChildCols(ctx: Ano.ChildColsContext) {
      newline(ctx);
    }
    enterParentCols(ctx: Ano.ParentColsContext) {
      newline(ctx);
    }
    enterCreateChildColumns(ctx: Ano.CreateChildColumnsContext) {
      newline(ctx);
    }
    enterCreateParentColumns(ctx: Ano.CreateParentColumnsContext) {
      newline(ctx);
    }
    enterDeleteTable(ctx: Ano.DeleteTableContext) {
      newline(ctx);
      indent++;
    }
    exitDeleteTable(ctx: Ano.DeleteTableContext) {
      indent--;
    }
    enterEraseTable(ctx: Ano.EraseTableContext) {
      newline(ctx);
      indent++;
    }
    exitEraseTable(ctx: Ano.EraseTableContext) {
      indent--;
    }
    enterCreateTable(ctx: Ano.CreateTableContext) {
      newline(ctx);
      indent++;
    }
    exitCreateTable(ctx: Ano.CreateTableContext) {
      indent--;
    }
    enterSarTable(ctx: Ano.SarTableContext) {
      newline(ctx);
      indent++;
    }
    exitSarTable(ctx: Ano.SarTableContext) {
      indent--;
    }
    enterSqlBefore(ctx: Ano.SqlBeforeContext) {
      newline(ctx);
    }
    enterSqlAfter(ctx: Ano.SqlAfterContext) {
      newline(ctx);
    }
  })();
  ParseTreeWalker.DEFAULT.walk(<ParseTreeListener>walker, ano.tree);

  return edits;
}
