import { AnoHolder, getActiveAno, DATATYPES } from "./anoclass";
import * as Ano from "../parser/AnoParser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ParserRuleContext } from "antlr4ts";
import { CodeCompletionCore } from "antlr4-c3";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";

const arr = (txt: string) => txt.split(",");

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
  if (node == null) return [];
  let ntoken = node.tokenIndex;
  let rule = ano.findRule(ntoken);
  const isError = rule instanceof ErrorNode;
  if (isError) {
    ntoken -= 2;
    rule = ano.findRule(ntoken);
  }

  const prev = node ? ano.findRule(node.tokenIndex - 1) : null;
  if (rule) {
    const list = filterFix(getSuggestions(rule, ano, prev, false), key);
    if (list.length) return list;
  }
  if (prev && key) {
    const prev2 = node ? ano.findRule(node.tokenIndex - 2) : null;
    const list = filterFix(getSuggestions(prev, ano, prev2), key);
    if (list.length) return list;
  }

  // Use completionproposals from grammar
  return filterFix(getFromGrammar(ano, ntoken), key);
}

function filterFix(list: string[], key: string) {
  const i = key.indexOf("-") + 1;
  return list.filter((x) => x && x.startsWith(key)).map((x) => x.substring(i));
}

function getSuggestions(
  context: any,
  ano: AnoHolder,
  prev: ParserRuleContext | TerminalNode | ParseTree | null = null,
  secondTry = false
): any {
  if (context === undefined) return [];
  if (context.constructor == TerminalNode) {
    return getSuggestions((<TerminalNode>context).parent, ano, prev);
  }
  const ctx = <ParserRuleContext>context;
  switch (ctx.constructor) {
    case Ano.IdContext:
      return getIdContextSuggestions(ctx, ano, prev, secondTry);
    case Ano.BracketEndContext:
      /* tslint:disable-next-line */
      return getSuggestions(prev, ano, prev);
    case Ano.ColumnContext:
      return arr(DATATYPES);
    case Ano.ColumnidContext:
    case Ano.CreateParentColumnsContext:
    case Ano.CreateChildColumnsContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.TransformContext: // prev - before typing a char
    case Ano.TransformprogContext: // rule - after typing a char
      return ano.getTransformationNames();
    case Ano.ConvertContext: // prev
    case Ano.ConvertprogContext: // rule
      return ano.getConversionNames();
    case Ano.DistributeContext: // prev
    case Ano.DistributeprogContext: // rule
      return ctx.getChild(0).constructor != ErrorNode
        ? prev?.text != "distribute"
          ? ["table"]
          : ano.getDistributionNames()
        : prev?.text == "distribute"
        ? ano.getDistributionNames()
        : ["table"];
    case ErrorNode:
      return getSuggestions(ctx.parent, ano, prev);
    case Ano.MethodContext:
      return arr("cascading,not-in,not-exists");
    case Ano.CreateTableContext:
    case Ano.TableidContext:
      return ano.getTableNames();
    case Ano.SourceColumnContext:
    case Ano.MaskContext:
      return [];

    default:
      return secondTry ? [] : getSuggestions(prev, ano, null, true);
  }
  function tryAgain(ctx: ParserRuleContext, ano: AnoHolder, prev: any) {
    const index = ctx?.parent?.children?.indexOf(ctx);
    if (!index || index < 1) return getSuggestions(ctx._parent, ano, prev);
    return getSuggestions(ctx._parent?.getChild(index - 1), ano, prev, true);
  }

  function getIdContextSuggestions(
    ctx: any,
    ano: AnoHolder,
    prev: ParserRuleContext | TerminalNode | ParseTree | null = null,
    secondTry = false
  ) {
    if (!prev) return [];
    if (prev.text == "child" || prev.text == "parent")
      return getSuggestions(
        prev!.parent!.getChild(1).getChild(0),
        ano,
        ctx.parent
      );
    if (ctx.parent.constructor == Ano.TableidContext) {
      return ["child"];
    }
    if (ctx.parent.constructor == Ano.ColumnidContext) {
      return [];
    }
    return getSuggestions(ctx.parent, ano, prev, secondTry);
  }
}
