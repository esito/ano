import { AnoHolder, getActiveAno, DATATYPES, RANDOMTYPES } from "./anoclass";
import * as Ano from "../parser/AnoParser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import {
  ANTLRErrorListener,
  CharStreams,
  CommonTokenStream,
  ParserRuleContext,
  RecognitionException,
  Recognizer,
  Token,
} from "antlr4ts";
import { CodeCompletionCore } from "antlr4-c3";

function arr(txt: string) {
  return txt.split(",");
}
class ErrorListener implements ANTLRErrorListener<Token> {
  syntaxError = <T extends Token>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ) => {
    console.log("Error");
  };
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
    case Ano.UpdateContext:
      return ano.getTableNames();
    case Ano.TransformContext:
      return ano.getTransformationNames();
    case Ano.SourceColumnContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.ConvertContext:
      return ano.getConversionNames();
    case Ano.RandomizeContext:
    case Ano.ShuffleContext:
    case Ano.SelectionKeyContext:
    case Ano.MaskContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.PropagateContext:
      return ano.getTableNames();
    case Ano.CreateContext:
      return ano.getTableNames();
    case Ano.DistributeContext:
      return ano.getDistributionNames();
    case Ano.CreateTableContext:
      return ano.getTableNames();
    case Ano.CreateChildColumnsContext:
    case Ano.CreateParentColumnsContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.DeleteContext:
      return ano.getTableNames();
    case Ano.MethodContext:
      return arr("cascading,not-in,not-exists");
    case Ano.DeleteTableContext:
      return ano.getTableNames();
    case Ano.EraseContext:
      return ano.getTableNames();
    case Ano.EraseTableContext:
      return ano.getTableNames();
    case Ano.SarContext:
      return ano.getTableNames();
    case Ano.SarTableContext:
      return ano.getTableNames();
    case Ano.MaskColumnContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    default: {
      return Array.from(candidates.tokens.keys()).map((i) =>
        ano.parser.vocabulary.getLiteralName(i as number)?.replace(/'/gi, "")
      );
    }
  }
}
