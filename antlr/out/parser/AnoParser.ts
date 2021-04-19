// Generated from Ano.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { AnoListener } from "./AnoListener";
import { AnoVisitor } from "./AnoVisitor";


export class AnoParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly TIMEFMT = 61;
	public static readonly DATEFMT = 62;
	public static readonly STRING = 63;
	public static readonly NUMERIC = 64;
	public static readonly NAME = 65;
	public static readonly ML_COMMENT = 66;
	public static readonly SL_COMMENT = 67;
	public static readonly WS = 68;
	public static readonly ANY_OTHER = 69;
	public static readonly RULE_model = 0;
	public static readonly RULE_table = 1;
	public static readonly RULE_column = 2;
	public static readonly RULE_datatype = 3;
	public static readonly RULE_precision = 4;
	public static readonly RULE_numsize = 5;
	public static readonly RULE_scale = 6;
	public static readonly RULE_pk = 7;
	public static readonly RULE_unique = 8;
	public static readonly RULE_fk = 9;
	public static readonly RULE_fkParent = 10;
	public static readonly RULE_fkChild = 11;
	public static readonly RULE_fkCols = 12;
	public static readonly RULE_columns = 13;
	public static readonly RULE_randomType = 14;
	public static readonly RULE_conversion = 15;
	public static readonly RULE_transformation = 16;
	public static readonly RULE_distribution = 17;
	public static readonly RULE_distributeprog = 18;
	public static readonly RULE_workTask = 19;
	public static readonly RULE_sqlBefore = 20;
	public static readonly RULE_sqlAfter = 21;
	public static readonly RULE_sql = 22;
	public static readonly RULE_taskGroup = 23;
	public static readonly RULE_update = 24;
	public static readonly RULE_selectionKey = 25;
	public static readonly RULE_anonymization = 26;
	public static readonly RULE_propagate = 27;
	public static readonly RULE_propagateColumn = 28;
	public static readonly RULE_tempKey = 29;
	public static readonly RULE_mask = 30;
	public static readonly RULE_uniqueMask = 31;
	public static readonly RULE_format = 32;
	public static readonly RULE_transform = 33;
	public static readonly RULE_transformprog = 34;
	public static readonly RULE_convert = 35;
	public static readonly RULE_convertprog = 36;
	public static readonly RULE_source = 37;
	public static readonly RULE_sourceColumn = 38;
	public static readonly RULE_sourceSequence = 39;
	public static readonly RULE_sourceFile = 40;
	public static readonly RULE_randomOrder = 41;
	public static readonly RULE_sourceRandom = 42;
	public static readonly RULE_randomInteger = 43;
	public static readonly RULE_randomDecimal = 44;
	public static readonly RULE_randomTime = 45;
	public static readonly RULE_randomDate = 46;
	public static readonly RULE_randomdatetime = 47;
	public static readonly RULE_randomize = 48;
	public static readonly RULE_randomizeType = 49;
	public static readonly RULE_offset = 50;
	public static readonly RULE_flatNoise = 51;
	public static readonly RULE_percentageNoise = 52;
	public static readonly RULE_shuffle = 53;
	public static readonly RULE_map = 54;
	public static readonly RULE_mapUsage = 55;
	public static readonly RULE_input = 56;
	public static readonly RULE_output = 57;
	public static readonly RULE_inputOutput = 58;
	public static readonly RULE_create = 59;
	public static readonly RULE_distribute = 60;
	public static readonly RULE_createTable = 61;
	public static readonly RULE_createChildColumns = 62;
	public static readonly RULE_createParentColumns = 63;
	public static readonly RULE_minRows = 64;
	public static readonly RULE_where = 65;
	public static readonly RULE_delete = 66;
	public static readonly RULE_method = 67;
	public static readonly RULE_cascading = 68;
	public static readonly RULE_notIn = 69;
	public static readonly RULE_notExists = 70;
	public static readonly RULE_deleteTable = 71;
	public static readonly RULE_childCols = 72;
	public static readonly RULE_parentCols = 73;
	public static readonly RULE_setNull = 74;
	public static readonly RULE_erase = 75;
	public static readonly RULE_eraseTable = 76;
	public static readonly RULE_sar = 77;
	public static readonly RULE_sarTable = 78;
	public static readonly RULE_maskColumn = 79;
	public static readonly RULE_bracketStart = 80;
	public static readonly RULE_bracketEnd = 81;
	public static readonly RULE_columnid = 82;
	public static readonly RULE_tableid = 83;
	public static readonly RULE_uniqueid = 84;
	public static readonly RULE_datetime = 85;
	public static readonly RULE_time = 86;
	public static readonly RULE_date = 87;
	public static readonly RULE_filename = 88;
	public static readonly RULE_textin = 89;
	public static readonly RULE_integer = 90;
	public static readonly RULE_posint = 91;
	public static readonly RULE_decimal = 92;
	public static readonly RULE_taskid = 93;
	public static readonly RULE_namespace = 94;
	public static readonly RULE_param = 95;
	public static readonly RULE_id = 96;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"model", "table", "column", "datatype", "precision", "numsize", "scale", 
		"pk", "unique", "fk", "fkParent", "fkChild", "fkCols", "columns", "randomType", 
		"conversion", "transformation", "distribution", "distributeprog", "workTask", 
		"sqlBefore", "sqlAfter", "sql", "taskGroup", "update", "selectionKey", 
		"anonymization", "propagate", "propagateColumn", "tempKey", "mask", "uniqueMask", 
		"format", "transform", "transformprog", "convert", "convertprog", "source", 
		"sourceColumn", "sourceSequence", "sourceFile", "randomOrder", "sourceRandom", 
		"randomInteger", "randomDecimal", "randomTime", "randomDate", "randomdatetime", 
		"randomize", "randomizeType", "offset", "flatNoise", "percentageNoise", 
		"shuffle", "map", "mapUsage", "input", "output", "inputOutput", "create", 
		"distribute", "createTable", "createChildColumns", "createParentColumns", 
		"minRows", "where", "delete", "method", "cascading", "notIn", "notExists", 
		"deleteTable", "childCols", "parentCols", "setNull", "erase", "eraseTable", 
		"sar", "sarTable", "maskColumn", "bracketStart", "bracketEnd", "columnid", 
		"tableid", "uniqueid", "datetime", "time", "date", "filename", "textin", 
		"integer", "posint", "decimal", "taskid", "namespace", "param", "id",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'table'", "'column'", "'size'", "'scale'", "'primary-key'", 
		"'unique-key'", "'foreign-key'", "','", "'conversion'", "'transformation'", 
		"'distribution'", "'sql-before'", "'sql-after'", "'task'", "'update'", 
		"'selection-key'", "'propagate'", "'.'", "'temporary-value'", "'mask'", 
		"'unique'", "'format'", "'transform'", "'convert'", "'sequence'", "'file'", 
		"'random-order'", "'random-integer'", "'random-decimal'", "'random-time'", 
		"'random-date'", "'random-datetime'", "'randomize'", "'type'", "'offset'", 
		"'flat-noise'", "'percentage-noise'", "'shuffle'", "'map'", "'encrypted'", 
		"'input'", "'output'", "'input-output'", "'create'", "'distribute'", "'child'", 
		"'parent'", "'minimum-rows'", "'where'", "'delete'", "'method'", "'cascading'", 
		"'not-in'", "'not-exists'", "'cascade'", "'setnull'", "'erase'", "'sar'", 
		"'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "TIMEFMT", "DATEFMT", 
		"STRING", "NUMERIC", "NAME", "ML_COMMENT", "SL_COMMENT", "WS", "ANY_OTHER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AnoParser._LITERAL_NAMES, AnoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AnoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Ano.g4"; }

	// @Override
	public get ruleNames(): string[] { return AnoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AnoParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AnoParser._ATN, this);
	}
	// @RuleVersion(0)
	public model(): ModelContext {
		let _localctx: ModelContext = new ModelContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AnoParser.RULE_model);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__0) {
				{
				{
				this.state = 194;
				this.table();
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__6) {
				{
				{
				this.state = 200;
				this.fk();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__8) {
				{
				{
				this.state = 206;
				this.conversion();
				}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__9) {
				{
				{
				this.state = 212;
				this.transformation();
				}
				}
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__10) {
				{
				{
				this.state = 218;
				this.distribution();
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.STRING || _la === AnoParser.NAME) {
				{
				{
				this.state = 224;
				this.randomType();
				}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 230;
			this.sql();
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__13) {
				{
				{
				this.state = 231;
				this.taskGroup();
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this.match(AnoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table(): TableContext {
		let _localctx: TableContext = new TableContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AnoParser.RULE_table);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(AnoParser.T__0);
			this.state = 240;
			this.tableid();
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__1) {
				{
				{
				this.state = 241;
				this.column();
				}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__4) {
				{
				this.state = 247;
				this.pk();
				}
			}

			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__5) {
				{
				{
				this.state = 250;
				this.unique();
				}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column(): ColumnContext {
		let _localctx: ColumnContext = new ColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AnoParser.RULE_column);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(AnoParser.T__1);
			this.state = 257;
			this.datatype();
			this.state = 258;
			this.columnid();
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__2) {
				{
				this.state = 259;
				this.precision();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datatype(): DatatypeContext {
		let _localctx: DatatypeContext = new DatatypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AnoParser.RULE_datatype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(AnoParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public precision(): PrecisionContext {
		let _localctx: PrecisionContext = new PrecisionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AnoParser.RULE_precision);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.numsize();
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__3) {
				{
				this.state = 265;
				this.scale();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numsize(): NumsizeContext {
		let _localctx: NumsizeContext = new NumsizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AnoParser.RULE_numsize);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(AnoParser.T__2);
			this.state = 269;
			this.posint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scale(): ScaleContext {
		let _localctx: ScaleContext = new ScaleContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AnoParser.RULE_scale);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(AnoParser.T__3);
			this.state = 272;
			this.posint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pk(): PkContext {
		let _localctx: PkContext = new PkContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AnoParser.RULE_pk);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(AnoParser.T__4);
			this.state = 275;
			this.columns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unique(): UniqueContext {
		let _localctx: UniqueContext = new UniqueContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AnoParser.RULE_unique);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(AnoParser.T__5);
			this.state = 278;
			this.uniqueid();
			this.state = 279;
			this.columns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fk(): FkContext {
		let _localctx: FkContext = new FkContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AnoParser.RULE_fk);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(AnoParser.T__6);
			this.state = 282;
			this.fkParent();
			this.state = 283;
			this.fkChild();
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 284;
				this.setNull();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fkParent(): FkParentContext {
		let _localctx: FkParentContext = new FkParentContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AnoParser.RULE_fkParent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.fkCols();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fkChild(): FkChildContext {
		let _localctx: FkChildContext = new FkChildContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AnoParser.RULE_fkChild);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.fkCols();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fkCols(): FkColsContext {
		let _localctx: FkColsContext = new FkColsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AnoParser.RULE_fkCols);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.tableid();
			this.state = 292;
			this.columns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columns(): ColumnsContext {
		let _localctx: ColumnsContext = new ColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AnoParser.RULE_columns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.columnid();
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__7) {
				{
				{
				this.state = 295;
				this.match(AnoParser.T__7);
				this.state = 296;
				this.columnid();
				}
				}
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public randomType(): RandomTypeContext {
		let _localctx: RandomTypeContext = new RandomTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AnoParser.RULE_randomType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conversion(): ConversionContext {
		let _localctx: ConversionContext = new ConversionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AnoParser.RULE_conversion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(AnoParser.T__8);
			this.state = 305;
			this.namespace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transformation(): TransformationContext {
		let _localctx: TransformationContext = new TransformationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AnoParser.RULE_transformation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(AnoParser.T__9);
			this.state = 308;
			this.namespace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public distribution(): DistributionContext {
		let _localctx: DistributionContext = new DistributionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AnoParser.RULE_distribution);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.match(AnoParser.T__10);
			this.state = 311;
			this.namespace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public distributeprog(): DistributeprogContext {
		let _localctx: DistributeprogContext = new DistributeprogContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AnoParser.RULE_distributeprog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(AnoParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public workTask(): WorkTaskContext {
		let _localctx: WorkTaskContext = new WorkTaskContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AnoParser.RULE_workTask);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AnoParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 315;
				this.update();
				}
				break;
			case AnoParser.T__43:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 316;
				this.create();
				}
				break;
			case AnoParser.T__49:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 317;
				this.delete();
				}
				break;
			case AnoParser.T__56:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 318;
				this.erase();
				}
				break;
			case AnoParser.T__57:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 319;
				this.sar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlBefore(): SqlBeforeContext {
		let _localctx: SqlBeforeContext = new SqlBeforeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AnoParser.RULE_sqlBefore);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.match(AnoParser.T__11);
			this.state = 323;
			this.param();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlAfter(): SqlAfterContext {
		let _localctx: SqlAfterContext = new SqlAfterContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AnoParser.RULE_sqlAfter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(AnoParser.T__12);
			this.state = 326;
			this.param();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sql(): SqlContext {
		let _localctx: SqlContext = new SqlContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AnoParser.RULE_sql);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__11) {
				{
				this.state = 328;
				this.sqlBefore();
				}
			}

			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__12) {
				{
				this.state = 331;
				this.sqlAfter();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public taskGroup(): TaskGroupContext {
		let _localctx: TaskGroupContext = new TaskGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AnoParser.RULE_taskGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(AnoParser.T__13);
			this.state = 335;
			this.taskid();
			this.state = 336;
			this.sql();
			this.state = 337;
			this.bracketStart();
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__13 || _la === AnoParser.T__14 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (AnoParser.T__43 - 44)) | (1 << (AnoParser.T__49 - 44)) | (1 << (AnoParser.T__56 - 44)) | (1 << (AnoParser.T__57 - 44)))) !== 0)) {
				{
				this.state = 340;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case AnoParser.T__13:
					{
					this.state = 338;
					this.taskGroup();
					}
					break;
				case AnoParser.T__14:
				case AnoParser.T__43:
				case AnoParser.T__49:
				case AnoParser.T__56:
				case AnoParser.T__57:
					{
					this.state = 339;
					this.workTask();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 344;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 345;
			this.bracketEnd();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public update(): UpdateContext {
		let _localctx: UpdateContext = new UpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AnoParser.RULE_update);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(AnoParser.T__14);
			this.state = 348;
			this.tableid();
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.STRING || _la === AnoParser.NAME) {
				{
				this.state = 349;
				this.taskid();
				}
			}

			this.state = 352;
			this.sql();
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__15) {
				{
				this.state = 353;
				this.selectionKey();
				}
			}

			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__48) {
				{
				this.state = 356;
				this.where();
				}
			}

			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (AnoParser.T__19 - 20)) | (1 << (AnoParser.T__32 - 20)) | (1 << (AnoParser.T__37 - 20)))) !== 0)) {
				{
				{
				this.state = 359;
				this.anonymization();
				}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectionKey(): SelectionKeyContext {
		let _localctx: SelectionKeyContext = new SelectionKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AnoParser.RULE_selectionKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.match(AnoParser.T__15);
			this.state = 366;
			this.columnid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anonymization(): AnonymizationContext {
		let _localctx: AnonymizationContext = new AnonymizationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, AnoParser.RULE_anonymization);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AnoParser.T__19:
				{
				this.state = 368;
				this.mask();
				}
				break;
			case AnoParser.T__32:
				{
				this.state = 369;
				this.randomize();
				}
				break;
			case AnoParser.T__37:
				{
				this.state = 370;
				this.shuffle();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__38) {
				{
				this.state = 373;
				this.map();
				}
			}

			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__18) {
				{
				this.state = 376;
				this.tempKey();
				}
			}

			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__16) {
				{
				this.state = 379;
				this.propagate();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propagate(): PropagateContext {
		let _localctx: PropagateContext = new PropagateContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, AnoParser.RULE_propagate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(AnoParser.T__16);
			this.state = 383;
			this.propagateColumn();
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__7) {
				{
				{
				this.state = 384;
				this.match(AnoParser.T__7);
				this.state = 385;
				this.propagateColumn();
				}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propagateColumn(): PropagateColumnContext {
		let _localctx: PropagateColumnContext = new PropagateColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AnoParser.RULE_propagateColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this.tableid();
			this.state = 392;
			this.match(AnoParser.T__17);
			this.state = 393;
			this.columnid();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tempKey(): TempKeyContext {
		let _localctx: TempKeyContext = new TempKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AnoParser.RULE_tempKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 395;
			this.match(AnoParser.T__18);
			this.state = 396;
			this.textin();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mask(): MaskContext {
		let _localctx: MaskContext = new MaskContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AnoParser.RULE_mask);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(AnoParser.T__19);
			this.state = 399;
			this.columnid();
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.STRING || _la === AnoParser.NAME) {
				{
				this.state = 400;
				this.taskid();
				}
			}

			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__21) {
				{
				this.state = 403;
				this.format();
				}
			}

			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__22) {
				{
				this.state = 406;
				this.transform();
				}
			}

			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__20) {
				{
				this.state = 409;
				this.uniqueMask();
				}
			}

			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (AnoParser.T__1 - 2)) | (1 << (AnoParser.T__24 - 2)) | (1 << (AnoParser.T__25 - 2)) | (1 << (AnoParser.T__27 - 2)) | (1 << (AnoParser.T__28 - 2)) | (1 << (AnoParser.T__29 - 2)) | (1 << (AnoParser.T__30 - 2)) | (1 << (AnoParser.T__31 - 2)))) !== 0)) {
				{
				{
				this.state = 412;
				this.source();
				}
				}
				this.state = 417;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uniqueMask(): UniqueMaskContext {
		let _localctx: UniqueMaskContext = new UniqueMaskContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AnoParser.RULE_uniqueMask);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(AnoParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public format(): FormatContext {
		let _localctx: FormatContext = new FormatContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, AnoParser.RULE_format);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(AnoParser.T__21);
			this.state = 421;
			this.textin();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transform(): TransformContext {
		let _localctx: TransformContext = new TransformContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, AnoParser.RULE_transform);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			this.match(AnoParser.T__22);
			this.state = 424;
			this.transformprog();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public transformprog(): TransformprogContext {
		let _localctx: TransformprogContext = new TransformprogContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, AnoParser.RULE_transformprog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.match(AnoParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public convert(): ConvertContext {
		let _localctx: ConvertContext = new ConvertContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, AnoParser.RULE_convert);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(AnoParser.T__23);
			this.state = 429;
			this.convertprog();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public convertprog(): ConvertprogContext {
		let _localctx: ConvertprogContext = new ConvertprogContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, AnoParser.RULE_convertprog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(AnoParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, AnoParser.RULE_source);
		try {
			this.state = 437;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AnoParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 433;
				this.sourceColumn();
				}
				break;
			case AnoParser.T__25:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 434;
				this.sourceFile();
				}
				break;
			case AnoParser.T__27:
			case AnoParser.T__28:
			case AnoParser.T__29:
			case AnoParser.T__30:
			case AnoParser.T__31:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 435;
				this.sourceRandom();
				}
				break;
			case AnoParser.T__24:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 436;
				this.sourceSequence();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceColumn(): SourceColumnContext {
		let _localctx: SourceColumnContext = new SourceColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, AnoParser.RULE_sourceColumn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(AnoParser.T__1);
			this.state = 440;
			this.columnid();
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__23) {
				{
				this.state = 441;
				this.convert();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceSequence(): SourceSequenceContext {
		let _localctx: SourceSequenceContext = new SourceSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, AnoParser.RULE_sourceSequence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.match(AnoParser.T__24);
			this.state = 445;
			this.integer();
			this.state = 446;
			this.integer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, AnoParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.match(AnoParser.T__25);
			this.state = 449;
			this.filename();
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__26) {
				{
				this.state = 450;
				this.randomOrder();
				}
			}

			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__23) {
				{
				this.state = 453;
				this.convert();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public randomOrder(): RandomOrderContext {
		let _localctx: RandomOrderContext = new RandomOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, AnoParser.RULE_randomOrder);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.match(AnoParser.T__26);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sourceRandom(): SourceRandomContext {
		let _localctx: SourceRandomContext = new SourceRandomContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, AnoParser.RULE_sourceRandom);
		try {
			this.state = 463;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AnoParser.T__27:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 458;
				this.randomInteger();
				}
				break;
			case AnoParser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 459;
				this.randomDecimal();
				}
				break;
			case AnoParser.T__29:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 460;
				this.randomTime();
				}
				break;
			case AnoParser.T__30:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 461;
				this.randomDate();
				}
				break;
			case AnoParser.T__31:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 462;
				this.randomdatetime();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public randomInteger(): RandomIntegerContext {
		let _localctx: RandomIntegerContext = new RandomIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, AnoParser.RULE_randomInteger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.match(AnoParser.T__27);
			this.state = 466;
			this.integer();
			this.state = 467;
			this.integer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public randomDecimal(): RandomDecimalContext {
		let _localctx: RandomDecimalContext = new RandomDecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, AnoParser.RULE_randomDecimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this.match(AnoParser.T__28);
			this.state = 470;
			this.decimal();
			this.state = 471;
			this.decimal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public randomTime(): RandomTimeContext {
		let _localctx: RandomTimeContext = new RandomTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, AnoParser.RULE_randomTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(AnoParser.T__29);
			this.state = 474;
			this.time();
			this.state = 475;
			this.time();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public randomDate(): RandomDateContext {
		let _localctx: RandomDateContext = new RandomDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, AnoParser.RULE_randomDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(AnoParser.T__30);
			this.state = 478;
			this.date();
			this.state = 479;
			this.date();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public randomdatetime(): RandomdatetimeContext {
		let _localctx: RandomdatetimeContext = new RandomdatetimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, AnoParser.RULE_randomdatetime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(AnoParser.T__31);
			this.state = 482;
			this.datetime();
			this.state = 483;
			this.datetime();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public randomize(): RandomizeContext {
		let _localctx: RandomizeContext = new RandomizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, AnoParser.RULE_randomize);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.match(AnoParser.T__32);
			this.state = 486;
			this.columnid();
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.STRING || _la === AnoParser.NAME) {
				{
				this.state = 487;
				this.taskid();
				}
			}

			this.state = 490;
			this.randomizeType();
			this.state = 491;
			this.randomType();
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__21) {
				{
				this.state = 492;
				this.format();
				}
			}

			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__23) {
				{
				this.state = 495;
				this.convert();
				}
			}

			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__22) {
				{
				this.state = 498;
				this.transform();
				}
			}

			this.state = 502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__20) {
				{
				this.state = 501;
				this.uniqueMask();
				}
			}

			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__34) {
				{
				this.state = 504;
				this.offset();
				}
			}

			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__35) {
				{
				this.state = 507;
				this.flatNoise();
				}
			}

			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__36) {
				{
				this.state = 510;
				this.percentageNoise();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public randomizeType(): RandomizeTypeContext {
		let _localctx: RandomizeTypeContext = new RandomizeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, AnoParser.RULE_randomizeType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this.match(AnoParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public offset(): OffsetContext {
		let _localctx: OffsetContext = new OffsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, AnoParser.RULE_offset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.match(AnoParser.T__34);
			this.state = 516;
			this.decimal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flatNoise(): FlatNoiseContext {
		let _localctx: FlatNoiseContext = new FlatNoiseContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, AnoParser.RULE_flatNoise);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.match(AnoParser.T__35);
			this.state = 519;
			this.decimal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public percentageNoise(): PercentageNoiseContext {
		let _localctx: PercentageNoiseContext = new PercentageNoiseContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, AnoParser.RULE_percentageNoise);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.match(AnoParser.T__36);
			this.state = 522;
			this.decimal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public shuffle(): ShuffleContext {
		let _localctx: ShuffleContext = new ShuffleContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, AnoParser.RULE_shuffle);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(AnoParser.T__37);
			this.state = 525;
			this.columnid();
			this.state = 527;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.STRING || _la === AnoParser.NAME) {
				{
				this.state = 526;
				this.taskid();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public map(): MapContext {
		let _localctx: MapContext = new MapContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, AnoParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(AnoParser.T__38);
			this.state = 530;
			this.filename();
			this.state = 531;
			this.mapUsage();
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__39) {
				{
				this.state = 532;
				this.match(AnoParser.T__39);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapUsage(): MapUsageContext {
		let _localctx: MapUsageContext = new MapUsageContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, AnoParser.RULE_mapUsage);
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AnoParser.T__40:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 535;
				this.input();
				}
				break;
			case AnoParser.T__41:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 536;
				this.output();
				}
				break;
			case AnoParser.T__42:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 537;
				this.inputOutput();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public input(): InputContext {
		let _localctx: InputContext = new InputContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, AnoParser.RULE_input);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(AnoParser.T__40);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public output(): OutputContext {
		let _localctx: OutputContext = new OutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, AnoParser.RULE_output);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.match(AnoParser.T__41);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputOutput(): InputOutputContext {
		let _localctx: InputOutputContext = new InputOutputContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, AnoParser.RULE_inputOutput);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.match(AnoParser.T__42);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public create(): CreateContext {
		let _localctx: CreateContext = new CreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, AnoParser.RULE_create);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(AnoParser.T__43);
			this.state = 547;
			this.tableid();
			this.state = 549;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.STRING || _la === AnoParser.NAME) {
				{
				this.state = 548;
				this.taskid();
				}
			}

			this.state = 551;
			this.sql();
			this.state = 553;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__15) {
				{
				this.state = 552;
				this.selectionKey();
				}
			}

			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__47) {
				{
				this.state = 555;
				this.minRows();
				}
			}

			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (AnoParser.T__19 - 20)) | (1 << (AnoParser.T__32 - 20)) | (1 << (AnoParser.T__37 - 20)))) !== 0)) {
				{
				{
				this.state = 558;
				this.anonymization();
				}
				}
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__44) {
				{
				{
				this.state = 564;
				this.distribute();
				}
				}
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public distribute(): DistributeContext {
		let _localctx: DistributeContext = new DistributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, AnoParser.RULE_distribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.match(AnoParser.T__44);
			this.state = 571;
			this.distributeprog();
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__17 || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (AnoParser.STRING - 63)) | (1 << (AnoParser.NUMERIC - 63)) | (1 << (AnoParser.NAME - 63)) | (1 << (AnoParser.ANY_OTHER - 63)))) !== 0)) {
				{
				this.state = 572;
				this.textin();
				}
			}

			this.state = 578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__0) {
				{
				{
				this.state = 575;
				this.createTable();
				}
				}
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createTable(): CreateTableContext {
		let _localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, AnoParser.RULE_createTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 581;
			this.match(AnoParser.T__0);
			this.state = 582;
			this.tableid();
			this.state = 584;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__17 || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (AnoParser.STRING - 63)) | (1 << (AnoParser.NUMERIC - 63)) | (1 << (AnoParser.NAME - 63)) | (1 << (AnoParser.ANY_OTHER - 63)))) !== 0)) {
				{
				this.state = 583;
				this.textin();
				}
			}

			this.state = 586;
			this.createChildColumns();
			this.state = 587;
			this.createParentColumns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createChildColumns(): CreateChildColumnsContext {
		let _localctx: CreateChildColumnsContext = new CreateChildColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, AnoParser.RULE_createChildColumns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this.match(AnoParser.T__45);
			this.state = 590;
			this.columns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createParentColumns(): CreateParentColumnsContext {
		let _localctx: CreateParentColumnsContext = new CreateParentColumnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, AnoParser.RULE_createParentColumns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(AnoParser.T__46);
			this.state = 593;
			this.columns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public minRows(): MinRowsContext {
		let _localctx: MinRowsContext = new MinRowsContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, AnoParser.RULE_minRows);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.match(AnoParser.T__47);
			this.state = 596;
			this.posint();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public where(): WhereContext {
		let _localctx: WhereContext = new WhereContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, AnoParser.RULE_where);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.match(AnoParser.T__48);
			this.state = 599;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delete(): DeleteContext {
		let _localctx: DeleteContext = new DeleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, AnoParser.RULE_delete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.match(AnoParser.T__49);
			this.state = 602;
			this.tableid();
			this.state = 604;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.STRING || _la === AnoParser.NAME) {
				{
				this.state = 603;
				this.taskid();
				}
			}

			this.state = 606;
			this.sql();
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__15) {
				{
				this.state = 607;
				this.selectionKey();
				}
			}

			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__48) {
				{
				this.state = 610;
				this.where();
				}
			}

			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (AnoParser.T__50 - 51)) | (1 << (AnoParser.T__52 - 51)) | (1 << (AnoParser.T__53 - 51)))) !== 0)) {
				{
				this.state = 613;
				this.method();
				}
			}

			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__58) {
				{
				this.state = 616;
				this.bracketStart();
				this.state = 618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 617;
					this.deleteTable();
					}
					}
					this.state = 620;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AnoParser.T__54);
				this.state = 622;
				this.bracketEnd();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public method(): MethodContext {
		let _localctx: MethodContext = new MethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, AnoParser.RULE_method);
		try {
			this.state = 630;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AnoParser.T__50:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 626;
				this.match(AnoParser.T__50);
				this.state = 627;
				this.cascading();
				}
				break;
			case AnoParser.T__52:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 628;
				this.notIn();
				}
				break;
			case AnoParser.T__53:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 629;
				this.notExists();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cascading(): CascadingContext {
		let _localctx: CascadingContext = new CascadingContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, AnoParser.RULE_cascading);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.match(AnoParser.T__51);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notIn(): NotInContext {
		let _localctx: NotInContext = new NotInContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, AnoParser.RULE_notIn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(AnoParser.T__52);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public notExists(): NotExistsContext {
		let _localctx: NotExistsContext = new NotExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, AnoParser.RULE_notExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.match(AnoParser.T__53);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deleteTable(): DeleteTableContext {
		let _localctx: DeleteTableContext = new DeleteTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, AnoParser.RULE_deleteTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.match(AnoParser.T__54);
			this.state = 639;
			this.tableid();
			this.state = 640;
			this.parentCols();
			this.state = 641;
			this.childCols();
			this.state = 651;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AnoParser.T__58:
				{
				{
				this.state = 642;
				this.bracketStart();
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 643;
					this.deleteTable();
					}
					}
					this.state = 646;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AnoParser.T__54);
				this.state = 648;
				this.bracketEnd();
				}
				}
				break;
			case AnoParser.T__55:
				{
				this.state = 650;
				this.setNull();
				}
				break;
			case AnoParser.T__54:
			case AnoParser.T__59:
				break;
			default:
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public childCols(): ChildColsContext {
		let _localctx: ChildColsContext = new ChildColsContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, AnoParser.RULE_childCols);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.match(AnoParser.T__45);
			this.state = 654;
			this.columns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parentCols(): ParentColsContext {
		let _localctx: ParentColsContext = new ParentColsContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, AnoParser.RULE_parentCols);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.match(AnoParser.T__46);
			this.state = 657;
			this.columns();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setNull(): SetNullContext {
		let _localctx: SetNullContext = new SetNullContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, AnoParser.RULE_setNull);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 659;
			this.match(AnoParser.T__55);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public erase(): EraseContext {
		let _localctx: EraseContext = new EraseContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, AnoParser.RULE_erase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.match(AnoParser.T__56);
			this.state = 662;
			this.tableid();
			this.state = 664;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.STRING || _la === AnoParser.NAME) {
				{
				this.state = 663;
				this.taskid();
				}
			}

			this.state = 666;
			this.sql();
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__15) {
				{
				this.state = 667;
				this.selectionKey();
				}
			}

			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__48) {
				{
				this.state = 670;
				this.where();
				}
			}

			this.state = 676;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__19) {
				{
				{
				this.state = 673;
				this.maskColumn();
				}
				}
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__58) {
				{
				this.state = 679;
				this.bracketStart();
				this.state = 681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 680;
					this.eraseTable();
					}
					}
					this.state = 683;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AnoParser.T__54);
				this.state = 685;
				this.bracketEnd();
				}
			}

			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__55) {
				{
				this.state = 689;
				this.setNull();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eraseTable(): EraseTableContext {
		let _localctx: EraseTableContext = new EraseTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, AnoParser.RULE_eraseTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.match(AnoParser.T__54);
			this.state = 693;
			this.tableid();
			this.state = 694;
			this.parentCols();
			this.state = 695;
			this.childCols();
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__19) {
				{
				{
				this.state = 696;
				this.maskColumn();
				}
				}
				this.state = 701;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__58) {
				{
				this.state = 702;
				this.bracketStart();
				this.state = 704;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 703;
					this.eraseTable();
					}
					}
					this.state = 706;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AnoParser.T__54);
				this.state = 708;
				this.bracketEnd();
				}
			}

			this.state = 713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__55) {
				{
				this.state = 712;
				this.setNull();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sar(): SarContext {
		let _localctx: SarContext = new SarContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, AnoParser.RULE_sar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 715;
			this.match(AnoParser.T__57);
			this.state = 716;
			this.tableid();
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.STRING || _la === AnoParser.NAME) {
				{
				this.state = 717;
				this.taskid();
				}
			}

			this.state = 720;
			this.sql();
			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__15) {
				{
				this.state = 721;
				this.selectionKey();
				}
			}

			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__48) {
				{
				this.state = 724;
				this.where();
				}
			}

			this.state = 730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__19) {
				{
				{
				this.state = 727;
				this.maskColumn();
				}
				}
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__58) {
				{
				this.state = 733;
				this.bracketStart();
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 734;
					this.sarTable();
					}
					}
					this.state = 737;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AnoParser.T__54);
				this.state = 739;
				this.bracketEnd();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sarTable(): SarTableContext {
		let _localctx: SarTableContext = new SarTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, AnoParser.RULE_sarTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this.match(AnoParser.T__54);
			this.state = 744;
			this.tableid();
			this.state = 745;
			this.parentCols();
			this.state = 746;
			this.childCols();
			this.state = 750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__19) {
				{
				{
				this.state = 747;
				this.maskColumn();
				}
				}
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 761;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__58) {
				{
				this.state = 753;
				this.bracketStart();
				this.state = 755;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 754;
					this.sarTable();
					}
					}
					this.state = 757;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AnoParser.T__54);
				this.state = 759;
				this.bracketEnd();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public maskColumn(): MaskColumnContext {
		let _localctx: MaskColumnContext = new MaskColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, AnoParser.RULE_maskColumn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.match(AnoParser.T__19);
			this.state = 764;
			this.columnid();
			this.state = 766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__21) {
				{
				this.state = 765;
				this.format();
				}
			}

			this.state = 769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.T__22) {
				{
				this.state = 768;
				this.transform();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bracketStart(): BracketStartContext {
		let _localctx: BracketStartContext = new BracketStartContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, AnoParser.RULE_bracketStart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this.match(AnoParser.T__58);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bracketEnd(): BracketEndContext {
		let _localctx: BracketEndContext = new BracketEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, AnoParser.RULE_bracketEnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 773;
			this.match(AnoParser.T__59);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnid(): ColumnidContext {
		let _localctx: ColumnidContext = new ColumnidContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, AnoParser.RULE_columnid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableid(): TableidContext {
		let _localctx: TableidContext = new TableidContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, AnoParser.RULE_tableid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 777;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uniqueid(): UniqueidContext {
		let _localctx: UniqueidContext = new UniqueidContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, AnoParser.RULE_uniqueid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 779;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datetime(): DatetimeContext {
		let _localctx: DatetimeContext = new DatetimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, AnoParser.RULE_datetime);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.date();
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AnoParser.TIMEFMT) {
				{
				this.state = 782;
				this.time();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, AnoParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.match(AnoParser.TIMEFMT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, AnoParser.RULE_date);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			this.match(AnoParser.DATEFMT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filename(): FilenameContext {
		let _localctx: FilenameContext = new FilenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, AnoParser.RULE_filename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.param();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public textin(): TextinContext {
		let _localctx: TextinContext = new TextinContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, AnoParser.RULE_textin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this.param();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, AnoParser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(AnoParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public posint(): PosintContext {
		let _localctx: PosintContext = new PosintContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, AnoParser.RULE_posint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this.match(AnoParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decimal(): DecimalContext {
		let _localctx: DecimalContext = new DecimalContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, AnoParser.RULE_decimal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this.match(AnoParser.NUMERIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public taskid(): TaskidContext {
		let _localctx: TaskidContext = new TaskidContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, AnoParser.RULE_taskid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 799;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespace(): NamespaceContext {
		let _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, AnoParser.RULE_namespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this.match(AnoParser.NAME);
			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AnoParser.T__17) {
				{
				{
				this.state = 802;
				this.match(AnoParser.T__17);
				this.state = 803;
				this.match(AnoParser.NAME);
				}
				}
				this.state = 808;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, AnoParser.RULE_param);
		let _la: number;
		try {
			this.state = 815;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AnoParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 809;
				this.match(AnoParser.STRING);
				}
				break;
			case AnoParser.T__17:
			case AnoParser.NUMERIC:
			case AnoParser.NAME:
			case AnoParser.ANY_OTHER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 811;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 810;
					_la = this._input.LA(1);
					if (!(_la === AnoParser.T__17 || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (AnoParser.NUMERIC - 64)) | (1 << (AnoParser.NAME - 64)) | (1 << (AnoParser.ANY_OTHER - 64)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 813;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === AnoParser.T__17 || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (AnoParser.NUMERIC - 64)) | (1 << (AnoParser.NAME - 64)) | (1 << (AnoParser.ANY_OTHER - 64)))) !== 0));
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, AnoParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			_la = this._input.LA(1);
			if (!(_la === AnoParser.STRING || _la === AnoParser.NAME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03G\u0336\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x03\x02\x07\x02\xC6\n\x02\f\x02\x0E\x02\xC9\v\x02\x03" +
		"\x02\x07\x02\xCC\n\x02\f\x02\x0E\x02\xCF\v\x02\x03\x02\x07\x02\xD2\n\x02" +
		"\f\x02\x0E\x02\xD5\v\x02\x03\x02\x07\x02\xD8\n\x02\f\x02\x0E\x02\xDB\v" +
		"\x02\x03\x02\x07\x02\xDE\n\x02\f\x02\x0E\x02\xE1\v\x02\x03\x02\x07\x02" +
		"\xE4\n\x02\f\x02\x0E\x02\xE7\v\x02\x03\x02\x03\x02\x07\x02\xEB\n\x02\f" +
		"\x02\x0E\x02\xEE\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03" +
		"\xF5\n\x03\f\x03\x0E\x03\xF8\v\x03\x03\x03\x05\x03\xFB\n\x03\x03\x03\x07" +
		"\x03\xFE\n\x03\f\x03\x0E\x03\u0101\v\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x04\u0107\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\u010D\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\u0120\n\v\x03\f\x03\f\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u012C" +
		"\n\x0F\f\x0F\x0E\x0F\u012F\v\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0143\n\x15\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x18\x05\x18\u014C\n\x18\x03\x18\x05\x18" +
		"\u014F\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u0157" +
		"\n\x19\f\x19\x0E\x19\u015A\v\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x05\x1A\u0161\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0165\n\x1A\x03\x1A\x05\x1A" +
		"\u0168\n\x1A\x03\x1A\x07\x1A\u016B\n\x1A\f\x1A\x0E\x1A\u016E\v\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0176\n\x1C\x03\x1C" +
		"\x05\x1C\u0179\n\x1C\x03\x1C\x05\x1C\u017C\n\x1C\x03\x1C\x05\x1C\u017F" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0185\n\x1D\f\x1D\x0E\x1D" +
		"\u0188\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		" \x03 \x03 \x05 \u0194\n \x03 \x05 \u0197\n \x03 \x05 \u019A\n \x03 \x05" +
		" \u019D\n \x03 \x07 \u01A0\n \f \x0E \u01A3\v \x03!\x03!\x03\"\x03\"\x03" +
		"\"\x03#\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'" +
		"\x03\'\x05\'\u01B8\n\'\x03(\x03(\x03(\x05(\u01BD\n(\x03)\x03)\x03)\x03" +
		")\x03*\x03*\x03*\x05*\u01C6\n*\x03*\x05*\u01C9\n*\x03+\x03+\x03,\x03," +
		"\x03,\x03,\x03,\x05,\u01D2\n,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03." +
		"\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x031\x031\x031\x031\x032\x03" +
		"2\x032\x052\u01EB\n2\x032\x032\x032\x052\u01F0\n2\x032\x052\u01F3\n2\x03" +
		"2\x052\u01F6\n2\x032\x052\u01F9\n2\x032\x052\u01FC\n2\x032\x052\u01FF" +
		"\n2\x032\x052\u0202\n2\x033\x033\x034\x034\x034\x035\x035\x035\x036\x03" +
		"6\x036\x037\x037\x037\x057\u0212\n7\x038\x038\x038\x038\x058\u0218\n8" +
		"\x039\x039\x039\x059\u021D\n9\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=" +
		"\x03=\x05=\u0228\n=\x03=\x03=\x05=\u022C\n=\x03=\x05=\u022F\n=\x03=\x07" +
		"=\u0232\n=\f=\x0E=\u0235\v=\x03=\x07=\u0238\n=\f=\x0E=\u023B\v=\x03>\x03" +
		">\x03>\x05>\u0240\n>\x03>\x07>\u0243\n>\f>\x0E>\u0246\v>\x03?\x03?\x03" +
		"?\x05?\u024B\n?\x03?\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03A\x03B\x03" +
		"B\x03B\x03C\x03C\x03C\x03D\x03D\x03D\x05D\u025F\nD\x03D\x03D\x05D\u0263" +
		"\nD\x03D\x05D\u0266\nD\x03D\x05D\u0269\nD\x03D\x03D\x06D\u026D\nD\rD\x0E" +
		"D\u026E\x03D\x03D\x05D\u0273\nD\x03E\x03E\x03E\x03E\x05E\u0279\nE\x03" +
		"F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x06I\u0287\n" +
		"I\rI\x0EI\u0288\x03I\x03I\x03I\x05I\u028E\nI\x03J\x03J\x03J\x03K\x03K" +
		"\x03K\x03L\x03L\x03M\x03M\x03M\x05M\u029B\nM\x03M\x03M\x05M\u029F\nM\x03" +
		"M\x05M\u02A2\nM\x03M\x07M\u02A5\nM\fM\x0EM\u02A8\vM\x03M\x03M\x06M\u02AC" +
		"\nM\rM\x0EM\u02AD\x03M\x03M\x05M\u02B2\nM\x03M\x05M\u02B5\nM\x03N\x03" +
		"N\x03N\x03N\x03N\x07N\u02BC\nN\fN\x0EN\u02BF\vN\x03N\x03N\x06N\u02C3\n" +
		"N\rN\x0EN\u02C4\x03N\x03N\x05N\u02C9\nN\x03N\x05N\u02CC\nN\x03O\x03O\x03" +
		"O\x05O\u02D1\nO\x03O\x03O\x05O\u02D5\nO\x03O\x05O\u02D8\nO\x03O\x07O\u02DB" +
		"\nO\fO\x0EO\u02DE\vO\x03O\x03O\x06O\u02E2\nO\rO\x0EO\u02E3\x03O\x03O\x05" +
		"O\u02E8\nO\x03P\x03P\x03P\x03P\x03P\x07P\u02EF\nP\fP\x0EP\u02F2\vP\x03" +
		"P\x03P\x06P\u02F6\nP\rP\x0EP\u02F7\x03P\x03P\x05P\u02FC\nP\x03Q\x03Q\x03" +
		"Q\x05Q\u0301\nQ\x03Q\x05Q\u0304\nQ\x03R\x03R\x03S\x03S\x03T\x03T\x03U" +
		"\x03U\x03V\x03V\x03W\x03W\x05W\u0312\nW\x03X\x03X\x03Y\x03Y\x03Z\x03Z" +
		"\x03[\x03[\x03\\\x03\\\x03]\x03]\x03^\x03^\x03_\x03_\x03`\x03`\x03`\x07" +
		"`\u0327\n`\f`\x0E`\u032A\v`\x03a\x03a\x06a\u032E\na\ra\x0Ea\u032F\x05" +
		"a\u0332\na\x03b\x03b\x03b\x02\x02\x02c\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\x02\x04\x05\x02\x14\x14BCGG\x04\x02A" +
		"ACC\x02\u033C\x02\xC7\x03\x02\x02\x02\x04\xF1\x03\x02\x02\x02\x06\u0102" +
		"\x03\x02\x02\x02\b\u0108\x03\x02\x02\x02\n\u010A\x03\x02\x02\x02\f\u010E" +
		"\x03\x02\x02\x02\x0E\u0111\x03\x02\x02\x02\x10\u0114\x03\x02\x02\x02\x12" +
		"\u0117\x03\x02\x02\x02\x14\u011B\x03\x02\x02\x02\x16\u0121\x03\x02\x02" +
		"\x02\x18\u0123\x03\x02\x02\x02\x1A\u0125\x03\x02\x02\x02\x1C\u0128\x03" +
		"\x02\x02\x02\x1E\u0130\x03\x02\x02\x02 \u0132\x03\x02\x02\x02\"\u0135" +
		"\x03\x02\x02\x02$\u0138\x03\x02\x02\x02&\u013B\x03\x02\x02\x02(\u0142" +
		"\x03\x02\x02\x02*\u0144\x03\x02\x02\x02,\u0147\x03\x02\x02\x02.\u014B" +
		"\x03\x02\x02\x020\u0150\x03\x02\x02\x022\u015D\x03\x02\x02\x024\u016F" +
		"\x03\x02\x02\x026\u0175\x03\x02\x02\x028\u0180\x03\x02\x02\x02:\u0189" +
		"\x03\x02\x02\x02<\u018D\x03\x02\x02\x02>\u0190\x03\x02\x02\x02@\u01A4" +
		"\x03\x02\x02\x02B\u01A6\x03\x02\x02\x02D\u01A9\x03\x02\x02\x02F\u01AC" +
		"\x03\x02\x02\x02H\u01AE\x03\x02\x02\x02J\u01B1\x03\x02\x02\x02L\u01B7" +
		"\x03\x02\x02\x02N\u01B9\x03\x02\x02\x02P\u01BE\x03\x02\x02\x02R\u01C2" +
		"\x03\x02\x02\x02T\u01CA\x03\x02\x02\x02V\u01D1\x03\x02\x02\x02X\u01D3" +
		"\x03\x02\x02\x02Z\u01D7\x03\x02\x02\x02\\\u01DB\x03\x02\x02\x02^\u01DF" +
		"\x03\x02\x02\x02`\u01E3\x03\x02\x02\x02b\u01E7\x03\x02\x02\x02d\u0203" +
		"\x03\x02\x02\x02f\u0205\x03\x02\x02\x02h\u0208\x03\x02\x02\x02j\u020B" +
		"\x03\x02\x02\x02l\u020E\x03\x02\x02\x02n\u0213\x03\x02\x02\x02p\u021C" +
		"\x03\x02\x02\x02r\u021E\x03\x02\x02\x02t\u0220\x03\x02\x02\x02v\u0222" +
		"\x03\x02\x02\x02x\u0224\x03\x02\x02\x02z\u023C\x03\x02\x02\x02|\u0247" +
		"\x03\x02\x02\x02~\u024F\x03\x02\x02\x02\x80\u0252\x03\x02\x02\x02\x82" +
		"\u0255\x03\x02\x02\x02\x84\u0258\x03\x02\x02\x02\x86\u025B\x03\x02\x02" +
		"\x02\x88\u0278\x03\x02\x02\x02\x8A\u027A\x03\x02\x02\x02\x8C\u027C\x03" +
		"\x02\x02\x02\x8E\u027E\x03\x02\x02\x02\x90\u0280\x03\x02\x02\x02\x92\u028F" +
		"\x03\x02\x02\x02\x94\u0292\x03\x02\x02\x02\x96\u0295\x03\x02\x02\x02\x98" +
		"\u0297\x03\x02\x02\x02\x9A\u02B6\x03\x02\x02\x02\x9C\u02CD\x03\x02\x02" +
		"\x02\x9E\u02E9\x03\x02\x02\x02\xA0\u02FD\x03\x02\x02\x02\xA2\u0305\x03" +
		"\x02\x02\x02\xA4\u0307\x03\x02\x02\x02\xA6\u0309\x03\x02\x02\x02\xA8\u030B" +
		"\x03\x02\x02\x02\xAA\u030D\x03\x02\x02\x02\xAC\u030F\x03\x02\x02\x02\xAE" +
		"\u0313\x03\x02\x02\x02\xB0\u0315\x03\x02\x02\x02\xB2\u0317\x03\x02\x02" +
		"\x02\xB4\u0319\x03\x02\x02\x02\xB6\u031B\x03\x02\x02\x02\xB8\u031D\x03" +
		"\x02\x02\x02\xBA\u031F\x03\x02\x02\x02\xBC\u0321\x03\x02\x02\x02\xBE\u0323" +
		"\x03\x02\x02\x02\xC0\u0331\x03\x02\x02\x02\xC2\u0333\x03\x02\x02\x02\xC4" +
		"\xC6\x05\x04\x03\x02\xC5\xC4\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7" +
		"\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCD\x03\x02\x02\x02\xC9" +
		"\xC7\x03\x02\x02\x02\xCA\xCC\x05\x14\v\x02\xCB\xCA\x03\x02\x02\x02\xCC" +
		"\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE" +
		"\xD3\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD2\x05 \x11\x02\xD1" +
		"\xD0\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3" +
		"\xD4\x03\x02\x02\x02\xD4\xD9\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6" +
		"\xD8\x05\"\x12\x02\xD7\xD6\x03\x02\x02\x02\xD8\xDB\x03\x02\x02\x02\xD9" +
		"\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDF\x03\x02\x02\x02\xDB" +
		"\xD9\x03\x02\x02\x02\xDC\xDE\x05$\x13\x02\xDD\xDC\x03\x02\x02\x02\xDE" +
		"\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0" +
		"\xE5\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE4\x05\x1E\x10\x02\xE3" +
		"\xE2\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5" +
		"\xE6\x03\x02\x02\x02\xE6\xE8\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8" +
		"\xEC\x05.\x18\x02\xE9\xEB\x050\x19\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEE" +
		"\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEF" +
		"\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x07\x02\x02\x03\xF0\x03" +
		"\x03\x02\x02\x02\xF1\xF2\x07\x03\x02\x02\xF2\xF6\x05\xA8U\x02\xF3\xF5" +
		"\x05\x06\x04\x02\xF4\xF3\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4" +
		"\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6" +
		"\x03\x02\x02\x02\xF9\xFB\x05\x10\t\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB" +
		"\x03\x02\x02\x02\xFB\xFF\x03\x02\x02\x02\xFC\xFE\x05\x12\n\x02\xFD\xFC" +
		"\x03\x02\x02\x02\xFE\u0101\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF" +
		"\u0100\x03\x02\x02\x02\u0100\x05\x03\x02\x02\x02\u0101\xFF\x03\x02\x02" +
		"\x02\u0102\u0103\x07\x04\x02\x02\u0103\u0104\x05\b\x05\x02\u0104\u0106" +
		"\x05\xA6T\x02\u0105\u0107\x05\n\x06\x02\u0106\u0105\x03\x02\x02\x02\u0106" +
		"\u0107\x03\x02\x02\x02\u0107\x07\x03\x02\x02\x02\u0108\u0109\x07C\x02" +
		"\x02\u0109\t\x03\x02\x02\x02\u010A\u010C\x05\f\x07\x02\u010B\u010D\x05" +
		"\x0E\b\x02\u010C\u010B\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D" +
		"\v\x03\x02\x02\x02\u010E\u010F\x07\x05\x02\x02\u010F\u0110\x05\xB8]\x02" +
		"\u0110\r\x03\x02\x02\x02\u0111\u0112\x07\x06\x02\x02\u0112\u0113\x05\xB8" +
		"]\x02\u0113\x0F\x03\x02\x02\x02\u0114\u0115\x07\x07\x02\x02\u0115\u0116" +
		"\x05\x1C\x0F\x02\u0116\x11\x03\x02\x02\x02\u0117\u0118\x07\b\x02\x02\u0118" +
		"\u0119\x05\xAAV\x02\u0119\u011A\x05\x1C\x0F\x02\u011A\x13\x03\x02\x02" +
		"\x02\u011B\u011C\x07\t\x02\x02\u011C\u011D\x05\x16\f\x02\u011D\u011F\x05" +
		"\x18\r\x02\u011E\u0120\x05\x96L\x02\u011F\u011E\x03\x02\x02\x02\u011F" +
		"\u0120\x03\x02\x02\x02\u0120\x15\x03\x02\x02\x02\u0121\u0122\x05\x1A\x0E" +
		"\x02\u0122\x17\x03\x02\x02\x02\u0123\u0124\x05\x1A\x0E\x02\u0124\x19\x03" +
		"\x02\x02\x02\u0125\u0126\x05\xA8U\x02\u0126\u0127\x05\x1C\x0F\x02\u0127" +
		"\x1B\x03\x02\x02\x02\u0128\u012D\x05\xA6T\x02\u0129\u012A\x07\n\x02\x02" +
		"\u012A\u012C\x05\xA6T\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012F\x03" +
		"\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E" +
		"\x1D\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0131\x05\xC2b" +
		"\x02\u0131\x1F\x03\x02\x02\x02\u0132\u0133\x07\v\x02\x02\u0133\u0134\x05" +
		"\xBE`\x02\u0134!\x03\x02\x02\x02\u0135\u0136\x07\f\x02\x02\u0136\u0137" +
		"\x05\xBE`\x02\u0137#\x03\x02\x02\x02\u0138\u0139\x07\r\x02\x02\u0139\u013A" +
		"\x05\xBE`\x02\u013A%\x03\x02\x02\x02\u013B\u013C\x07C\x02\x02\u013C\'" +
		"\x03\x02\x02\x02\u013D\u0143\x052\x1A\x02\u013E\u0143\x05x=\x02\u013F" +
		"\u0143\x05\x86D\x02\u0140\u0143\x05\x98M\x02\u0141\u0143\x05\x9CO\x02" +
		"\u0142\u013D\x03\x02\x02\x02\u0142\u013E\x03\x02\x02\x02\u0142\u013F\x03" +
		"\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02\x02\x02\u0143" +
		")\x03\x02\x02\x02\u0144\u0145\x07\x0E\x02\x02\u0145\u0146\x05\xC0a\x02" +
		"\u0146+\x03\x02\x02\x02\u0147\u0148\x07\x0F\x02\x02\u0148\u0149\x05\xC0" +
		"a\x02\u0149-\x03\x02\x02\x02\u014A\u014C\x05*\x16\x02\u014B\u014A\x03" +
		"\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D" +
		"\u014F\x05,\x17\x02\u014E\u014D\x03\x02\x02\x02\u014E\u014F\x03\x02\x02" +
		"\x02\u014F/\x03\x02\x02\x02\u0150\u0151\x07\x10\x02\x02\u0151\u0152\x05" +
		"\xBC_\x02\u0152\u0153\x05.\x18\x02\u0153\u0158\x05\xA2R\x02\u0154\u0157" +
		"\x050\x19\x02\u0155\u0157\x05(\x15\x02\u0156\u0154\x03\x02\x02\x02\u0156" +
		"\u0155\x03\x02\x02\x02\u0157\u015A\x03\x02\x02\x02\u0158\u0156\x03\x02" +
		"\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015B\x03\x02\x02\x02\u015A" +
		"\u0158\x03\x02\x02\x02\u015B\u015C\x05\xA4S\x02\u015C1\x03\x02\x02\x02" +
		"\u015D\u015E\x07\x11\x02\x02\u015E\u0160\x05\xA8U\x02\u015F\u0161\x05" +
		"\xBC_\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161" +
		"\u0162\x03\x02\x02\x02\u0162\u0164\x05.\x18\x02\u0163\u0165\x054\x1B\x02" +
		"\u0164\u0163\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0167\x03" +
		"\x02\x02\x02\u0166\u0168\x05\x84C\x02\u0167\u0166\x03\x02\x02\x02\u0167" +
		"\u0168\x03\x02\x02\x02\u0168\u016C\x03\x02\x02\x02\u0169\u016B\x056\x1C" +
		"\x02\u016A\u0169\x03\x02\x02\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016A" +
		"\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D3\x03\x02\x02\x02\u016E" +
		"\u016C\x03\x02\x02\x02\u016F\u0170\x07\x12\x02\x02\u0170\u0171\x05\xA6" +
		"T\x02\u01715\x03\x02\x02\x02\u0172\u0176\x05> \x02\u0173\u0176\x05b2\x02" +
		"\u0174\u0176\x05l7\x02\u0175\u0172\x03\x02\x02\x02\u0175\u0173\x03\x02" +
		"\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176\u0178\x03\x02\x02\x02\u0177" +
		"\u0179\x05n8\x02\u0178\u0177\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02" +
		"\u0179\u017B\x03\x02\x02\x02\u017A\u017C\x05<\x1F\x02\u017B\u017A\x03" +
		"\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017E\x03\x02\x02\x02\u017D" +
		"\u017F\x058\x1D\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02" +
		"\x02\u017F7\x03\x02\x02\x02\u0180\u0181\x07\x13\x02\x02\u0181\u0186\x05" +
		":\x1E\x02\u0182\u0183\x07\n\x02\x02\u0183\u0185\x05:\x1E\x02\u0184\u0182" +
		"\x03\x02\x02\x02\u0185\u0188\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02" +
		"\u0186\u0187\x03\x02\x02\x02\u01879\x03\x02\x02\x02\u0188\u0186\x03\x02" +
		"\x02\x02\u0189\u018A\x05\xA8U\x02\u018A\u018B\x07\x14\x02\x02\u018B\u018C" +
		"\x05\xA6T\x02\u018C;\x03\x02\x02\x02\u018D\u018E\x07\x15\x02\x02\u018E" +
		"\u018F\x05\xB4[\x02\u018F=\x03\x02\x02\x02\u0190\u0191\x07\x16\x02\x02" +
		"\u0191\u0193\x05\xA6T\x02\u0192\u0194\x05\xBC_\x02\u0193\u0192\x03\x02" +
		"\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0196\x03\x02\x02\x02\u0195" +
		"\u0197\x05B\"\x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02" +
		"\x02\u0197\u0199\x03\x02\x02\x02\u0198\u019A\x05D#\x02\u0199\u0198\x03" +
		"\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x03\x02\x02\x02\u019B" +
		"\u019D\x05@!\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02" +
		"\u019D\u01A1\x03\x02\x02\x02\u019E\u01A0\x05L\'\x02\u019F\u019E\x03\x02" +
		"\x02\x02\u01A0\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1" +
		"\u01A2\x03\x02\x02\x02\u01A2?\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02" +
		"\x02\u01A4\u01A5\x07\x17\x02\x02\u01A5A\x03\x02\x02\x02\u01A6\u01A7\x07" +
		"\x18\x02\x02\u01A7\u01A8\x05\xB4[\x02\u01A8C\x03\x02\x02\x02\u01A9\u01AA" +
		"\x07\x19\x02\x02\u01AA\u01AB\x05F$\x02\u01ABE\x03\x02\x02\x02\u01AC\u01AD" +
		"\x07C\x02\x02\u01ADG\x03\x02\x02\x02\u01AE\u01AF\x07\x1A\x02\x02\u01AF" +
		"\u01B0\x05J&\x02\u01B0I\x03\x02\x02\x02\u01B1\u01B2\x07C\x02\x02\u01B2" +
		"K\x03\x02\x02\x02\u01B3\u01B8\x05N(\x02\u01B4\u01B8\x05R*\x02\u01B5\u01B8" +
		"\x05V,\x02\u01B6\u01B8\x05P)\x02\u01B7\u01B3\x03\x02\x02\x02\u01B7\u01B4" +
		"\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7\u01B6\x03\x02\x02\x02" +
		"\u01B8M\x03\x02\x02\x02\u01B9\u01BA\x07\x04\x02\x02\u01BA\u01BC\x05\xA6" +
		"T\x02\u01BB\u01BD\x05H%\x02\u01BC\u01BB\x03\x02\x02\x02\u01BC\u01BD\x03" +
		"\x02\x02\x02\u01BDO\x03\x02\x02\x02\u01BE\u01BF\x07\x1B\x02\x02\u01BF" +
		"\u01C0\x05\xB6\\\x02\u01C0\u01C1\x05\xB6\\\x02\u01C1Q\x03\x02\x02\x02" +
		"\u01C2\u01C3\x07\x1C\x02\x02\u01C3\u01C5\x05\xB2Z\x02\u01C4\u01C6\x05" +
		"T+\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C8" +
		"\x03\x02\x02\x02\u01C7\u01C9\x05H%\x02\u01C8\u01C7\x03\x02\x02\x02\u01C8" +
		"\u01C9\x03\x02\x02\x02\u01C9S\x03\x02\x02\x02\u01CA\u01CB\x07\x1D\x02" +
		"\x02\u01CBU\x03\x02\x02\x02\u01CC\u01D2\x05X-\x02\u01CD\u01D2\x05Z.\x02" +
		"\u01CE\u01D2\x05\\/\x02\u01CF\u01D2\x05^0\x02\u01D0\u01D2\x05`1\x02\u01D1" +
		"\u01CC\x03\x02\x02\x02\u01D1\u01CD\x03\x02\x02\x02\u01D1\u01CE\x03\x02" +
		"\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D0\x03\x02\x02\x02\u01D2" +
		"W\x03\x02\x02\x02\u01D3\u01D4\x07\x1E\x02\x02\u01D4\u01D5\x05\xB6\\\x02" +
		"\u01D5\u01D6\x05\xB6\\\x02\u01D6Y\x03\x02\x02\x02\u01D7\u01D8\x07\x1F" +
		"\x02\x02\u01D8\u01D9\x05\xBA^\x02\u01D9\u01DA\x05\xBA^\x02\u01DA[\x03" +
		"\x02\x02\x02\u01DB\u01DC\x07 \x02\x02\u01DC\u01DD\x05\xAEX\x02\u01DD\u01DE" +
		"\x05\xAEX\x02\u01DE]\x03\x02\x02\x02\u01DF\u01E0\x07!\x02\x02\u01E0\u01E1" +
		"\x05\xB0Y\x02\u01E1\u01E2\x05\xB0Y\x02\u01E2_\x03\x02\x02\x02\u01E3\u01E4" +
		"\x07\"\x02\x02\u01E4\u01E5\x05\xACW\x02\u01E5\u01E6\x05\xACW\x02\u01E6" +
		"a\x03\x02\x02\x02\u01E7\u01E8\x07#\x02\x02\u01E8\u01EA\x05\xA6T\x02\u01E9" +
		"\u01EB\x05\xBC_\x02\u01EA\u01E9\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02" +
		"\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01ED\x05d3\x02\u01ED\u01EF\x05" +
		"\x1E\x10\x02\u01EE\u01F0\x05B\"\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF" +
		"\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01F3\x05H%\x02" +
		"\u01F2\u01F1\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F5\x03" +
		"\x02\x02\x02\u01F4\u01F6\x05D#\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6" +
		"\x03\x02\x02\x02\u01F6\u01F8\x03\x02\x02\x02\u01F7\u01F9\x05@!\x02\u01F8" +
		"\u01F7\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FB\x03\x02" +
		"\x02\x02\u01FA\u01FC\x05f4\x02\u01FB\u01FA\x03\x02\x02\x02\u01FB\u01FC" +
		"\x03\x02\x02\x02\u01FC\u01FE\x03\x02\x02\x02\u01FD\u01FF\x05h5\x02\u01FE" +
		"\u01FD\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0201\x03\x02" +
		"\x02\x02\u0200\u0202\x05j6\x02\u0201\u0200\x03\x02\x02\x02\u0201\u0202" +
		"\x03\x02\x02\x02\u0202c\x03\x02\x02\x02\u0203\u0204\x07$\x02\x02\u0204" +
		"e\x03\x02\x02\x02\u0205\u0206\x07%\x02\x02\u0206\u0207\x05\xBA^\x02\u0207" +
		"g\x03\x02\x02\x02\u0208\u0209\x07&\x02\x02\u0209\u020A\x05\xBA^\x02\u020A" +
		"i\x03\x02\x02\x02\u020B\u020C\x07\'\x02\x02\u020C\u020D\x05\xBA^\x02\u020D" +
		"k\x03\x02\x02\x02\u020E\u020F\x07(\x02\x02\u020F\u0211\x05\xA6T\x02\u0210" +
		"\u0212\x05\xBC_\x02\u0211\u0210\x03\x02\x02\x02\u0211\u0212\x03\x02\x02" +
		"\x02\u0212m\x03\x02\x02\x02\u0213\u0214\x07)\x02\x02\u0214\u0215\x05\xB2" +
		"Z\x02\u0215\u0217\x05p9\x02\u0216\u0218\x07*\x02\x02\u0217\u0216\x03\x02" +
		"\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218o\x03\x02\x02\x02\u0219\u021D" +
		"\x05r:\x02\u021A\u021D\x05t;\x02\u021B\u021D\x05v<\x02\u021C\u0219\x03" +
		"\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D" +
		"q\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u021E\u021F\x07+\x02\x02\u021Fs\x03\x02\x02\x02\u0220\u0221\x07,\x02" +
		"\x02\u0221u\x03\x02\x02\x02\u0222\u0223\x07-\x02\x02\u0223w\x03\x02\x02" +
		"\x02\u0224\u0225\x07.\x02\x02\u0225\u0227\x05\xA8U\x02\u0226\u0228\x05" +
		"\xBC_\x02\u0227\u0226\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228" +
		"\u0229\x03\x02\x02\x02\u0229\u022B\x05.\x18\x02\u022A\u022C\x054\x1B\x02" +
		"\u022B\u022A\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x03" +
		"\x02\x02\x02\u022D\u022F\x05\x82B\x02\u022E\u022D\x03\x02\x02\x02\u022E" +
		"\u022F\x03\x02\x02\x02\u022F\u0233\x03\x02\x02\x02\u0230\u0232\x056\x1C" +
		"\x02\u0231\u0230\x03\x02\x02\x02\u0232\u0235\x03\x02\x02\x02\u0233\u0231" +
		"\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0239\x03\x02\x02\x02" +
		"\u0235\u0233\x03\x02\x02\x02\u0236\u0238\x05z>\x02\u0237\u0236\x03\x02" +
		"\x02\x02\u0238\u023B\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u0239" +
		"\u023A\x03\x02\x02\x02\u023Ay\x03\x02\x02\x02\u023B\u0239\x03\x02\x02" +
		"\x02\u023C\u023D\x07/\x02\x02\u023D\u023F\x05&\x14\x02\u023E\u0240\x05" +
		"\xB4[\x02\u023F\u023E\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240" +
		"\u0244\x03\x02\x02\x02\u0241\u0243\x05|?\x02\u0242\u0241\x03\x02\x02\x02" +
		"\u0243\u0246\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0244\u0245\x03" +
		"\x02\x02\x02\u0245{\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0247" +
		"\u0248\x07\x03\x02\x02\u0248\u024A\x05\xA8U\x02\u0249\u024B\x05\xB4[\x02" +
		"\u024A\u0249\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C\x03" +
		"\x02\x02\x02\u024C\u024D\x05~@\x02\u024D\u024E\x05\x80A\x02\u024E}\x03" +
		"\x02\x02\x02\u024F\u0250\x070\x02\x02\u0250\u0251\x05\x1C\x0F\x02\u0251" +
		"\x7F\x03\x02\x02\x02\u0252\u0253\x071\x02\x02\u0253\u0254\x05\x1C\x0F" +
		"\x02\u0254\x81\x03\x02\x02\x02\u0255\u0256\x072\x02\x02\u0256\u0257\x05" +
		"\xB8]\x02\u0257\x83\x03\x02\x02\x02\u0258\u0259\x073\x02\x02\u0259\u025A" +
		"\x05\xC2b\x02\u025A\x85\x03\x02\x02\x02\u025B\u025C\x074\x02\x02\u025C" +
		"\u025E\x05\xA8U\x02\u025D\u025F\x05\xBC_\x02\u025E\u025D\x03\x02\x02\x02" +
		"\u025E\u025F\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0262\x05" +
		".\x18\x02\u0261\u0263\x054\x1B\x02\u0262\u0261\x03\x02\x02\x02\u0262\u0263" +
		"\x03\x02\x02\x02\u0263\u0265\x03\x02\x02\x02\u0264\u0266\x05\x84C\x02" +
		"\u0265\u0264\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0268\x03" +
		"\x02\x02\x02\u0267\u0269\x05\x88E\x02\u0268\u0267\x03\x02\x02\x02\u0268" +
		"\u0269\x03\x02\x02\x02\u0269\u0272\x03\x02\x02\x02\u026A\u026C\x05\xA2" +
		"R\x02\u026B\u026D\x05\x90I\x02\u026C\u026B\x03\x02\x02\x02\u026D\u026E" +
		"\x03\x02\x02\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02" +
		"\u026F\u0270\x03\x02\x02\x02\u0270\u0271\x05\xA4S\x02\u0271\u0273\x03" +
		"\x02\x02\x02\u0272\u026A\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273" +
		"\x87\x03\x02\x02\x02\u0274\u0275\x075\x02\x02\u0275\u0279\x05\x8AF\x02" +
		"\u0276\u0279\x05\x8CG\x02\u0277\u0279\x05\x8EH\x02\u0278\u0274\x03\x02" +
		"\x02\x02\u0278\u0276\x03\x02\x02\x02\u0278\u0277\x03\x02\x02\x02\u0279" +
		"\x89\x03\x02\x02\x02\u027A\u027B\x076\x02\x02\u027B\x8B\x03\x02\x02\x02" +
		"\u027C\u027D\x077\x02\x02\u027D\x8D\x03\x02\x02\x02\u027E\u027F\x078\x02" +
		"\x02\u027F\x8F\x03\x02\x02\x02\u0280\u0281\x079\x02\x02\u0281\u0282\x05" +
		"\xA8U\x02\u0282\u0283\x05\x94K\x02\u0283\u028D\x05\x92J\x02\u0284\u0286" +
		"\x05\xA2R\x02\u0285\u0287\x05\x90I\x02\u0286\u0285\x03\x02\x02\x02\u0287" +
		"\u0288\x03\x02\x02\x02\u0288\u0286\x03\x02\x02\x02\u0288\u0289\x03\x02" +
		"\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028B\x05\xA4S\x02\u028B\u028E" +
		"\x03\x02\x02\x02\u028C\u028E\x05\x96L\x02\u028D\u0284\x03\x02\x02\x02" +
		"\u028D\u028C\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\x91\x03" +
		"\x02\x02\x02\u028F\u0290\x070\x02\x02\u0290\u0291\x05\x1C\x0F\x02\u0291" +
		"\x93\x03\x02\x02\x02\u0292\u0293\x071\x02\x02\u0293\u0294\x05\x1C\x0F" +
		"\x02\u0294\x95\x03\x02\x02\x02\u0295\u0296\x07:\x02\x02\u0296\x97\x03" +
		"\x02\x02\x02\u0297\u0298\x07;\x02\x02\u0298\u029A\x05\xA8U\x02\u0299\u029B" +
		"\x05\xBC_\x02\u029A\u0299\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02" +
		"\u029B\u029C\x03\x02\x02\x02\u029C\u029E\x05.\x18\x02\u029D\u029F\x05" +
		"4\x1B\x02\u029E\u029D\x03\x02\x02\x02\u029E\u029F\x03\x02\x02\x02\u029F" +
		"\u02A1\x03\x02\x02\x02\u02A0\u02A2\x05\x84C\x02\u02A1\u02A0\x03\x02\x02" +
		"\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A6\x03\x02\x02\x02\u02A3\u02A5" +
		"\x05\xA0Q\x02\u02A4\u02A3\x03\x02\x02\x02\u02A5\u02A8\x03\x02\x02\x02" +
		"\u02A6\u02A4\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02B1\x03" +
		"\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A9\u02AB\x05\xA2R\x02\u02AA" +
		"\u02AC\x05\x9AN\x02\u02AB\u02AA\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02" +
		"\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF" +
		"\x03\x02\x02\x02\u02AF\u02B0\x05\xA4S\x02\u02B0\u02B2\x03\x02\x02\x02" +
		"\u02B1\u02A9\x03\x02\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2\u02B4\x03" +
		"\x02\x02\x02\u02B3\u02B5\x05\x96L\x02\u02B4\u02B3\x03\x02\x02\x02\u02B4" +
		"\u02B5\x03\x02\x02\x02\u02B5\x99\x03\x02\x02\x02\u02B6\u02B7\x079\x02" +
		"\x02\u02B7\u02B8\x05\xA8U\x02\u02B8\u02B9\x05\x94K\x02\u02B9\u02BD\x05" +
		"\x92J\x02\u02BA\u02BC\x05\xA0Q\x02\u02BB\u02BA\x03\x02\x02\x02\u02BC\u02BF" +
		"\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02" +
		"\u02BE\u02C8\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02\x02\u02C0\u02C2\x05" +
		"\xA2R\x02\u02C1\u02C3\x05\x9AN\x02\u02C2\u02C1\x03\x02\x02\x02\u02C3\u02C4" +
		"\x03\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02" +
		"\u02C5\u02C6\x03\x02\x02\x02\u02C6\u02C7\x05\xA4S\x02\u02C7\u02C9\x03" +
		"\x02\x02\x02\u02C8\u02C0\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9" +
		"\u02CB\x03\x02\x02\x02\u02CA\u02CC\x05\x96L\x02\u02CB\u02CA\x03\x02\x02" +
		"\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\x9B\x03\x02\x02\x02\u02CD\u02CE" +
		"\x07<\x02\x02\u02CE\u02D0\x05\xA8U\x02\u02CF\u02D1\x05\xBC_\x02\u02D0" +
		"\u02CF\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D2\x03\x02" +
		"\x02\x02\u02D2\u02D4\x05.\x18\x02\u02D3\u02D5\x054\x1B\x02\u02D4\u02D3" +
		"\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D7\x03\x02\x02\x02" +
		"\u02D6\u02D8\x05\x84C\x02\u02D7\u02D6\x03\x02\x02\x02\u02D7\u02D8\x03" +
		"\x02\x02\x02\u02D8\u02DC\x03\x02\x02\x02\u02D9\u02DB\x05\xA0Q\x02\u02DA" +
		"\u02D9\x03\x02\x02\x02\u02DB\u02DE\x03\x02\x02\x02\u02DC\u02DA\x03\x02" +
		"\x02\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD\u02E7\x03\x02\x02\x02\u02DE" +
		"\u02DC\x03\x02\x02\x02\u02DF\u02E1\x05\xA2R\x02\u02E0\u02E2\x05\x9EP\x02" +
		"\u02E1\u02E0\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\u02E1\x03" +
		"\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5" +
		"\u02E6\x05\xA4S\x02\u02E6\u02E8\x03\x02\x02\x02\u02E7\u02DF\x03\x02\x02" +
		"\x02\u02E7\u02E8\x03\x02\x02\x02\u02E8\x9D\x03\x02\x02\x02\u02E9\u02EA" +
		"\x079\x02\x02\u02EA\u02EB\x05\xA8U\x02\u02EB\u02EC\x05\x94K\x02\u02EC" +
		"\u02F0\x05\x92J\x02\u02ED\u02EF\x05\xA0Q\x02\u02EE\u02ED\x03\x02\x02\x02" +
		"\u02EF\u02F2\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F0\u02F1\x03" +
		"\x02\x02\x02\u02F1\u02FB\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F3" +
		"\u02F5\x05\xA2R\x02\u02F4\u02F6\x05\x9EP\x02\u02F5\u02F4\x03\x02\x02\x02" +
		"\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F5\x03\x02\x02\x02\u02F7\u02F8\x03" +
		"\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FA\x05\xA4S\x02\u02FA" +
		"\u02FC\x03\x02\x02\x02\u02FB\u02F3\x03\x02\x02\x02\u02FB\u02FC\x03\x02" +
		"\x02\x02\u02FC\x9F\x03\x02\x02\x02\u02FD\u02FE\x07\x16\x02\x02\u02FE\u0300" +
		"\x05\xA6T\x02\u02FF\u0301\x05B\"\x02\u0300\u02FF\x03\x02\x02\x02\u0300" +
		"\u0301\x03\x02\x02\x02\u0301\u0303\x03\x02\x02\x02\u0302\u0304\x05D#\x02" +
		"\u0303\u0302\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\xA1\x03" +
		"\x02\x02\x02\u0305\u0306\x07=\x02\x02\u0306\xA3\x03\x02\x02\x02\u0307" +
		"\u0308\x07>\x02\x02\u0308\xA5\x03\x02\x02\x02\u0309\u030A\x05\xC2b\x02" +
		"\u030A\xA7\x03\x02\x02\x02\u030B\u030C\x05\xC2b\x02\u030C\xA9\x03\x02" +
		"\x02\x02\u030D\u030E\x05\xC2b\x02\u030E\xAB\x03\x02\x02\x02\u030F\u0311" +
		"\x05\xB0Y\x02\u0310\u0312\x05\xAEX\x02\u0311\u0310\x03\x02\x02\x02\u0311" +
		"\u0312\x03\x02\x02\x02\u0312\xAD\x03\x02\x02\x02\u0313\u0314\x07?\x02" +
		"\x02\u0314\xAF\x03\x02\x02\x02\u0315\u0316\x07@\x02\x02\u0316\xB1\x03" +
		"\x02\x02\x02\u0317\u0318\x05\xC0a\x02\u0318\xB3\x03\x02\x02\x02\u0319" +
		"\u031A\x05\xC0a\x02\u031A\xB5\x03\x02\x02\x02\u031B\u031C\x07B\x02\x02" +
		"\u031C\xB7\x03\x02\x02\x02\u031D\u031E\x07B\x02\x02\u031E\xB9\x03\x02" +
		"\x02\x02\u031F\u0320\x07B\x02\x02\u0320\xBB\x03\x02\x02\x02\u0321\u0322" +
		"\x05\xC2b\x02\u0322\xBD\x03\x02\x02\x02\u0323\u0328\x07C\x02\x02\u0324" +
		"\u0325\x07\x14\x02\x02\u0325\u0327\x07C\x02\x02\u0326\u0324\x03\x02\x02" +
		"\x02\u0327\u032A\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328\u0329" +
		"\x03\x02\x02\x02\u0329\xBF\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02" +
		"\u032B\u0332\x07A\x02\x02\u032C\u032E\t\x02\x02\x02\u032D\u032C\x03\x02" +
		"\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02\u032F" +
		"\u0330\x03\x02\x02\x02\u0330\u0332\x03\x02\x02\x02\u0331\u032B\x03\x02" +
		"\x02\x02\u0331\u032D\x03\x02\x02\x02\u0332\xC1\x03\x02\x02\x02\u0333\u0334" +
		"\t\x03\x02\x02\u0334\xC3\x03\x02\x02\x02^\xC7\xCD\xD3\xD9\xDF\xE5\xEC" +
		"\xF6\xFA\xFF\u0106\u010C\u011F\u012D\u0142\u014B\u014E\u0156\u0158\u0160" +
		"\u0164\u0167\u016C\u0175\u0178\u017B\u017E\u0186\u0193\u0196\u0199\u019C" +
		"\u01A1\u01B7\u01BC\u01C5\u01C8\u01D1\u01EA\u01EF\u01F2\u01F5\u01F8\u01FB" +
		"\u01FE\u0201\u0211\u0217\u021C\u0227\u022B\u022E\u0233\u0239\u023F\u0244" +
		"\u024A\u025E\u0262\u0265\u0268\u026E\u0272\u0278\u0288\u028D\u029A\u029E" +
		"\u02A1\u02A6\u02AD\u02B1\u02B4\u02BD\u02C4\u02C8\u02CB\u02D0\u02D4\u02D7" +
		"\u02DC\u02E3\u02E7\u02F0\u02F7\u02FB\u0300\u0303\u0311\u0328\u032F\u0331";
	public static readonly _serializedATN: string = Utils.join(
		[
			AnoParser._serializedATNSegment0,
			AnoParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AnoParser.__ATN) {
			AnoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AnoParser._serializedATN));
		}

		return AnoParser.__ATN;
	}

}

export class ModelContext extends ParserRuleContext {
	public sql(): SqlContext {
		return this.getRuleContext(0, SqlContext);
	}
	public EOF(): TerminalNode { return this.getToken(AnoParser.EOF, 0); }
	public table(): TableContext[];
	public table(i: number): TableContext;
	public table(i?: number): TableContext | TableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableContext);
		} else {
			return this.getRuleContext(i, TableContext);
		}
	}
	public fk(): FkContext[];
	public fk(i: number): FkContext;
	public fk(i?: number): FkContext | FkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FkContext);
		} else {
			return this.getRuleContext(i, FkContext);
		}
	}
	public conversion(): ConversionContext[];
	public conversion(i: number): ConversionContext;
	public conversion(i?: number): ConversionContext | ConversionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConversionContext);
		} else {
			return this.getRuleContext(i, ConversionContext);
		}
	}
	public transformation(): TransformationContext[];
	public transformation(i: number): TransformationContext;
	public transformation(i?: number): TransformationContext | TransformationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TransformationContext);
		} else {
			return this.getRuleContext(i, TransformationContext);
		}
	}
	public distribution(): DistributionContext[];
	public distribution(i: number): DistributionContext;
	public distribution(i?: number): DistributionContext | DistributionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DistributionContext);
		} else {
			return this.getRuleContext(i, DistributionContext);
		}
	}
	public randomType(): RandomTypeContext[];
	public randomType(i: number): RandomTypeContext;
	public randomType(i?: number): RandomTypeContext | RandomTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RandomTypeContext);
		} else {
			return this.getRuleContext(i, RandomTypeContext);
		}
	}
	public taskGroup(): TaskGroupContext[];
	public taskGroup(i: number): TaskGroupContext;
	public taskGroup(i?: number): TaskGroupContext | TaskGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TaskGroupContext);
		} else {
			return this.getRuleContext(i, TaskGroupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_model; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterModel) {
			listener.enterModel(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitModel) {
			listener.exitModel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitModel) {
			return visitor.visitModel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public column(): ColumnContext[];
	public column(i: number): ColumnContext;
	public column(i?: number): ColumnContext | ColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnContext);
		} else {
			return this.getRuleContext(i, ColumnContext);
		}
	}
	public pk(): PkContext | undefined {
		return this.tryGetRuleContext(0, PkContext);
	}
	public unique(): UniqueContext[];
	public unique(i: number): UniqueContext;
	public unique(i?: number): UniqueContext | UniqueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UniqueContext);
		} else {
			return this.getRuleContext(i, UniqueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_table; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterTable) {
			listener.enterTable(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitTable) {
			listener.exitTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitTable) {
			return visitor.visitTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnContext extends ParserRuleContext {
	public datatype(): DatatypeContext {
		return this.getRuleContext(0, DatatypeContext);
	}
	public columnid(): ColumnidContext {
		return this.getRuleContext(0, ColumnidContext);
	}
	public precision(): PrecisionContext | undefined {
		return this.tryGetRuleContext(0, PrecisionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_column; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterColumn) {
			listener.enterColumn(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitColumn) {
			listener.exitColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitColumn) {
			return visitor.visitColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatatypeContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AnoParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_datatype; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterDatatype) {
			listener.enterDatatype(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitDatatype) {
			listener.exitDatatype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitDatatype) {
			return visitor.visitDatatype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrecisionContext extends ParserRuleContext {
	public numsize(): NumsizeContext {
		return this.getRuleContext(0, NumsizeContext);
	}
	public scale(): ScaleContext | undefined {
		return this.tryGetRuleContext(0, ScaleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_precision; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterPrecision) {
			listener.enterPrecision(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitPrecision) {
			listener.exitPrecision(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitPrecision) {
			return visitor.visitPrecision(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumsizeContext extends ParserRuleContext {
	public posint(): PosintContext {
		return this.getRuleContext(0, PosintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_numsize; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterNumsize) {
			listener.enterNumsize(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitNumsize) {
			listener.exitNumsize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitNumsize) {
			return visitor.visitNumsize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScaleContext extends ParserRuleContext {
	public posint(): PosintContext {
		return this.getRuleContext(0, PosintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_scale; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterScale) {
			listener.enterScale(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitScale) {
			listener.exitScale(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitScale) {
			return visitor.visitScale(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkContext extends ParserRuleContext {
	public columns(): ColumnsContext {
		return this.getRuleContext(0, ColumnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_pk; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterPk) {
			listener.enterPk(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitPk) {
			listener.exitPk(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitPk) {
			return visitor.visitPk(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UniqueContext extends ParserRuleContext {
	public uniqueid(): UniqueidContext {
		return this.getRuleContext(0, UniqueidContext);
	}
	public columns(): ColumnsContext {
		return this.getRuleContext(0, ColumnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_unique; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterUnique) {
			listener.enterUnique(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitUnique) {
			listener.exitUnique(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitUnique) {
			return visitor.visitUnique(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FkContext extends ParserRuleContext {
	public fkParent(): FkParentContext {
		return this.getRuleContext(0, FkParentContext);
	}
	public fkChild(): FkChildContext {
		return this.getRuleContext(0, FkChildContext);
	}
	public setNull(): SetNullContext | undefined {
		return this.tryGetRuleContext(0, SetNullContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_fk; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterFk) {
			listener.enterFk(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitFk) {
			listener.exitFk(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitFk) {
			return visitor.visitFk(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FkParentContext extends ParserRuleContext {
	public fkCols(): FkColsContext {
		return this.getRuleContext(0, FkColsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_fkParent; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterFkParent) {
			listener.enterFkParent(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitFkParent) {
			listener.exitFkParent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitFkParent) {
			return visitor.visitFkParent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FkChildContext extends ParserRuleContext {
	public fkCols(): FkColsContext {
		return this.getRuleContext(0, FkColsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_fkChild; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterFkChild) {
			listener.enterFkChild(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitFkChild) {
			listener.exitFkChild(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitFkChild) {
			return visitor.visitFkChild(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FkColsContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public columns(): ColumnsContext {
		return this.getRuleContext(0, ColumnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_fkCols; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterFkCols) {
			listener.enterFkCols(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitFkCols) {
			listener.exitFkCols(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitFkCols) {
			return visitor.visitFkCols(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnsContext extends ParserRuleContext {
	public columnid(): ColumnidContext[];
	public columnid(i: number): ColumnidContext;
	public columnid(i?: number): ColumnidContext | ColumnidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnidContext);
		} else {
			return this.getRuleContext(i, ColumnidContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_columns; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterColumns) {
			listener.enterColumns(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitColumns) {
			listener.exitColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitColumns) {
			return visitor.visitColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomTypeContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_randomType; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterRandomType) {
			listener.enterRandomType(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitRandomType) {
			listener.exitRandomType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitRandomType) {
			return visitor.visitRandomType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConversionContext extends ParserRuleContext {
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_conversion; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterConversion) {
			listener.enterConversion(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitConversion) {
			listener.exitConversion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitConversion) {
			return visitor.visitConversion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformationContext extends ParserRuleContext {
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_transformation; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterTransformation) {
			listener.enterTransformation(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitTransformation) {
			listener.exitTransformation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitTransformation) {
			return visitor.visitTransformation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DistributionContext extends ParserRuleContext {
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_distribution; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterDistribution) {
			listener.enterDistribution(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitDistribution) {
			listener.exitDistribution(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitDistribution) {
			return visitor.visitDistribution(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DistributeprogContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AnoParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_distributeprog; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterDistributeprog) {
			listener.enterDistributeprog(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitDistributeprog) {
			listener.exitDistributeprog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitDistributeprog) {
			return visitor.visitDistributeprog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WorkTaskContext extends ParserRuleContext {
	public update(): UpdateContext | undefined {
		return this.tryGetRuleContext(0, UpdateContext);
	}
	public create(): CreateContext | undefined {
		return this.tryGetRuleContext(0, CreateContext);
	}
	public delete(): DeleteContext | undefined {
		return this.tryGetRuleContext(0, DeleteContext);
	}
	public erase(): EraseContext | undefined {
		return this.tryGetRuleContext(0, EraseContext);
	}
	public sar(): SarContext | undefined {
		return this.tryGetRuleContext(0, SarContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_workTask; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterWorkTask) {
			listener.enterWorkTask(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitWorkTask) {
			listener.exitWorkTask(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitWorkTask) {
			return visitor.visitWorkTask(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlBeforeContext extends ParserRuleContext {
	public param(): ParamContext {
		return this.getRuleContext(0, ParamContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_sqlBefore; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSqlBefore) {
			listener.enterSqlBefore(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSqlBefore) {
			listener.exitSqlBefore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSqlBefore) {
			return visitor.visitSqlBefore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlAfterContext extends ParserRuleContext {
	public param(): ParamContext {
		return this.getRuleContext(0, ParamContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_sqlAfter; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSqlAfter) {
			listener.enterSqlAfter(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSqlAfter) {
			listener.exitSqlAfter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSqlAfter) {
			return visitor.visitSqlAfter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlContext extends ParserRuleContext {
	public sqlBefore(): SqlBeforeContext | undefined {
		return this.tryGetRuleContext(0, SqlBeforeContext);
	}
	public sqlAfter(): SqlAfterContext | undefined {
		return this.tryGetRuleContext(0, SqlAfterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_sql; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSql) {
			listener.enterSql(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSql) {
			listener.exitSql(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSql) {
			return visitor.visitSql(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskGroupContext extends ParserRuleContext {
	public taskid(): TaskidContext {
		return this.getRuleContext(0, TaskidContext);
	}
	public sql(): SqlContext {
		return this.getRuleContext(0, SqlContext);
	}
	public bracketStart(): BracketStartContext {
		return this.getRuleContext(0, BracketStartContext);
	}
	public bracketEnd(): BracketEndContext {
		return this.getRuleContext(0, BracketEndContext);
	}
	public taskGroup(): TaskGroupContext[];
	public taskGroup(i: number): TaskGroupContext;
	public taskGroup(i?: number): TaskGroupContext | TaskGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TaskGroupContext);
		} else {
			return this.getRuleContext(i, TaskGroupContext);
		}
	}
	public workTask(): WorkTaskContext[];
	public workTask(i: number): WorkTaskContext;
	public workTask(i?: number): WorkTaskContext | WorkTaskContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WorkTaskContext);
		} else {
			return this.getRuleContext(i, WorkTaskContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_taskGroup; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterTaskGroup) {
			listener.enterTaskGroup(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitTaskGroup) {
			listener.exitTaskGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitTaskGroup) {
			return visitor.visitTaskGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public sql(): SqlContext {
		return this.getRuleContext(0, SqlContext);
	}
	public taskid(): TaskidContext | undefined {
		return this.tryGetRuleContext(0, TaskidContext);
	}
	public selectionKey(): SelectionKeyContext | undefined {
		return this.tryGetRuleContext(0, SelectionKeyContext);
	}
	public where(): WhereContext | undefined {
		return this.tryGetRuleContext(0, WhereContext);
	}
	public anonymization(): AnonymizationContext[];
	public anonymization(i: number): AnonymizationContext;
	public anonymization(i?: number): AnonymizationContext | AnonymizationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnonymizationContext);
		} else {
			return this.getRuleContext(i, AnonymizationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_update; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterUpdate) {
			listener.enterUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitUpdate) {
			listener.exitUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitUpdate) {
			return visitor.visitUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionKeyContext extends ParserRuleContext {
	public columnid(): ColumnidContext {
		return this.getRuleContext(0, ColumnidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_selectionKey; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSelectionKey) {
			listener.enterSelectionKey(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSelectionKey) {
			listener.exitSelectionKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSelectionKey) {
			return visitor.visitSelectionKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnonymizationContext extends ParserRuleContext {
	public mask(): MaskContext | undefined {
		return this.tryGetRuleContext(0, MaskContext);
	}
	public randomize(): RandomizeContext | undefined {
		return this.tryGetRuleContext(0, RandomizeContext);
	}
	public shuffle(): ShuffleContext | undefined {
		return this.tryGetRuleContext(0, ShuffleContext);
	}
	public map(): MapContext | undefined {
		return this.tryGetRuleContext(0, MapContext);
	}
	public tempKey(): TempKeyContext | undefined {
		return this.tryGetRuleContext(0, TempKeyContext);
	}
	public propagate(): PropagateContext | undefined {
		return this.tryGetRuleContext(0, PropagateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_anonymization; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterAnonymization) {
			listener.enterAnonymization(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitAnonymization) {
			listener.exitAnonymization(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitAnonymization) {
			return visitor.visitAnonymization(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropagateContext extends ParserRuleContext {
	public propagateColumn(): PropagateColumnContext[];
	public propagateColumn(i: number): PropagateColumnContext;
	public propagateColumn(i?: number): PropagateColumnContext | PropagateColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropagateColumnContext);
		} else {
			return this.getRuleContext(i, PropagateColumnContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_propagate; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterPropagate) {
			listener.enterPropagate(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitPropagate) {
			listener.exitPropagate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitPropagate) {
			return visitor.visitPropagate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropagateColumnContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public columnid(): ColumnidContext {
		return this.getRuleContext(0, ColumnidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_propagateColumn; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterPropagateColumn) {
			listener.enterPropagateColumn(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitPropagateColumn) {
			listener.exitPropagateColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitPropagateColumn) {
			return visitor.visitPropagateColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TempKeyContext extends ParserRuleContext {
	public textin(): TextinContext {
		return this.getRuleContext(0, TextinContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_tempKey; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterTempKey) {
			listener.enterTempKey(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitTempKey) {
			listener.exitTempKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitTempKey) {
			return visitor.visitTempKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MaskContext extends ParserRuleContext {
	public columnid(): ColumnidContext {
		return this.getRuleContext(0, ColumnidContext);
	}
	public taskid(): TaskidContext | undefined {
		return this.tryGetRuleContext(0, TaskidContext);
	}
	public format(): FormatContext | undefined {
		return this.tryGetRuleContext(0, FormatContext);
	}
	public transform(): TransformContext | undefined {
		return this.tryGetRuleContext(0, TransformContext);
	}
	public uniqueMask(): UniqueMaskContext | undefined {
		return this.tryGetRuleContext(0, UniqueMaskContext);
	}
	public source(): SourceContext[];
	public source(i: number): SourceContext;
	public source(i?: number): SourceContext | SourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SourceContext);
		} else {
			return this.getRuleContext(i, SourceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_mask; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterMask) {
			listener.enterMask(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitMask) {
			listener.exitMask(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitMask) {
			return visitor.visitMask(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UniqueMaskContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_uniqueMask; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterUniqueMask) {
			listener.enterUniqueMask(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitUniqueMask) {
			listener.exitUniqueMask(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitUniqueMask) {
			return visitor.visitUniqueMask(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormatContext extends ParserRuleContext {
	public textin(): TextinContext {
		return this.getRuleContext(0, TextinContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_format; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterFormat) {
			listener.enterFormat(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitFormat) {
			listener.exitFormat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitFormat) {
			return visitor.visitFormat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformContext extends ParserRuleContext {
	public transformprog(): TransformprogContext {
		return this.getRuleContext(0, TransformprogContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_transform; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterTransform) {
			listener.enterTransform(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitTransform) {
			listener.exitTransform(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitTransform) {
			return visitor.visitTransform(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TransformprogContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AnoParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_transformprog; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterTransformprog) {
			listener.enterTransformprog(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitTransformprog) {
			listener.exitTransformprog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitTransformprog) {
			return visitor.visitTransformprog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConvertContext extends ParserRuleContext {
	public convertprog(): ConvertprogContext {
		return this.getRuleContext(0, ConvertprogContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_convert; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterConvert) {
			listener.enterConvert(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitConvert) {
			listener.exitConvert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitConvert) {
			return visitor.visitConvert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConvertprogContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(AnoParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_convertprog; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterConvertprog) {
			listener.enterConvertprog(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitConvertprog) {
			listener.exitConvertprog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitConvertprog) {
			return visitor.visitConvertprog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceContext extends ParserRuleContext {
	public sourceColumn(): SourceColumnContext | undefined {
		return this.tryGetRuleContext(0, SourceColumnContext);
	}
	public sourceFile(): SourceFileContext | undefined {
		return this.tryGetRuleContext(0, SourceFileContext);
	}
	public sourceRandom(): SourceRandomContext | undefined {
		return this.tryGetRuleContext(0, SourceRandomContext);
	}
	public sourceSequence(): SourceSequenceContext | undefined {
		return this.tryGetRuleContext(0, SourceSequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_source; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSource) {
			listener.enterSource(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSource) {
			listener.exitSource(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSource) {
			return visitor.visitSource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceColumnContext extends ParserRuleContext {
	public columnid(): ColumnidContext {
		return this.getRuleContext(0, ColumnidContext);
	}
	public convert(): ConvertContext | undefined {
		return this.tryGetRuleContext(0, ConvertContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_sourceColumn; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSourceColumn) {
			listener.enterSourceColumn(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSourceColumn) {
			listener.exitSourceColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSourceColumn) {
			return visitor.visitSourceColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceSequenceContext extends ParserRuleContext {
	public integer(): IntegerContext[];
	public integer(i: number): IntegerContext;
	public integer(i?: number): IntegerContext | IntegerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntegerContext);
		} else {
			return this.getRuleContext(i, IntegerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_sourceSequence; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSourceSequence) {
			listener.enterSourceSequence(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSourceSequence) {
			listener.exitSourceSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSourceSequence) {
			return visitor.visitSourceSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceFileContext extends ParserRuleContext {
	public filename(): FilenameContext {
		return this.getRuleContext(0, FilenameContext);
	}
	public randomOrder(): RandomOrderContext | undefined {
		return this.tryGetRuleContext(0, RandomOrderContext);
	}
	public convert(): ConvertContext | undefined {
		return this.tryGetRuleContext(0, ConvertContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomOrderContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_randomOrder; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterRandomOrder) {
			listener.enterRandomOrder(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitRandomOrder) {
			listener.exitRandomOrder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitRandomOrder) {
			return visitor.visitRandomOrder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceRandomContext extends ParserRuleContext {
	public randomInteger(): RandomIntegerContext | undefined {
		return this.tryGetRuleContext(0, RandomIntegerContext);
	}
	public randomDecimal(): RandomDecimalContext | undefined {
		return this.tryGetRuleContext(0, RandomDecimalContext);
	}
	public randomTime(): RandomTimeContext | undefined {
		return this.tryGetRuleContext(0, RandomTimeContext);
	}
	public randomDate(): RandomDateContext | undefined {
		return this.tryGetRuleContext(0, RandomDateContext);
	}
	public randomdatetime(): RandomdatetimeContext | undefined {
		return this.tryGetRuleContext(0, RandomdatetimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_sourceRandom; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSourceRandom) {
			listener.enterSourceRandom(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSourceRandom) {
			listener.exitSourceRandom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSourceRandom) {
			return visitor.visitSourceRandom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomIntegerContext extends ParserRuleContext {
	public integer(): IntegerContext[];
	public integer(i: number): IntegerContext;
	public integer(i?: number): IntegerContext | IntegerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntegerContext);
		} else {
			return this.getRuleContext(i, IntegerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_randomInteger; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterRandomInteger) {
			listener.enterRandomInteger(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitRandomInteger) {
			listener.exitRandomInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitRandomInteger) {
			return visitor.visitRandomInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomDecimalContext extends ParserRuleContext {
	public decimal(): DecimalContext[];
	public decimal(i: number): DecimalContext;
	public decimal(i?: number): DecimalContext | DecimalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecimalContext);
		} else {
			return this.getRuleContext(i, DecimalContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_randomDecimal; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterRandomDecimal) {
			listener.enterRandomDecimal(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitRandomDecimal) {
			listener.exitRandomDecimal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitRandomDecimal) {
			return visitor.visitRandomDecimal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomTimeContext extends ParserRuleContext {
	public time(): TimeContext[];
	public time(i: number): TimeContext;
	public time(i?: number): TimeContext | TimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeContext);
		} else {
			return this.getRuleContext(i, TimeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_randomTime; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterRandomTime) {
			listener.enterRandomTime(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitRandomTime) {
			listener.exitRandomTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitRandomTime) {
			return visitor.visitRandomTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomDateContext extends ParserRuleContext {
	public date(): DateContext[];
	public date(i: number): DateContext;
	public date(i?: number): DateContext | DateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DateContext);
		} else {
			return this.getRuleContext(i, DateContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_randomDate; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterRandomDate) {
			listener.enterRandomDate(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitRandomDate) {
			listener.exitRandomDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitRandomDate) {
			return visitor.visitRandomDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomdatetimeContext extends ParserRuleContext {
	public datetime(): DatetimeContext[];
	public datetime(i: number): DatetimeContext;
	public datetime(i?: number): DatetimeContext | DatetimeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DatetimeContext);
		} else {
			return this.getRuleContext(i, DatetimeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_randomdatetime; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterRandomdatetime) {
			listener.enterRandomdatetime(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitRandomdatetime) {
			listener.exitRandomdatetime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitRandomdatetime) {
			return visitor.visitRandomdatetime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomizeContext extends ParserRuleContext {
	public columnid(): ColumnidContext {
		return this.getRuleContext(0, ColumnidContext);
	}
	public randomizeType(): RandomizeTypeContext {
		return this.getRuleContext(0, RandomizeTypeContext);
	}
	public randomType(): RandomTypeContext {
		return this.getRuleContext(0, RandomTypeContext);
	}
	public taskid(): TaskidContext | undefined {
		return this.tryGetRuleContext(0, TaskidContext);
	}
	public format(): FormatContext | undefined {
		return this.tryGetRuleContext(0, FormatContext);
	}
	public convert(): ConvertContext | undefined {
		return this.tryGetRuleContext(0, ConvertContext);
	}
	public transform(): TransformContext | undefined {
		return this.tryGetRuleContext(0, TransformContext);
	}
	public uniqueMask(): UniqueMaskContext | undefined {
		return this.tryGetRuleContext(0, UniqueMaskContext);
	}
	public offset(): OffsetContext | undefined {
		return this.tryGetRuleContext(0, OffsetContext);
	}
	public flatNoise(): FlatNoiseContext | undefined {
		return this.tryGetRuleContext(0, FlatNoiseContext);
	}
	public percentageNoise(): PercentageNoiseContext | undefined {
		return this.tryGetRuleContext(0, PercentageNoiseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_randomize; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterRandomize) {
			listener.enterRandomize(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitRandomize) {
			listener.exitRandomize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitRandomize) {
			return visitor.visitRandomize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomizeTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_randomizeType; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterRandomizeType) {
			listener.enterRandomizeType(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitRandomizeType) {
			listener.exitRandomizeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitRandomizeType) {
			return visitor.visitRandomizeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OffsetContext extends ParserRuleContext {
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_offset; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterOffset) {
			listener.enterOffset(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitOffset) {
			listener.exitOffset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitOffset) {
			return visitor.visitOffset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlatNoiseContext extends ParserRuleContext {
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_flatNoise; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterFlatNoise) {
			listener.enterFlatNoise(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitFlatNoise) {
			listener.exitFlatNoise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitFlatNoise) {
			return visitor.visitFlatNoise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PercentageNoiseContext extends ParserRuleContext {
	public decimal(): DecimalContext {
		return this.getRuleContext(0, DecimalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_percentageNoise; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterPercentageNoise) {
			listener.enterPercentageNoise(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitPercentageNoise) {
			listener.exitPercentageNoise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitPercentageNoise) {
			return visitor.visitPercentageNoise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShuffleContext extends ParserRuleContext {
	public columnid(): ColumnidContext {
		return this.getRuleContext(0, ColumnidContext);
	}
	public taskid(): TaskidContext | undefined {
		return this.tryGetRuleContext(0, TaskidContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_shuffle; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterShuffle) {
			listener.enterShuffle(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitShuffle) {
			listener.exitShuffle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitShuffle) {
			return visitor.visitShuffle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	public filename(): FilenameContext {
		return this.getRuleContext(0, FilenameContext);
	}
	public mapUsage(): MapUsageContext {
		return this.getRuleContext(0, MapUsageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_map; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterMap) {
			listener.enterMap(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitMap) {
			listener.exitMap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitMap) {
			return visitor.visitMap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapUsageContext extends ParserRuleContext {
	public input(): InputContext | undefined {
		return this.tryGetRuleContext(0, InputContext);
	}
	public output(): OutputContext | undefined {
		return this.tryGetRuleContext(0, OutputContext);
	}
	public inputOutput(): InputOutputContext | undefined {
		return this.tryGetRuleContext(0, InputOutputContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_mapUsage; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterMapUsage) {
			listener.enterMapUsage(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitMapUsage) {
			listener.exitMapUsage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitMapUsage) {
			return visitor.visitMapUsage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_input; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterInput) {
			listener.enterInput(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitInput) {
			listener.exitInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitInput) {
			return visitor.visitInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_output; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterOutput) {
			listener.enterOutput(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitOutput) {
			listener.exitOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitOutput) {
			return visitor.visitOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputOutputContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_inputOutput; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterInputOutput) {
			listener.enterInputOutput(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitInputOutput) {
			listener.exitInputOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitInputOutput) {
			return visitor.visitInputOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public sql(): SqlContext {
		return this.getRuleContext(0, SqlContext);
	}
	public taskid(): TaskidContext | undefined {
		return this.tryGetRuleContext(0, TaskidContext);
	}
	public selectionKey(): SelectionKeyContext | undefined {
		return this.tryGetRuleContext(0, SelectionKeyContext);
	}
	public minRows(): MinRowsContext | undefined {
		return this.tryGetRuleContext(0, MinRowsContext);
	}
	public anonymization(): AnonymizationContext[];
	public anonymization(i: number): AnonymizationContext;
	public anonymization(i?: number): AnonymizationContext | AnonymizationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnonymizationContext);
		} else {
			return this.getRuleContext(i, AnonymizationContext);
		}
	}
	public distribute(): DistributeContext[];
	public distribute(i: number): DistributeContext;
	public distribute(i?: number): DistributeContext | DistributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DistributeContext);
		} else {
			return this.getRuleContext(i, DistributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_create; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterCreate) {
			listener.enterCreate(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitCreate) {
			listener.exitCreate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitCreate) {
			return visitor.visitCreate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DistributeContext extends ParserRuleContext {
	public distributeprog(): DistributeprogContext {
		return this.getRuleContext(0, DistributeprogContext);
	}
	public textin(): TextinContext | undefined {
		return this.tryGetRuleContext(0, TextinContext);
	}
	public createTable(): CreateTableContext[];
	public createTable(i: number): CreateTableContext;
	public createTable(i?: number): CreateTableContext | CreateTableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CreateTableContext);
		} else {
			return this.getRuleContext(i, CreateTableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_distribute; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterDistribute) {
			listener.enterDistribute(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitDistribute) {
			listener.exitDistribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitDistribute) {
			return visitor.visitDistribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateTableContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public createChildColumns(): CreateChildColumnsContext {
		return this.getRuleContext(0, CreateChildColumnsContext);
	}
	public createParentColumns(): CreateParentColumnsContext {
		return this.getRuleContext(0, CreateParentColumnsContext);
	}
	public textin(): TextinContext | undefined {
		return this.tryGetRuleContext(0, TextinContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_createTable; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterCreateTable) {
			listener.enterCreateTable(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitCreateTable) {
			listener.exitCreateTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitCreateTable) {
			return visitor.visitCreateTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateChildColumnsContext extends ParserRuleContext {
	public columns(): ColumnsContext {
		return this.getRuleContext(0, ColumnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_createChildColumns; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterCreateChildColumns) {
			listener.enterCreateChildColumns(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitCreateChildColumns) {
			listener.exitCreateChildColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitCreateChildColumns) {
			return visitor.visitCreateChildColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreateParentColumnsContext extends ParserRuleContext {
	public columns(): ColumnsContext {
		return this.getRuleContext(0, ColumnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_createParentColumns; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterCreateParentColumns) {
			listener.enterCreateParentColumns(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitCreateParentColumns) {
			listener.exitCreateParentColumns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitCreateParentColumns) {
			return visitor.visitCreateParentColumns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MinRowsContext extends ParserRuleContext {
	public posint(): PosintContext {
		return this.getRuleContext(0, PosintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_minRows; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterMinRows) {
			listener.enterMinRows(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitMinRows) {
			listener.exitMinRows(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitMinRows) {
			return visitor.visitMinRows(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_where; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterWhere) {
			listener.enterWhere(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitWhere) {
			listener.exitWhere(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitWhere) {
			return visitor.visitWhere(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public sql(): SqlContext {
		return this.getRuleContext(0, SqlContext);
	}
	public taskid(): TaskidContext | undefined {
		return this.tryGetRuleContext(0, TaskidContext);
	}
	public selectionKey(): SelectionKeyContext | undefined {
		return this.tryGetRuleContext(0, SelectionKeyContext);
	}
	public where(): WhereContext | undefined {
		return this.tryGetRuleContext(0, WhereContext);
	}
	public method(): MethodContext | undefined {
		return this.tryGetRuleContext(0, MethodContext);
	}
	public bracketStart(): BracketStartContext | undefined {
		return this.tryGetRuleContext(0, BracketStartContext);
	}
	public bracketEnd(): BracketEndContext | undefined {
		return this.tryGetRuleContext(0, BracketEndContext);
	}
	public deleteTable(): DeleteTableContext[];
	public deleteTable(i: number): DeleteTableContext;
	public deleteTable(i?: number): DeleteTableContext | DeleteTableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeleteTableContext);
		} else {
			return this.getRuleContext(i, DeleteTableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_delete; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterDelete) {
			listener.enterDelete(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitDelete) {
			listener.exitDelete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitDelete) {
			return visitor.visitDelete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodContext extends ParserRuleContext {
	public cascading(): CascadingContext | undefined {
		return this.tryGetRuleContext(0, CascadingContext);
	}
	public notIn(): NotInContext | undefined {
		return this.tryGetRuleContext(0, NotInContext);
	}
	public notExists(): NotExistsContext | undefined {
		return this.tryGetRuleContext(0, NotExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_method; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterMethod) {
			listener.enterMethod(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitMethod) {
			listener.exitMethod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitMethod) {
			return visitor.visitMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CascadingContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_cascading; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterCascading) {
			listener.enterCascading(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitCascading) {
			listener.exitCascading(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitCascading) {
			return visitor.visitCascading(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotInContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_notIn; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterNotIn) {
			listener.enterNotIn(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitNotIn) {
			listener.exitNotIn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitNotIn) {
			return visitor.visitNotIn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotExistsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_notExists; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterNotExists) {
			listener.enterNotExists(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitNotExists) {
			listener.exitNotExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitNotExists) {
			return visitor.visitNotExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteTableContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public parentCols(): ParentColsContext {
		return this.getRuleContext(0, ParentColsContext);
	}
	public childCols(): ChildColsContext {
		return this.getRuleContext(0, ChildColsContext);
	}
	public setNull(): SetNullContext | undefined {
		return this.tryGetRuleContext(0, SetNullContext);
	}
	public bracketStart(): BracketStartContext | undefined {
		return this.tryGetRuleContext(0, BracketStartContext);
	}
	public bracketEnd(): BracketEndContext | undefined {
		return this.tryGetRuleContext(0, BracketEndContext);
	}
	public deleteTable(): DeleteTableContext[];
	public deleteTable(i: number): DeleteTableContext;
	public deleteTable(i?: number): DeleteTableContext | DeleteTableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeleteTableContext);
		} else {
			return this.getRuleContext(i, DeleteTableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_deleteTable; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterDeleteTable) {
			listener.enterDeleteTable(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitDeleteTable) {
			listener.exitDeleteTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitDeleteTable) {
			return visitor.visitDeleteTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChildColsContext extends ParserRuleContext {
	public columns(): ColumnsContext {
		return this.getRuleContext(0, ColumnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_childCols; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterChildCols) {
			listener.enterChildCols(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitChildCols) {
			listener.exitChildCols(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitChildCols) {
			return visitor.visitChildCols(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParentColsContext extends ParserRuleContext {
	public columns(): ColumnsContext {
		return this.getRuleContext(0, ColumnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_parentCols; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterParentCols) {
			listener.enterParentCols(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitParentCols) {
			listener.exitParentCols(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitParentCols) {
			return visitor.visitParentCols(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetNullContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_setNull; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSetNull) {
			listener.enterSetNull(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSetNull) {
			listener.exitSetNull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSetNull) {
			return visitor.visitSetNull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EraseContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public sql(): SqlContext {
		return this.getRuleContext(0, SqlContext);
	}
	public taskid(): TaskidContext | undefined {
		return this.tryGetRuleContext(0, TaskidContext);
	}
	public selectionKey(): SelectionKeyContext | undefined {
		return this.tryGetRuleContext(0, SelectionKeyContext);
	}
	public where(): WhereContext | undefined {
		return this.tryGetRuleContext(0, WhereContext);
	}
	public maskColumn(): MaskColumnContext[];
	public maskColumn(i: number): MaskColumnContext;
	public maskColumn(i?: number): MaskColumnContext | MaskColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MaskColumnContext);
		} else {
			return this.getRuleContext(i, MaskColumnContext);
		}
	}
	public bracketStart(): BracketStartContext | undefined {
		return this.tryGetRuleContext(0, BracketStartContext);
	}
	public bracketEnd(): BracketEndContext | undefined {
		return this.tryGetRuleContext(0, BracketEndContext);
	}
	public setNull(): SetNullContext | undefined {
		return this.tryGetRuleContext(0, SetNullContext);
	}
	public eraseTable(): EraseTableContext[];
	public eraseTable(i: number): EraseTableContext;
	public eraseTable(i?: number): EraseTableContext | EraseTableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EraseTableContext);
		} else {
			return this.getRuleContext(i, EraseTableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_erase; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterErase) {
			listener.enterErase(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitErase) {
			listener.exitErase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitErase) {
			return visitor.visitErase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EraseTableContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public parentCols(): ParentColsContext {
		return this.getRuleContext(0, ParentColsContext);
	}
	public childCols(): ChildColsContext {
		return this.getRuleContext(0, ChildColsContext);
	}
	public maskColumn(): MaskColumnContext[];
	public maskColumn(i: number): MaskColumnContext;
	public maskColumn(i?: number): MaskColumnContext | MaskColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MaskColumnContext);
		} else {
			return this.getRuleContext(i, MaskColumnContext);
		}
	}
	public bracketStart(): BracketStartContext | undefined {
		return this.tryGetRuleContext(0, BracketStartContext);
	}
	public bracketEnd(): BracketEndContext | undefined {
		return this.tryGetRuleContext(0, BracketEndContext);
	}
	public setNull(): SetNullContext | undefined {
		return this.tryGetRuleContext(0, SetNullContext);
	}
	public eraseTable(): EraseTableContext[];
	public eraseTable(i: number): EraseTableContext;
	public eraseTable(i?: number): EraseTableContext | EraseTableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EraseTableContext);
		} else {
			return this.getRuleContext(i, EraseTableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_eraseTable; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterEraseTable) {
			listener.enterEraseTable(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitEraseTable) {
			listener.exitEraseTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitEraseTable) {
			return visitor.visitEraseTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SarContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public sql(): SqlContext {
		return this.getRuleContext(0, SqlContext);
	}
	public taskid(): TaskidContext | undefined {
		return this.tryGetRuleContext(0, TaskidContext);
	}
	public selectionKey(): SelectionKeyContext | undefined {
		return this.tryGetRuleContext(0, SelectionKeyContext);
	}
	public where(): WhereContext | undefined {
		return this.tryGetRuleContext(0, WhereContext);
	}
	public maskColumn(): MaskColumnContext[];
	public maskColumn(i: number): MaskColumnContext;
	public maskColumn(i?: number): MaskColumnContext | MaskColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MaskColumnContext);
		} else {
			return this.getRuleContext(i, MaskColumnContext);
		}
	}
	public bracketStart(): BracketStartContext | undefined {
		return this.tryGetRuleContext(0, BracketStartContext);
	}
	public bracketEnd(): BracketEndContext | undefined {
		return this.tryGetRuleContext(0, BracketEndContext);
	}
	public sarTable(): SarTableContext[];
	public sarTable(i: number): SarTableContext;
	public sarTable(i?: number): SarTableContext | SarTableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SarTableContext);
		} else {
			return this.getRuleContext(i, SarTableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_sar; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSar) {
			listener.enterSar(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSar) {
			listener.exitSar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSar) {
			return visitor.visitSar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SarTableContext extends ParserRuleContext {
	public tableid(): TableidContext {
		return this.getRuleContext(0, TableidContext);
	}
	public parentCols(): ParentColsContext {
		return this.getRuleContext(0, ParentColsContext);
	}
	public childCols(): ChildColsContext {
		return this.getRuleContext(0, ChildColsContext);
	}
	public maskColumn(): MaskColumnContext[];
	public maskColumn(i: number): MaskColumnContext;
	public maskColumn(i?: number): MaskColumnContext | MaskColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MaskColumnContext);
		} else {
			return this.getRuleContext(i, MaskColumnContext);
		}
	}
	public bracketStart(): BracketStartContext | undefined {
		return this.tryGetRuleContext(0, BracketStartContext);
	}
	public bracketEnd(): BracketEndContext | undefined {
		return this.tryGetRuleContext(0, BracketEndContext);
	}
	public sarTable(): SarTableContext[];
	public sarTable(i: number): SarTableContext;
	public sarTable(i?: number): SarTableContext | SarTableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SarTableContext);
		} else {
			return this.getRuleContext(i, SarTableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_sarTable; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterSarTable) {
			listener.enterSarTable(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitSarTable) {
			listener.exitSarTable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitSarTable) {
			return visitor.visitSarTable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MaskColumnContext extends ParserRuleContext {
	public columnid(): ColumnidContext {
		return this.getRuleContext(0, ColumnidContext);
	}
	public format(): FormatContext | undefined {
		return this.tryGetRuleContext(0, FormatContext);
	}
	public transform(): TransformContext | undefined {
		return this.tryGetRuleContext(0, TransformContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_maskColumn; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterMaskColumn) {
			listener.enterMaskColumn(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitMaskColumn) {
			listener.exitMaskColumn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitMaskColumn) {
			return visitor.visitMaskColumn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BracketStartContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_bracketStart; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterBracketStart) {
			listener.enterBracketStart(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitBracketStart) {
			listener.exitBracketStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitBracketStart) {
			return visitor.visitBracketStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BracketEndContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_bracketEnd; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterBracketEnd) {
			listener.enterBracketEnd(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitBracketEnd) {
			listener.exitBracketEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitBracketEnd) {
			return visitor.visitBracketEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColumnidContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_columnid; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterColumnid) {
			listener.enterColumnid(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitColumnid) {
			listener.exitColumnid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitColumnid) {
			return visitor.visitColumnid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TableidContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_tableid; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterTableid) {
			listener.enterTableid(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitTableid) {
			listener.exitTableid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitTableid) {
			return visitor.visitTableid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UniqueidContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_uniqueid; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterUniqueid) {
			listener.enterUniqueid(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitUniqueid) {
			listener.exitUniqueid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitUniqueid) {
			return visitor.visitUniqueid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatetimeContext extends ParserRuleContext {
	public date(): DateContext {
		return this.getRuleContext(0, DateContext);
	}
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_datetime; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterDatetime) {
			listener.enterDatetime(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitDatetime) {
			listener.exitDatetime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitDatetime) {
			return visitor.visitDatetime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public TIMEFMT(): TerminalNode { return this.getToken(AnoParser.TIMEFMT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_time; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitTime) {
			return visitor.visitTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public DATEFMT(): TerminalNode { return this.getToken(AnoParser.DATEFMT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_date; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitDate) {
			return visitor.visitDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilenameContext extends ParserRuleContext {
	public param(): ParamContext {
		return this.getRuleContext(0, ParamContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_filename; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterFilename) {
			listener.enterFilename(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitFilename) {
			listener.exitFilename(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitFilename) {
			return visitor.visitFilename(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextinContext extends ParserRuleContext {
	public param(): ParamContext {
		return this.getRuleContext(0, ParamContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_textin; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterTextin) {
			listener.enterTextin(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitTextin) {
			listener.exitTextin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitTextin) {
			return visitor.visitTextin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public NUMERIC(): TerminalNode { return this.getToken(AnoParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_integer; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PosintContext extends ParserRuleContext {
	public NUMERIC(): TerminalNode { return this.getToken(AnoParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_posint; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterPosint) {
			listener.enterPosint(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitPosint) {
			listener.exitPosint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitPosint) {
			return visitor.visitPosint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecimalContext extends ParserRuleContext {
	public NUMERIC(): TerminalNode { return this.getToken(AnoParser.NUMERIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_decimal; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterDecimal) {
			listener.enterDecimal(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitDecimal) {
			listener.exitDecimal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitDecimal) {
			return visitor.visitDecimal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskidContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_taskid; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterTaskid) {
			listener.enterTaskid(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitTaskid) {
			listener.exitTaskid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitTaskid) {
			return visitor.visitTaskid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AnoParser.NAME);
		} else {
			return this.getToken(AnoParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_namespace; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterNamespace) {
			listener.enterNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitNamespace) {
			listener.exitNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitNamespace) {
			return visitor.visitNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AnoParser.STRING, 0); }
	public NUMERIC(): TerminalNode[];
	public NUMERIC(i: number): TerminalNode;
	public NUMERIC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AnoParser.NUMERIC);
		} else {
			return this.getToken(AnoParser.NUMERIC, i);
		}
	}
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AnoParser.NAME);
		} else {
			return this.getToken(AnoParser.NAME, i);
		}
	}
	public ANY_OTHER(): TerminalNode[];
	public ANY_OTHER(i: number): TerminalNode;
	public ANY_OTHER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AnoParser.ANY_OTHER);
		} else {
			return this.getToken(AnoParser.ANY_OTHER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_param; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(AnoParser.NAME, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AnoParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AnoParser.RULE_id; }
	// @Override
	public enterRule(listener: AnoListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: AnoListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AnoVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


