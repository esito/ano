import { AnoHolder, getActiveAno, DATATYPES, RANDOMTYPES } from "./anoclass";
import * as Ano from "../parser/AnoParser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

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
  const node = ano.findToken(line, char);
  const rule = node ? ano.findRule(node.tokenIndex) : null;
  if (rule) list.push(...getSuggestions(rule, ano));
  if (rule?.parent) list.push(...getSuggestions(rule?.parent, ano));
  return list;
}

function getSuggestions(ctx: any, ano: AnoHolder) {
  switch (ctx.constructor) {
    case TerminalNode:
    case Ano.IdContext:
      return getSuggestions((<TerminalNode>ctx).parent, ano);
    case Ano.TableContext:
      return arr("column,primary-key,unique-key");
    case Ano.ColumnContext: {
      switch ((<Ano.ColumnContext>ctx).datatype.name) {
        case "integer":
          return arr("size");
        case "decimal":
          return arr("size,scale");
      }
      return [];
    }
    case Ano.TableidContext:
      return ano.getTableNames();
    case Ano.ColumnidContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.ConvertprogContext:
      return ano.getConversionNames();
    case Ano.TransformprogContext:
      return ano.getTransformationNames();
    case Ano.DistributeprogContext:
      return ano.getDistributionNames();
    case Ano.DatatypeContext:
      return arr(DATATYPES);
    case Ano.RandomTypeContext:
      return arr(RANDOMTYPES);
    case Ano.ModelContext:
      return arr(
        "table,foreign-key,conversion,transformation,distribution,randomType,sql,task"
      );
  }
  return [];
}
