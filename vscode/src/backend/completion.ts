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
  const rule = node ? ano.findRule(node.tokenIndex) : null;
  if (rule) list.push(...getSuggestions(previousRule, ano, rule));
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
    case Ano.BracketStartContext:
      return arr("update,delete,create,erase,sar");
    case Ano.SqlBeforeContext:
      return [];
    case Ano.SqlAfterContext:
      return [];
    case Ano.UpdateContext:
      return ano.getTableNames();
    case Ano.UTableidContext:
      return arr("selection-key,sql-after,sql-before,where,mask,randomize,shuffle");
    case Ano.UTaskidContext:
      return arr("selection-key,sql-after,sql-before,where,mask,randomize,shuffle");
    case Ano.SelectionKeyContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.WhereContext:
      return arr("mask,randomize,shuffle");
    case Ano.MaskContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.MaskTaskidContext:
      return arr("format,transform,unique,column,file,random-integer,random-decimal,random-time,random-date,random-datetime,sequence");
    case Ano.MaskColumnidContext:
      return arr("format,transform,unique,column,file,random-integer,random-decimal,random-time,random-date,random-datetime,sequence");
    case Ano.FormatContext:
      return arr("transform,unique,column,file,random-integer,random-decimal,random-time,random-date,random-datetime,sequence,mask,randomize,shuffle,map,temporary-value,propagate");
    case Ano.TransformContext:
      return ano.getTransformationNames();
    case Ano.TransformprogContext:
      return arr("unique,column,file,random-integer,random-decimal,random-time,random-date,random-datetime,mask,randomize,shuffle");
    case Ano.UniqueMaskContext:
      return arr("column,file,random-integer,random-decimal,random-time,random-date,random-datetime,sequence,mask,randomize,shuffle");
    case Ano.SourceColumnContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.ScColumnidContext:
      return arr("convert,file,random-integer,random-decimal,random-time,random-date,random-datetime,sequence,mask,randomize,shuffle,map,temporary-value,propagate");
    case Ano.RandomIntegerContext:
      return arr("random-decimal,random-time,random-date,random-datetime,sequence,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.RandomDecimalContext:
      return arr("random-time,random-date,random-datetime,sequence,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.RandomTimeContext:
      return arr("random-date,random-datetime,sequence,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.RandomDateContext:
      return arr("random-datetime,sequence,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.RandomdatetimeContext:
      return arr("sequence,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.SourceSequenceContext:
      return arr("mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar,distribute");
    case Ano.FilenameContext:
      return arr("random-order,convert,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.RandomOrderContext:
      return arr("convert,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.ConvertContext:
      return ano.getConversionNames();
    case Ano.ConvertprogContext:
      return arr("mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.RandomizeContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.RColumnidContext:
      return arr("type");
    case Ano.RTaskidContext:
      return arr("type");
    case Ano.RandomTypeContext:
      return arr("format,convert,transform,unique,offset,flat-noise,percentage-noise,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.RFormatContext:
      return arr("convert,transform,unique,offset,flat-noise,percentage-noise,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.RConvertContext:
      return ano.getConversionNames();
    case Ano.RConvertprogContext:
      return arr("transform,unique,offset,flat-noise,percentage-noise,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.RTransformContext:
      return ano.getTransformationNames();
    case Ano.RTransformprogContext:
      return arr("unique,offset,flat-noise,percentage-noise,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.RUniqueMaskContext:
      return arr("offset,flat-noise,percentage-noise,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.OffsetContext:
      return arr("flat-noise,percentage-noise,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.FlatNoiseContext:
      return arr("percentage-noise,mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.PercentageNoiseContext:
      return arr("mask,randomize,shuffle,map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.ShuffleContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.ShColumnidContext:
      return arr("map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.ShTaskidContext:
      return arr("map,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.MapfileContext:
      return arr("input,output,input-output");
    case Ano.MapUsageContext:
      return arr("encrypted,temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.EncryptedContext:
      return arr("temporary-value,propagate,update,delete,create,erase,sar");
    case Ano.TempKeyContext:
      return arr("propagate,update,delete,create,erase,sar");
    case Ano.PropagateContext:
      return ano.getTableNames();
    case Ano.PropagateColumnContext:
      return arr("update,delete,create,erase,sar");
    case Ano.CreateContext:
      return ano.getTableNames();
    case Ano.CTableidContext:
      return arr("sql-after,sql-before,selection-key,minimum-rows,mask,randomize,shuffle,distribute");
    case Ano.CTaskidContext:
      return arr("sql-after,sql-before,selection-key,minimum-rows,mask,randomize,shuffle,distribute");
    case Ano.MinRowsContext:
      return arr("mask,randomize,shuffle");
    case Ano.DistributeContext:
      return ano.getDistributionNames();
    case Ano.DistributeprogContext:
      return arr("table");
    case Ano.CreateTableContext:
      return ano.getTableNames();
    case Ano.CreateChildColumnsContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.CreateParentColumnsContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.DeleteContext:
      return ano.getTableNames();
    case Ano.DTableidContext:
      return arr("sql-after,sql-before,selection-key,where,method");
    case Ano.DTaskidContext:
      return arr("sql-after,sql-before,selection-key,where,method");
    case Ano.DWhereContext:
      return arr("method");
    case Ano.MethodContext:
      return arr("cascading,not-in,not-exists");
    case Ano.CascadingContext:
      return arr("{");
    case Ano.NotExistsContext:
      return arr("{");
    case Ano.NotInContext:
      return arr("{");
    case Ano.SBracketStartContext:
      return arr("cascade");
    case Ano.TBracketStartContext:
      return arr("cascade");
    case Ano.DeleteTableContext:
      return ano.getTableNames();
    case Ano.EraseContext:
      return ano.getTableNames();
    case Ano.ETableidContext:
      return arr("sql-after,sql-before,selection-key,where,mask,setnull");
    case Ano.ETaskidContext:
      return arr("sql-after,sql-before,selection-key,where,mask,setnull");
    case Ano.EraseTableContext:
      return ano.getTableNames();
    case Ano.SarContext:
      return ano.getTableNames();
    case Ano.STableidContext:
      return arr("sql-after,sql-before,selection-key,where,mask");
    case Ano.STaskidContext:
      return arr("sql-after,sql-before,selection-key,where,mask");
    case Ano.SarTableContext:
      return ano.getTableNames();
    case Ano.SWhereContext:
      return arr("mask");
    case Ano.MaskColumnContext:
      return ano.getColumnNames(ano.getTableDef(ano.getTableName(ctx)));
    case Ano.MColumnidContext:
      return arr("format,transform,mask,{,cascade,}");
    case Ano.MFormatContext:
      return arr("transform,mask,{,}");
    case Ano.MTransformContext:
      return ano.getTransformationNames();
    case Ano.MTransformprogContext:
      return arr("mask,},{,cascade");
  }
  return getSuggestions(parent, ano, previousRule);
}
