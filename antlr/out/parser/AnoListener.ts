// Generated from Ano.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `AnoParser`.
 */
export interface AnoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AnoParser.model`.
	 * @param ctx the parse tree
	 */
	enterModel?: (ctx: ModelContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.model`.
	 * @param ctx the parse tree
	 */
	exitModel?: (ctx: ModelContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.table`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.table`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.column`.
	 * @param ctx the parse tree
	 */
	enterColumn?: (ctx: ColumnContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.column`.
	 * @param ctx the parse tree
	 */
	exitColumn?: (ctx: ColumnContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.datatype`.
	 * @param ctx the parse tree
	 */
	enterDatatype?: (ctx: DatatypeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.datatype`.
	 * @param ctx the parse tree
	 */
	exitDatatype?: (ctx: DatatypeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.precision`.
	 * @param ctx the parse tree
	 */
	enterPrecision?: (ctx: PrecisionContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.precision`.
	 * @param ctx the parse tree
	 */
	exitPrecision?: (ctx: PrecisionContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.numsize`.
	 * @param ctx the parse tree
	 */
	enterNumsize?: (ctx: NumsizeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.numsize`.
	 * @param ctx the parse tree
	 */
	exitNumsize?: (ctx: NumsizeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.scale`.
	 * @param ctx the parse tree
	 */
	enterScale?: (ctx: ScaleContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.scale`.
	 * @param ctx the parse tree
	 */
	exitScale?: (ctx: ScaleContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.pk`.
	 * @param ctx the parse tree
	 */
	enterPk?: (ctx: PkContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.pk`.
	 * @param ctx the parse tree
	 */
	exitPk?: (ctx: PkContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.unique`.
	 * @param ctx the parse tree
	 */
	enterUnique?: (ctx: UniqueContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.unique`.
	 * @param ctx the parse tree
	 */
	exitUnique?: (ctx: UniqueContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.fk`.
	 * @param ctx the parse tree
	 */
	enterFk?: (ctx: FkContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.fk`.
	 * @param ctx the parse tree
	 */
	exitFk?: (ctx: FkContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.fkParent`.
	 * @param ctx the parse tree
	 */
	enterFkParent?: (ctx: FkParentContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.fkParent`.
	 * @param ctx the parse tree
	 */
	exitFkParent?: (ctx: FkParentContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.fkChild`.
	 * @param ctx the parse tree
	 */
	enterFkChild?: (ctx: FkChildContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.fkChild`.
	 * @param ctx the parse tree
	 */
	exitFkChild?: (ctx: FkChildContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.fkCols`.
	 * @param ctx the parse tree
	 */
	enterFkCols?: (ctx: FkColsContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.fkCols`.
	 * @param ctx the parse tree
	 */
	exitFkCols?: (ctx: FkColsContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.columns`.
	 * @param ctx the parse tree
	 */
	enterColumns?: (ctx: ColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.columns`.
	 * @param ctx the parse tree
	 */
	exitColumns?: (ctx: ColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.randomType`.
	 * @param ctx the parse tree
	 */
	enterRandomType?: (ctx: RandomTypeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.randomType`.
	 * @param ctx the parse tree
	 */
	exitRandomType?: (ctx: RandomTypeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.conversion`.
	 * @param ctx the parse tree
	 */
	enterConversion?: (ctx: ConversionContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.conversion`.
	 * @param ctx the parse tree
	 */
	exitConversion?: (ctx: ConversionContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.transformation`.
	 * @param ctx the parse tree
	 */
	enterTransformation?: (ctx: TransformationContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.transformation`.
	 * @param ctx the parse tree
	 */
	exitTransformation?: (ctx: TransformationContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.distribution`.
	 * @param ctx the parse tree
	 */
	enterDistribution?: (ctx: DistributionContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.distribution`.
	 * @param ctx the parse tree
	 */
	exitDistribution?: (ctx: DistributionContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.distributeprog`.
	 * @param ctx the parse tree
	 */
	enterDistributeprog?: (ctx: DistributeprogContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.distributeprog`.
	 * @param ctx the parse tree
	 */
	exitDistributeprog?: (ctx: DistributeprogContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.workTask`.
	 * @param ctx the parse tree
	 */
	enterWorkTask?: (ctx: WorkTaskContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.workTask`.
	 * @param ctx the parse tree
	 */
	exitWorkTask?: (ctx: WorkTaskContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.sqlBefore`.
	 * @param ctx the parse tree
	 */
	enterSqlBefore?: (ctx: SqlBeforeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.sqlBefore`.
	 * @param ctx the parse tree
	 */
	exitSqlBefore?: (ctx: SqlBeforeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.sqlAfter`.
	 * @param ctx the parse tree
	 */
	enterSqlAfter?: (ctx: SqlAfterContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.sqlAfter`.
	 * @param ctx the parse tree
	 */
	exitSqlAfter?: (ctx: SqlAfterContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.sql`.
	 * @param ctx the parse tree
	 */
	enterSql?: (ctx: SqlContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.sql`.
	 * @param ctx the parse tree
	 */
	exitSql?: (ctx: SqlContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.taskGroup`.
	 * @param ctx the parse tree
	 */
	enterTaskGroup?: (ctx: TaskGroupContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.taskGroup`.
	 * @param ctx the parse tree
	 */
	exitTaskGroup?: (ctx: TaskGroupContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.update`.
	 * @param ctx the parse tree
	 */
	enterUpdate?: (ctx: UpdateContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.update`.
	 * @param ctx the parse tree
	 */
	exitUpdate?: (ctx: UpdateContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.selectionKey`.
	 * @param ctx the parse tree
	 */
	enterSelectionKey?: (ctx: SelectionKeyContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.selectionKey`.
	 * @param ctx the parse tree
	 */
	exitSelectionKey?: (ctx: SelectionKeyContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.anonymization`.
	 * @param ctx the parse tree
	 */
	enterAnonymization?: (ctx: AnonymizationContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.anonymization`.
	 * @param ctx the parse tree
	 */
	exitAnonymization?: (ctx: AnonymizationContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.propagate`.
	 * @param ctx the parse tree
	 */
	enterPropagate?: (ctx: PropagateContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.propagate`.
	 * @param ctx the parse tree
	 */
	exitPropagate?: (ctx: PropagateContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.propagateColumn`.
	 * @param ctx the parse tree
	 */
	enterPropagateColumn?: (ctx: PropagateColumnContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.propagateColumn`.
	 * @param ctx the parse tree
	 */
	exitPropagateColumn?: (ctx: PropagateColumnContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.tempKey`.
	 * @param ctx the parse tree
	 */
	enterTempKey?: (ctx: TempKeyContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.tempKey`.
	 * @param ctx the parse tree
	 */
	exitTempKey?: (ctx: TempKeyContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.mask`.
	 * @param ctx the parse tree
	 */
	enterMask?: (ctx: MaskContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.mask`.
	 * @param ctx the parse tree
	 */
	exitMask?: (ctx: MaskContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.uniqueMask`.
	 * @param ctx the parse tree
	 */
	enterUniqueMask?: (ctx: UniqueMaskContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.uniqueMask`.
	 * @param ctx the parse tree
	 */
	exitUniqueMask?: (ctx: UniqueMaskContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.transform`.
	 * @param ctx the parse tree
	 */
	enterTransform?: (ctx: TransformContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.transform`.
	 * @param ctx the parse tree
	 */
	exitTransform?: (ctx: TransformContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.transformprog`.
	 * @param ctx the parse tree
	 */
	enterTransformprog?: (ctx: TransformprogContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.transformprog`.
	 * @param ctx the parse tree
	 */
	exitTransformprog?: (ctx: TransformprogContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.convert`.
	 * @param ctx the parse tree
	 */
	enterConvert?: (ctx: ConvertContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.convert`.
	 * @param ctx the parse tree
	 */
	exitConvert?: (ctx: ConvertContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.convertprog`.
	 * @param ctx the parse tree
	 */
	enterConvertprog?: (ctx: ConvertprogContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.convertprog`.
	 * @param ctx the parse tree
	 */
	exitConvertprog?: (ctx: ConvertprogContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.source`.
	 * @param ctx the parse tree
	 */
	enterSource?: (ctx: SourceContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.source`.
	 * @param ctx the parse tree
	 */
	exitSource?: (ctx: SourceContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.sourceColumn`.
	 * @param ctx the parse tree
	 */
	enterSourceColumn?: (ctx: SourceColumnContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.sourceColumn`.
	 * @param ctx the parse tree
	 */
	exitSourceColumn?: (ctx: SourceColumnContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.sourceSequence`.
	 * @param ctx the parse tree
	 */
	enterSourceSequence?: (ctx: SourceSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.sourceSequence`.
	 * @param ctx the parse tree
	 */
	exitSourceSequence?: (ctx: SourceSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	enterSourceFile?: (ctx: SourceFileContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	exitSourceFile?: (ctx: SourceFileContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.randomOrder`.
	 * @param ctx the parse tree
	 */
	enterRandomOrder?: (ctx: RandomOrderContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.randomOrder`.
	 * @param ctx the parse tree
	 */
	exitRandomOrder?: (ctx: RandomOrderContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.sourceRandom`.
	 * @param ctx the parse tree
	 */
	enterSourceRandom?: (ctx: SourceRandomContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.sourceRandom`.
	 * @param ctx the parse tree
	 */
	exitSourceRandom?: (ctx: SourceRandomContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.randomInteger`.
	 * @param ctx the parse tree
	 */
	enterRandomInteger?: (ctx: RandomIntegerContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.randomInteger`.
	 * @param ctx the parse tree
	 */
	exitRandomInteger?: (ctx: RandomIntegerContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.randomDecimal`.
	 * @param ctx the parse tree
	 */
	enterRandomDecimal?: (ctx: RandomDecimalContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.randomDecimal`.
	 * @param ctx the parse tree
	 */
	exitRandomDecimal?: (ctx: RandomDecimalContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.randomTime`.
	 * @param ctx the parse tree
	 */
	enterRandomTime?: (ctx: RandomTimeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.randomTime`.
	 * @param ctx the parse tree
	 */
	exitRandomTime?: (ctx: RandomTimeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.randomDate`.
	 * @param ctx the parse tree
	 */
	enterRandomDate?: (ctx: RandomDateContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.randomDate`.
	 * @param ctx the parse tree
	 */
	exitRandomDate?: (ctx: RandomDateContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.randomdatetime`.
	 * @param ctx the parse tree
	 */
	enterRandomdatetime?: (ctx: RandomdatetimeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.randomdatetime`.
	 * @param ctx the parse tree
	 */
	exitRandomdatetime?: (ctx: RandomdatetimeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.randomize`.
	 * @param ctx the parse tree
	 */
	enterRandomize?: (ctx: RandomizeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.randomize`.
	 * @param ctx the parse tree
	 */
	exitRandomize?: (ctx: RandomizeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.randomizeType`.
	 * @param ctx the parse tree
	 */
	enterRandomizeType?: (ctx: RandomizeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.randomizeType`.
	 * @param ctx the parse tree
	 */
	exitRandomizeType?: (ctx: RandomizeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.offset`.
	 * @param ctx the parse tree
	 */
	enterOffset?: (ctx: OffsetContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.offset`.
	 * @param ctx the parse tree
	 */
	exitOffset?: (ctx: OffsetContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.flatNoise`.
	 * @param ctx the parse tree
	 */
	enterFlatNoise?: (ctx: FlatNoiseContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.flatNoise`.
	 * @param ctx the parse tree
	 */
	exitFlatNoise?: (ctx: FlatNoiseContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.percentageNoise`.
	 * @param ctx the parse tree
	 */
	enterPercentageNoise?: (ctx: PercentageNoiseContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.percentageNoise`.
	 * @param ctx the parse tree
	 */
	exitPercentageNoise?: (ctx: PercentageNoiseContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.shuffle`.
	 * @param ctx the parse tree
	 */
	enterShuffle?: (ctx: ShuffleContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.shuffle`.
	 * @param ctx the parse tree
	 */
	exitShuffle?: (ctx: ShuffleContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.mapUsage`.
	 * @param ctx the parse tree
	 */
	enterMapUsage?: (ctx: MapUsageContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.mapUsage`.
	 * @param ctx the parse tree
	 */
	exitMapUsage?: (ctx: MapUsageContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.input`.
	 * @param ctx the parse tree
	 */
	enterInput?: (ctx: InputContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.input`.
	 * @param ctx the parse tree
	 */
	exitInput?: (ctx: InputContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.output`.
	 * @param ctx the parse tree
	 */
	enterOutput?: (ctx: OutputContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.output`.
	 * @param ctx the parse tree
	 */
	exitOutput?: (ctx: OutputContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.inputOutput`.
	 * @param ctx the parse tree
	 */
	enterInputOutput?: (ctx: InputOutputContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.inputOutput`.
	 * @param ctx the parse tree
	 */
	exitInputOutput?: (ctx: InputOutputContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.create`.
	 * @param ctx the parse tree
	 */
	enterCreate?: (ctx: CreateContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.create`.
	 * @param ctx the parse tree
	 */
	exitCreate?: (ctx: CreateContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.distribute`.
	 * @param ctx the parse tree
	 */
	enterDistribute?: (ctx: DistributeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.distribute`.
	 * @param ctx the parse tree
	 */
	exitDistribute?: (ctx: DistributeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.createTable`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.createTable`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.createChildColumns`.
	 * @param ctx the parse tree
	 */
	enterCreateChildColumns?: (ctx: CreateChildColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.createChildColumns`.
	 * @param ctx the parse tree
	 */
	exitCreateChildColumns?: (ctx: CreateChildColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.createParentColumns`.
	 * @param ctx the parse tree
	 */
	enterCreateParentColumns?: (ctx: CreateParentColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.createParentColumns`.
	 * @param ctx the parse tree
	 */
	exitCreateParentColumns?: (ctx: CreateParentColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.minRows`.
	 * @param ctx the parse tree
	 */
	enterMinRows?: (ctx: MinRowsContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.minRows`.
	 * @param ctx the parse tree
	 */
	exitMinRows?: (ctx: MinRowsContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.where`.
	 * @param ctx the parse tree
	 */
	enterWhere?: (ctx: WhereContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.where`.
	 * @param ctx the parse tree
	 */
	exitWhere?: (ctx: WhereContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.delete`.
	 * @param ctx the parse tree
	 */
	enterDelete?: (ctx: DeleteContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.delete`.
	 * @param ctx the parse tree
	 */
	exitDelete?: (ctx: DeleteContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.method`.
	 * @param ctx the parse tree
	 */
	enterMethod?: (ctx: MethodContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.method`.
	 * @param ctx the parse tree
	 */
	exitMethod?: (ctx: MethodContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.cascading`.
	 * @param ctx the parse tree
	 */
	enterCascading?: (ctx: CascadingContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.cascading`.
	 * @param ctx the parse tree
	 */
	exitCascading?: (ctx: CascadingContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.notIn`.
	 * @param ctx the parse tree
	 */
	enterNotIn?: (ctx: NotInContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.notIn`.
	 * @param ctx the parse tree
	 */
	exitNotIn?: (ctx: NotInContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.notExists`.
	 * @param ctx the parse tree
	 */
	enterNotExists?: (ctx: NotExistsContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.notExists`.
	 * @param ctx the parse tree
	 */
	exitNotExists?: (ctx: NotExistsContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.deleteTable`.
	 * @param ctx the parse tree
	 */
	enterDeleteTable?: (ctx: DeleteTableContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.deleteTable`.
	 * @param ctx the parse tree
	 */
	exitDeleteTable?: (ctx: DeleteTableContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.childCols`.
	 * @param ctx the parse tree
	 */
	enterChildCols?: (ctx: ChildColsContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.childCols`.
	 * @param ctx the parse tree
	 */
	exitChildCols?: (ctx: ChildColsContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.parentCols`.
	 * @param ctx the parse tree
	 */
	enterParentCols?: (ctx: ParentColsContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.parentCols`.
	 * @param ctx the parse tree
	 */
	exitParentCols?: (ctx: ParentColsContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.setNull`.
	 * @param ctx the parse tree
	 */
	enterSetNull?: (ctx: SetNullContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.setNull`.
	 * @param ctx the parse tree
	 */
	exitSetNull?: (ctx: SetNullContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.erase`.
	 * @param ctx the parse tree
	 */
	enterErase?: (ctx: EraseContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.erase`.
	 * @param ctx the parse tree
	 */
	exitErase?: (ctx: EraseContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.eraseTable`.
	 * @param ctx the parse tree
	 */
	enterEraseTable?: (ctx: EraseTableContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.eraseTable`.
	 * @param ctx the parse tree
	 */
	exitEraseTable?: (ctx: EraseTableContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.sar`.
	 * @param ctx the parse tree
	 */
	enterSar?: (ctx: SarContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.sar`.
	 * @param ctx the parse tree
	 */
	exitSar?: (ctx: SarContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.sarTable`.
	 * @param ctx the parse tree
	 */
	enterSarTable?: (ctx: SarTableContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.sarTable`.
	 * @param ctx the parse tree
	 */
	exitSarTable?: (ctx: SarTableContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.maskColumn`.
	 * @param ctx the parse tree
	 */
	enterMaskColumn?: (ctx: MaskColumnContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.maskColumn`.
	 * @param ctx the parse tree
	 */
	exitMaskColumn?: (ctx: MaskColumnContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.bracketStart`.
	 * @param ctx the parse tree
	 */
	enterBracketStart?: (ctx: BracketStartContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.bracketStart`.
	 * @param ctx the parse tree
	 */
	exitBracketStart?: (ctx: BracketStartContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.bracketEnd`.
	 * @param ctx the parse tree
	 */
	enterBracketEnd?: (ctx: BracketEndContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.bracketEnd`.
	 * @param ctx the parse tree
	 */
	exitBracketEnd?: (ctx: BracketEndContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.columnid`.
	 * @param ctx the parse tree
	 */
	enterColumnid?: (ctx: ColumnidContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.columnid`.
	 * @param ctx the parse tree
	 */
	exitColumnid?: (ctx: ColumnidContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.tableid`.
	 * @param ctx the parse tree
	 */
	enterTableid?: (ctx: TableidContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.tableid`.
	 * @param ctx the parse tree
	 */
	exitTableid?: (ctx: TableidContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.uniqueid`.
	 * @param ctx the parse tree
	 */
	enterUniqueid?: (ctx: UniqueidContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.uniqueid`.
	 * @param ctx the parse tree
	 */
	exitUniqueid?: (ctx: UniqueidContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.datetime`.
	 * @param ctx the parse tree
	 */
	enterDatetime?: (ctx: DatetimeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.datetime`.
	 * @param ctx the parse tree
	 */
	exitDatetime?: (ctx: DatetimeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.filename`.
	 * @param ctx the parse tree
	 */
	enterFilename?: (ctx: FilenameContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.filename`.
	 * @param ctx the parse tree
	 */
	exitFilename?: (ctx: FilenameContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.textin`.
	 * @param ctx the parse tree
	 */
	enterTextin?: (ctx: TextinContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.textin`.
	 * @param ctx the parse tree
	 */
	exitTextin?: (ctx: TextinContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.posint`.
	 * @param ctx the parse tree
	 */
	enterPosint?: (ctx: PosintContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.posint`.
	 * @param ctx the parse tree
	 */
	exitPosint?: (ctx: PosintContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.decimal`.
	 * @param ctx the parse tree
	 */
	enterDecimal?: (ctx: DecimalContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.decimal`.
	 * @param ctx the parse tree
	 */
	exitDecimal?: (ctx: DecimalContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.taskid`.
	 * @param ctx the parse tree
	 */
	enterTaskid?: (ctx: TaskidContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.taskid`.
	 * @param ctx the parse tree
	 */
	exitTaskid?: (ctx: TaskidContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `AnoParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `AnoParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
}

