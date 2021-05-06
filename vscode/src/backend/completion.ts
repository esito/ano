import { AnoHolder, getActiveAno, DATATYPES } from "./anoclass";
import * as Ano from "../parser/AnoParser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ParserRuleContext, Token } from "antlr4ts";
import { CodeCompletionCore } from "antlr4-c3";

function arr(txt: string) {
  return txt.split(",");
}

// Completions
export function getCompletion(
  line: number,
  char: number,
  key: string
): string[] {
  const list: string[] = [];
  const ano = getActiveAno();
  if (ano.tokens.length === 1) {
    return ["table"];
  }
  const node = ano.findToken(line, char);
  const previousRule = node ? ano.findRule(node.tokenIndex - 1) : null;
  const rule = node ? ano.findRule(node.tokenIndex) : null;
  if (rule) list.push(...getSuggestions(previousRule, ano, node));
  return list;
}

function getSuggestions(context: any, ano: AnoHolder, node: Token | null): any {
  const core = new CodeCompletionCore(ano.parser);
  const candidates = core.collectCandidates(node?.tokenIndex as number);
  if (context === undefined) return [];
  if (context.constructor == TerminalNode) {
    return getSuggestions((<TerminalNode>context).parent, ano, node);
  }
  const ctx = <ParserRuleContext>context;
  switch (ctx.constructor) {
    case Ano.ColumnContext:
      return arr(DATATYPES);
    case Ano.TransformContext:
      return ano.getTransformationNames();
    case Ano.ConvertContext:
      return ano.getConversionNames();
    case Ano.DistributeContext:
      return ano.getDistributionNames();
    case Ano.MethodContext:
      return arr("cascading,not-in,not-exists");
    case Ano.PropagateContext:
    case Ano.CreateContext:
    case Ano.CreateTableContext:
    case Ano.UpdateContext:
    case Ano.DeleteTableContext:
    case Ano.EraseContext:
    case Ano.EraseTableContext:
    case Ano.SarContext:
    case Ano.SarTableContext:
    case Ano.DeleteContext:
      return ano.getTableNames();
    case Ano.CreateChildColumnsContext:
    case Ano.CreateParentColumnsContext:
    case Ano.RandomizeContext:
    case Ano.ShuffleContext:
    case Ano.SelectionKeyContext:
    case Ano.MaskContext:
    case Ano.SourceColumnContext:
    case Ano.MaskColumnContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    default: {
      return Array.from(candidates.tokens.keys()).map((i) =>
        ano.parser.vocabulary.getLiteralName(i as number)?.replace(/'/gi, "")
      );
    }
  }
}
