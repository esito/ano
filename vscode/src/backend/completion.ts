import { AnoHolder, getActiveAno, DATATYPES } from "./anoclass";
import * as Ano from "../parser/AnoParser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ParserRuleContext, Token } from "antlr4ts";
import { CodeCompletionCore } from "antlr4-c3";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";

function arr(txt: string) {
  return txt.split(",");
}

// Use completionproposals from grammar
function getFromGrammar(ano: AnoHolder, index: number) {
  const core = new CodeCompletionCore(ano.parser);
  const candidates = core.collectCandidates(index);
  return Array.from(candidates.tokens.keys()).map((i) =>
    ano.parser.vocabulary.getLiteralName(i as number)?.replace(/'/gi, "")
  ) as string[];
}

// Completions
export function getCompletion(
  line: number,
  char: number,
  key: string
): string[] {
  const ano = getActiveAno();
  const node = ano.findToken(line, char);
  console.log(key + " " + node?.tokenIndex);
  const rule = node ? ano.findRule(node.tokenIndex) : null;
  if (rule) {
    const list = getSuggestions(rule, ano, node);
    if (list.length) return list;
  }
  const prev = node ? ano.findRule(node.tokenIndex - 1) : null;
  if (prev) {
    const list = getSuggestions(prev, ano, node);
    if (list.length) return list;
  }

  // Use completionproposals from grammar
  const core = new CodeCompletionCore(ano.parser);
  if (rule instanceof ErrorNode) {
    return fixHyphen(
      getFromGrammar(ano, (node?.tokenIndex as number) - 2),
      key
    );
  }
  return fixHyphen(getFromGrammar(ano, node?.tokenIndex as number), key);
}

function fixHyphen(list: string[], key: string) {
  const i =  key.indexOf("-") + 1;
  return list.filter((x) => x && x.startsWith(key)).map((x) => x.substring(i));
}

function getSuggestions(context: any, ano: AnoHolder, node: Token | null): any {
  if (context === undefined) return [];
  if (context.constructor == TerminalNode) {
    return getSuggestions((<TerminalNode>context).parent, ano, node);
  }
  const ctx = <ParserRuleContext>context;
  switch (ctx.constructor) {
    case TerminalNode:
    case Ano.IdContext:
      return getSuggestions(ctx.parent, ano, node);
    case Ano.ColumnContext:
      return arr(DATATYPES);
    case Ano.TransformContext: // prev - before typing a char
    case Ano.TransformprogContext: // rule - after typing a char
      return ano.getTransformationNames();
    case Ano.ConvertContext: // prev
    case Ano.ConvertprogContext: // rule
      return ano.getConversionNames();
    case Ano.DistributeContext: // prev
    case Ano.DistributeprogContext: // rule
      return ano.getDistributionNames();
    case Ano.MethodContext:
      return arr("cascading,not-in,not-exists");
    case Ano.TableidContext:
      return ano.getTableNames();
    case Ano.SourceColumnContext:
    case Ano.ColumnidContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    default:
      return [];
  }
}
