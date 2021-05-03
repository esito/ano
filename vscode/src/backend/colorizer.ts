import { Token, ParserRuleContext } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import * as Ano from "../parser/AnoParser";
import { getActiveAno } from "./anoclass";
import { Validation } from "./validation";

export enum ColorEnum {
  Comment,
  Table,
  Column,
  Datatype,
  Program,
  Keyword1,
  Keyword2,
  Parameter,
  Names,
  Anonymization,
  Error,
  Param,
}

export interface ColorNode {
  color: ColorEnum;
  line: number;
  col: number;
  word: string;
}

export function getColors(): ColorNode[] {
  const ano = getActiveAno();
  const colors: ColorNode[] = [];
  // Nodes
  ano.rules.forEach((ctx) => {
    const col = getColor(ctx);
    if (col) {
      const token =
        ctx instanceof ParserRuleContext
          ? ctx.start
          : (<TerminalNode>ctx).symbol;
      const text = col.length > 1 ? <string>col[1] : token.text;
      colors.push({
        color: col[0],
        line: token.line,
        col: token.charPositionInLine,
        word: (text ? text : token.text) ?? "",
      });
    }
  });
  // Comments
  ano.tokens
    .filter((token) => token.channel == Token.HIDDEN_CHANNEL)
    .forEach((token) =>
      colors.push({
        color: ColorEnum.Comment,
        line: token.line,
        col: token.charPositionInLine,
        word: token.text ?? "",
      })
    );

  new Validation().getErrors().forEach((token) =>
    colors.push({
      color: ColorEnum.Error,
      line: token.line,
      col: token.charPositionInLine,
      word: token.text ?? "",
    })
  );
  return colors;
}

function getColor(ctx: ParseTree): any[] | undefined {
  switch (ctx.constructor) {
    case Ano.TableDefContext:
    case Ano.UTableidContext:
    case Ano.TableidContext:
      return [ColorEnum.Table];
    case Ano.ColumnDefContext:
    case Ano.MaskColumnidContext:
    case Ano.RColumnidContext:
    case Ano.ShColumnidContext:
    case Ano.ColumnidContext:
      return [ColorEnum.Column];
    case Ano.DatatypeContext:
      return [ColorEnum.Datatype];
    case Ano.TableContext:
    case Ano.FkContext:
    case Ano.TaskGroupContext:
    case Ano.WorkTaskContext:
    case Ano.TransformationContext:
    case Ano.ConversionContext:
    case Ano.DistributionContext:
      return [ColorEnum.Keyword1];
    case Ano.UniqueContext:
    case Ano.ColumnContext:
    case Ano.AnonymizationContext:
    case Ano.MaskColumnContext:
    case Ano.WhereContext:
    case Ano.CreateTableContext:
    case Ano.EraseTableContext:
    case Ano.SarTableContext:
    case Ano.SqlBeforeContext:
    case Ano.SqlAfterContext:
    case Ano.DeleteTableContext:
    case Ano.PkContext:
      return [ColorEnum.Keyword2];
    case Ano.MaskContext:
    case Ano.RFormatContext:
    case Ano.FormatContext:
    case Ano.MinRowsContext:
    case Ano.DistributeContext:
    case Ano.RConvertContext:
    case Ano.ConvertContext:
    case Ano.RTransformContext:
    case Ano.TransformContext:
    case Ano.RandomTypeContext:
    case Ano.OffsetContext:
    case Ano.RUniqueMaskContext:
    case Ano.UniqueMaskContext:
    case Ano.FlatNoiseContext:
    case Ano.PercentageNoiseContext:
    case Ano.RandomizeTypeContext:
    case Ano.SourceContext:
      return [ColorEnum.Anonymization];
    case Ano.TextinContext:
    case Ano.MapfileContext:
    case Ano.FilenameContext:
      return [ColorEnum.Parameter, ctx.text];
    case Ano.NumsizeContext:
    case Ano.ScaleContext:
    case Ano.RandomOrderContext:
    case Ano.PropagateContext:
    case Ano.CreateChildColumnsContext:
    case Ano.CreateParentColumnsContext:
    case Ano.ChildColsContext:
    case Ano.ParentColsContext:
      return [ColorEnum.Parameter];
    case Ano.NamespaceContext:
    case Ano.RTransformprogContext:
    case Ano.TransformprogContext:
    case Ano.ConvertprogContext:
    case Ano.DistributeprogContext:
      return [ColorEnum.Program];
    case Ano.ParamContext:
      return [ColorEnum.Param];
    case Ano.UTaskidContext:
    case Ano.MaskTaskidContext:
    case Ano.RTaskidContext:
    case Ano.ShTaskidContext:
    case Ano.TaskidContext:
      return [ColorEnum.Names];
  }
}
