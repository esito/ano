// Generated from Ano.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ModelContext } from "./AnoParser";
import { TableContext } from "./AnoParser";
import { ColumnContext } from "./AnoParser";
import { DatatypeContext } from "./AnoParser";
import { PrecisionContext } from "./AnoParser";
import { NumsizeContext } from "./AnoParser";
import { ScaleContext } from "./AnoParser";
import { PkContext } from "./AnoParser";
import { UniqueContext } from "./AnoParser";
import { FkContext } from "./AnoParser";
import { FkParentContext } from "./AnoParser";
import { FkChildContext } from "./AnoParser";
import { FkColsContext } from "./AnoParser";
import { ColumnsContext } from "./AnoParser";
import { RandomTypeContext } from "./AnoParser";
import { ConversionContext } from "./AnoParser";
import { TransformationContext } from "./AnoParser";
import { DistributionContext } from "./AnoParser";
import { DistributeprogContext } from "./AnoParser";
import { WorkTaskContext } from "./AnoParser";
import { SqlBeforeContext } from "./AnoParser";
import { SqlAfterContext } from "./AnoParser";
import { SqlContext } from "./AnoParser";
import { TaskGroupContext } from "./AnoParser";
import { UpdateContext } from "./AnoParser";
import { SelectionKeyContext } from "./AnoParser";
import { AnonymizationContext } from "./AnoParser";
import { PropagateContext } from "./AnoParser";
import { PropagateColumnContext } from "./AnoParser";
import { TempKeyContext } from "./AnoParser";
import { MaskContext } from "./AnoParser";
import { UniqueMaskContext } from "./AnoParser";
import { FormatContext } from "./AnoParser";
import { TransformContext } from "./AnoParser";
import { TransformprogContext } from "./AnoParser";
import { ConvertContext } from "./AnoParser";
import { ConvertprogContext } from "./AnoParser";
import { SourceContext } from "./AnoParser";
import { SourceColumnContext } from "./AnoParser";
import { SourceSequenceContext } from "./AnoParser";
import { SourceFileContext } from "./AnoParser";
import { RandomOrderContext } from "./AnoParser";
import { SourceRandomContext } from "./AnoParser";
import { RandomIntegerContext } from "./AnoParser";
import { RandomDecimalContext } from "./AnoParser";
import { RandomTimeContext } from "./AnoParser";
import { RandomDateContext } from "./AnoParser";
import { RandomdatetimeContext } from "./AnoParser";
import { RandomizeContext } from "./AnoParser";
import { RandomizeTypeContext } from "./AnoParser";
import { OffsetContext } from "./AnoParser";
import { FlatNoiseContext } from "./AnoParser";
import { PercentageNoiseContext } from "./AnoParser";
import { ShuffleContext } from "./AnoParser";
import { MapContext } from "./AnoParser";
import { MapUsageContext } from "./AnoParser";
import { InputContext } from "./AnoParser";
import { OutputContext } from "./AnoParser";
import { InputOutputContext } from "./AnoParser";
import { CreateContext } from "./AnoParser";
import { DistributeContext } from "./AnoParser";
import { CreateTableContext } from "./AnoParser";
import { CreateChildColumnsContext } from "./AnoParser";
import { CreateParentColumnsContext } from "./AnoParser";
import { MinRowsContext } from "./AnoParser";
import { WhereContext } from "./AnoParser";
import { DeleteContext } from "./AnoParser";
import { MethodContext } from "./AnoParser";
import { CascadingContext } from "./AnoParser";
import { NotInContext } from "./AnoParser";
import { NotExistsContext } from "./AnoParser";
import { DeleteTableContext } from "./AnoParser";
import { ChildColsContext } from "./AnoParser";
import { ParentColsContext } from "./AnoParser";
import { SetNullContext } from "./AnoParser";
import { EraseContext } from "./AnoParser";
import { EraseTableContext } from "./AnoParser";
import { SarContext } from "./AnoParser";
import { SarTableContext } from "./AnoParser";
import { MaskColumnContext } from "./AnoParser";
import { BracketStartContext } from "./AnoParser";
import { BracketEndContext } from "./AnoParser";
import { ColumnidContext } from "./AnoParser";
import { TableidContext } from "./AnoParser";
import { UniqueidContext } from "./AnoParser";
import { DatetimeContext } from "./AnoParser";
import { TimeContext } from "./AnoParser";
import { DateContext } from "./AnoParser";
import { FilenameContext } from "./AnoParser";
import { TextinContext } from "./AnoParser";
import { IntegerContext } from "./AnoParser";
import { PosintContext } from "./AnoParser";
import { DecimalContext } from "./AnoParser";
import { TaskidContext } from "./AnoParser";
import { NamespaceContext } from "./AnoParser";
import { ParamContext } from "./AnoParser";
import { IdContext } from "./AnoParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AnoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AnoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `AnoParser.model`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModel?: (ctx: ModelContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.column`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn?: (ctx: ColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.datatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatatype?: (ctx: DatatypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.precision`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecision?: (ctx: PrecisionContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.numsize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumsize?: (ctx: NumsizeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.scale`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScale?: (ctx: ScaleContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.pk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPk?: (ctx: PkContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.unique`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnique?: (ctx: UniqueContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.fk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFk?: (ctx: FkContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.fkParent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFkParent?: (ctx: FkParentContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.fkChild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFkChild?: (ctx: FkChildContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.fkCols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFkCols?: (ctx: FkColsContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.columns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumns?: (ctx: ColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.randomType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomType?: (ctx: RandomTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.conversion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversion?: (ctx: ConversionContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.transformation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformation?: (ctx: TransformationContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.distribution`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistribution?: (ctx: DistributionContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.distributeprog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistributeprog?: (ctx: DistributeprogContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.workTask`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWorkTask?: (ctx: WorkTaskContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.sqlBefore`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlBefore?: (ctx: SqlBeforeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.sqlAfter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlAfter?: (ctx: SqlAfterContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.sql`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql?: (ctx: SqlContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.taskGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskGroup?: (ctx: TaskGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.update`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate?: (ctx: UpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.selectionKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionKey?: (ctx: SelectionKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.anonymization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymization?: (ctx: AnonymizationContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.propagate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropagate?: (ctx: PropagateContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.propagateColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropagateColumn?: (ctx: PropagateColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.tempKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTempKey?: (ctx: TempKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.mask`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMask?: (ctx: MaskContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.uniqueMask`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueMask?: (ctx: UniqueMaskContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.format`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormat?: (ctx: FormatContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransform?: (ctx: TransformContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.transformprog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformprog?: (ctx: TransformprogContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.convert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConvert?: (ctx: ConvertContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.convertprog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConvertprog?: (ctx: ConvertprogContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.source`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSource?: (ctx: SourceContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.sourceColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceColumn?: (ctx: SourceColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.sourceSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceSequence?: (ctx: SourceSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.sourceFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceFile?: (ctx: SourceFileContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.randomOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomOrder?: (ctx: RandomOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.sourceRandom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceRandom?: (ctx: SourceRandomContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.randomInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomInteger?: (ctx: RandomIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.randomDecimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomDecimal?: (ctx: RandomDecimalContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.randomTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomTime?: (ctx: RandomTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.randomDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomDate?: (ctx: RandomDateContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.randomdatetime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomdatetime?: (ctx: RandomdatetimeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.randomize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomize?: (ctx: RandomizeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.randomizeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomizeType?: (ctx: RandomizeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.offset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffset?: (ctx: OffsetContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.flatNoise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlatNoise?: (ctx: FlatNoiseContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.percentageNoise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPercentageNoise?: (ctx: PercentageNoiseContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.shuffle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShuffle?: (ctx: ShuffleContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.mapUsage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapUsage?: (ctx: MapUsageContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput?: (ctx: InputContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput?: (ctx: OutputContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.inputOutput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputOutput?: (ctx: InputOutputContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.create`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate?: (ctx: CreateContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.distribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistribute?: (ctx: DistributeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.createTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.createChildColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateChildColumns?: (ctx: CreateChildColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.createParentColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateParentColumns?: (ctx: CreateParentColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.minRows`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinRows?: (ctx: MinRowsContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.where`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhere?: (ctx: WhereContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.delete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete?: (ctx: DeleteContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod?: (ctx: MethodContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.cascading`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCascading?: (ctx: CascadingContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.notIn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotIn?: (ctx: NotInContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.notExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotExists?: (ctx: NotExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.deleteTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteTable?: (ctx: DeleteTableContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.childCols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChildCols?: (ctx: ChildColsContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.parentCols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentCols?: (ctx: ParentColsContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.setNull`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetNull?: (ctx: SetNullContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.erase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErase?: (ctx: EraseContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.eraseTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEraseTable?: (ctx: EraseTableContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.sar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSar?: (ctx: SarContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.sarTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSarTable?: (ctx: SarTableContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.maskColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaskColumn?: (ctx: MaskColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.bracketStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketStart?: (ctx: BracketStartContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.bracketEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketEnd?: (ctx: BracketEndContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.columnid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnid?: (ctx: ColumnidContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.tableid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableid?: (ctx: TableidContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.uniqueid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueid?: (ctx: UniqueidContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.datetime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetime?: (ctx: DatetimeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.filename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilename?: (ctx: FilenameContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.textin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextin?: (ctx: TextinContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.posint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosint?: (ctx: PosintContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.decimal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimal?: (ctx: DecimalContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.taskid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskid?: (ctx: TaskidContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace?: (ctx: NamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `AnoParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
}

