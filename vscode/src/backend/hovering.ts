import { getActiveAno, AnoHolder } from "../backend/anoclass";
import * as Ano from "parser/AnoParser";
import { getError } from "./validation";
import { readMarkdown } from "./assets";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { ParserRuleContext } from "antlr4ts";

const hovers = readMarkdown("hover.md");
const builtins = readMarkdown("builtin.md");

function addRuleHelp(help: string[], rule: ParseTree) {
  const lookup = rule?.constructor.name ?? "Context";
  help.push(...(hovers.get(lookup.substring(0, lookup.length - 7)) ?? []));
}

function childText(ctx: ParserRuleContext | undefined, i: number) {
  if (ctx) {
    const ch = ctx.children;
    if (ch && ch.length > i) return ch[i].text;
  }
  return "";
}

function fillHover(
  ano: AnoHolder,
  help: string[],
  rule: ParseTree | undefined
) {
  switch (rule?.constructor) {
    case TerminalNode:
    case Ano.ParamContext:
    case Ano.IdContext:
      return fillHover(ano, help, rule.parent);
    case ErrorNode:
      return [(<ErrorNode>rule).text];
    case Ano.ConvertprogContext: {
      const name = rule.text;
      const lookup = ano.tree
        .conversion()
        .find((x) => x.text.split(".").pop() == name);
      if (lookup) return ["Custom conversion program: " + lookup.text];
      return builtins.get(name);
    }
    case Ano.TransformprogContext: {
      const name = rule.text;
      const lookup = ano.tree
        .transformation()
        .find((x) => x.text.split(".").pop() == name);
      if (lookup) return ["Custom transformation program: " + lookup.text];
      return builtins.get(name);
    }
    case Ano.DistributeprogContext: {
      const name = rule.text;
      const lookup = ano.tree
        .distribution()
        .find((x) => x.text.split(".").pop() == name);
      if (lookup) return ["Custom distribution program: " + lookup.text];
      return builtins.get(name);
    }
    case Ano.TableidContext:
      {
        const tableName = rule.text;
        help.push("Table: " + tableName);
        const tableDef = ano.getTableDef(tableName);
        help.push("Columns: " + ano.getColumnNames(tableDef).join(", "));
        const fks = ano.getFKs();
        const ptables = fks
          .filter((fk) => fk.pTable == tableName)
          .map((fk) => fk.cTable);
        const ctables = fks
          .filter((fk) => fk.cTable == tableName)
          .map((fk) => fk.pTable);
        help.push("Parent Relations: " + ptables.join(", "));
        help.push("Children Relations: " + ctables.join(", "));
      }
      break;
    case Ano.ColumnidContext:
      {
        const tableName = ano.getTableName(<Ano.ColumnidContext>rule);
        const columName = rule.text;
        let hlp = "Column: " + tableName + "." + columName;
        const tableDef = ano.getTableDef(tableName);
        if (tableDef) {
          const columnDef = ano.getColumnDef(tableDef, columName);
          if (columnDef) {
            hlp += " " + columnDef.datatype().text;
            const precision = columnDef.precision();
            if (precision) {
              const size = precision.numsize();
              const scale = precision.scale();
              hlp +=
                "(" +
                childText(size, 1) +
                (scale ? ", " + childText(scale, 1) : "") +
                ")";
            }
          }
        }
        help.push(hlp);
      }
      break;
  }
}

// strings are markdown syntax, see https://www.markdownguide.org/basic-syntax/
export function getHover(line: number, char: number): string[] {
  const ano = getActiveAno();
  const token = ano.findToken(line, char);
  if (!token) return [];
  const rule = ano.findRule(token.tokenIndex);
  const help: string[] = [];

  const error = getError(rule);
  if (error) return [error];

  fillHover(ano, help, rule);
  addRuleHelp(help, rule);

  let par = rule;
  const rulesToShow = 3;
  let rulesShown = 0;
  while (
    (par instanceof ParserRuleContext || par instanceof TerminalNode) &&
    !(
      par instanceof Ano.WorkTaskContext || par instanceof Ano.TaskGroupContext
    ) &&
    rulesShown < rulesToShow
  ) {
    if (par.parent instanceof ParserRuleContext) {
      addRuleHelp(help, par.parent);
      par = par.parent;
      rulesShown++;
    } else {
      break;
    }
  }

  if (!help.length) {
    if (rule instanceof TerminalNode) {
      help.push("Cannot find help for node " + rule.text);
    } else {
      help.push(
        "Cannot find help for '" + rule.constructor.name + "' in hover.md"
      );
    }
  }
  return help.reverse();
}
