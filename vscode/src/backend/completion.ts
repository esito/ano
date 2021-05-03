import { SourceColumnContext } from './../parser/AnoParser';
import { AnoHolder, getActiveAno, DATATYPES, RANDOMTYPES } from "./anoclass";
import * as Ano from "../parser/AnoParser";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ParserRuleContext } from "antlr4ts";
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
  //const previousPreviousRule = node ? ano.findRule(node.tokenIndex - 2) : null;
  const rule = node ? ano.findRule(node.tokenIndex) : null;
  // if (node?.type == -1) {
  //   return getSuggestions(previousRule, ano, previousPreviousRule);
  // }  
  if (rule) list.push(...getSuggestions(previousRule, ano, rule));
  //if (rule?.parent) list.push(...getSuggestions(rule?.parent, ano));
  // if (previousRule) list.push(...getSuggestions(previousRule, ano));
  // if (rule2?.parent) list.push(...getSuggestions(rule2?.parent, ano));
  return list;
}
function getDataTypeSuggestions(ctx: ParserRuleContext): string[] {
  const integerDatatype = ctx.parent?.children?.filter(ch => ch.text === "integer");
  const decimalDatatype = ctx.parent?.children?.filter(ch => ch.text === "decimal");
  if (integerDatatype?.length === 1) {
    return arr("size");
  } else if (decimalDatatype?.length === 1) {
    return arr("size,scale");
  }
  return [];
}

function getParentOfType(ctx: any, type: any) {
  return (ctx.context == Ano.ModelContext || ctx.constructor == type) ? ctx : getParentOfType(ctx.parent, type);
}

function getSuggestions(context: any, ano: AnoHolder, previousRule?: any): string[] {
  if (context === undefined) return [];
  if (context.constructor == TerminalNode) {
    return getSuggestions((<TerminalNode>context).parent, ano, previousRule);
  }
  const ctx = <ParserRuleContext>context;
  const parent = ctx.parent;
  switch (ctx.constructor) {
    case Ano.ModelContext:
      return arr("table,foreign-key,conversion,transformation,distribution,randomType,sql-after,sql-before,task"
      );
    case Ano.TableContext:
      return [...arr("column,primary-key,unique-key"), ...getSuggestions(getParentOfType(ctx, Ano.ModelContext), ano, previousRule)];
    case Ano.TableDefContext:
      return getSuggestions(ctx.parent, ano, previousRule);
    case Ano.ColumnContext:
      return arr(DATATYPES);
    case Ano.ColumnDefContext:
      return [...getDataTypeSuggestions(ctx), ...getSuggestions(getParentOfType(ctx, Ano.TableContext), ano, previousRule)];
    case Ano.DistributeprogContext:
      return ano.getDistributionNames();
    case Ano.BracketStartContext:
      return arr("update,delete,create,erase,sar");
    // case Ano.SqlBeforeContext:
    //   return [];
    // case Ano.SqlAfterContext:
    //   return [];
    case Ano.UpdateContext:
      return ano.getTableNames();
    case Ano.UTableidContext:
      return arr("selection-key,sql-after,sql-before,where,mask,randomize,shuffle");
    case Ano.UTaskidContext:
      return arr("selection-key,sql-after,sql-before,where,mask,randomize,shuffle");
    case Ano.SelectionKeyContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.WhereContext:
      return [];
    // case Ano.PropagateContext:
    //   return ano.getTableNames();
    // // case Ano.DotContext:
    // //   return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.MaskContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.MaskTaskidContext:
      return arr("format,transform,unique,column,file,random-integer,random-decimal,random-time,random-date,random-datetime,sequence");
    case Ano.MaskColumnidContext:
      return arr("format,transform,unique,column,file,random-integer,random-decimal,random-time,random-date,random-datetime,sequence");
    case Ano.FormatContext:
      return arr("transform,unique,column,file,random-integer,random-decimal,random-time,random-date,random-datetime,sequence,mask,randomize,shuffle");
    case Ano.TransformContext:
      return ano.getTransformationNames();
    case Ano.TransformprogContext:
      return arr("unique,column,file,random-integer,random-decimal,random-time,random-date,random-datetime,mask,randomize,shuffle");
    case Ano.UniqueMaskContext:
      return arr("column,file,random-integer,random-decimal,random-time,random-date,random-datetime,sequence,mask,randomize,shuffle");
    case Ano.RandomIntegerContext:
      return arr("random-decimal,random-time,random-date,random-datetime,sequence,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.RandomDecimalContext:
      return arr("random-time,random-date,random-datetime,sequence,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.RandomTimeContext:
      return arr("random-date,random-datetime,sequence,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.RandomDateContext:
      return arr("random-datetime,sequence,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.RandomdatetimeContext:
      return arr("sequence,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.FilenameContext:
      return arr("random-order,convert,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.ConvertprogContext:
      return ano.getConversionNames();
    case Ano.RandomizeContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.RColumnidContext:
      return arr("type");
    case Ano.RTaskidContext:
      return arr("type");
    case Ano.RandomTypeContext:
      return arr("format,convert,transform,unique,offset,flat-noise,percentage-noise,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.RFormatContext:
      return arr("convert,transform,unique,offset,flat-noise,percentage-noise,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.RConvertContext:
      return arr("transform,unique,offset,flat-noise,percentage-noise,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.RTransformContext:
      return arr("unique,offset,flat-noise,percentage-noise,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.RUniqueMaskContext:
      return arr("offset,flat-noise,percentage-noise,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.OffsetContext:
      return arr("flat-noise,percentage-noise,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.FlatNoiseContext:
      return arr("percentage-noise,mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.PercentageNoiseContext:
      return arr("mask,randomize,shuffle,update,delete,create,erase,sar");
    case Ano.MapfileContext:
      return arr("input,output,input-output,encrypted");
    case Ano.ShuffleContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.MapUsageContext:
      return getSuggestions(ctx.parent, ano, previousRule);
    case Ano.CreateContext:
      return arr("selection-key,minimum-rows,mask,randomize,shuffle,distribute");
    case Ano.CreateTableContext:
      return arr("table");
    case Ano.CreateChildColumnsContext:
      return arr("child");
    case Ano.CreateParentColumnsContext:
      return arr("parent");
    case Ano.DeleteContext:
      return arr("selection-key,where,method");
    case Ano.MethodContext:
      return arr("cascading,not-in,not-exists");
    case Ano.DeleteTableContext:
      return arr("cascade");
    case Ano.ChildColsContext:
      return arr("child");
    case Ano.ParentColsContext:
      return arr("parent");
    case Ano.EraseContext:
      return arr("selection-key,sql-after,sql-before,where,setnull");
    case Ano.EraseTableContext:
      return arr("cascade");
    case Ano.SarContext:
      return arr("selection-key,sql-after,sql-before,where,mask");
    case Ano.SarTableContext:
      return arr("cascade");
    case Ano.MaskColumnContext:
      return arr("format,transform");
  }
  return getSuggestions(parent, ano, previousRule);
}
