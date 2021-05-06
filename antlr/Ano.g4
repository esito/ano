/******************
 ANO - Anonymizer Language grammar
 
 */

grammar Ano;

model:
	table* fk* conversion* transformation* distribution* randomType* sql? taskGroup* EOF;

table: 'table' tableid column* pk? unique*;

column: 'column' datatype columnid precision?;
datatype: NAME;
precision: numsize scale?;
numsize: 'size' posint;
scale: 'scale' posint;
pk: 'primary-key' columns;
unique: 'unique-key' uniqueid columns;
fk: 'foreign-key' fkParent fkChild setNull?;

fkParent: fkCols;
fkChild: fkCols;
fkCols: tableid columns;

columns: columnid (',' columnid)*;

// Dynamically added: decimal, date, datetime, time, integer
randomType: id;

// Dynamically added: String2Date, String2decimal
conversion: 'conversion' namespace;

// Dynamically added: Email, CreditCard
transformation: 'transformation' namespace;

// Dynamically added: AllCombinations
distribution: 'distribution' namespace;
distributeprog: NAME;

workTask: update | create | delete | erase | sar;

sqlBefore: 'sql-before' param;
sqlAfter: 'sql-after' param;

sql: sqlBefore? sqlAfter?;

taskGroup:
	'task' taskid sql? bracketStart (taskGroup | workTask)* bracketEnd;

update:
	'update' tableid taskid? sql? selectionKey? where? anonymization*;

selectionKey: 'selection-key' columnid;

anonymization: (mask | randomize | shuffle) map? tempKey? propagate?;

propagate: 'propagate' propagateColumn (',' propagateColumn)*;

propagateColumn: tableid '.' columnid;

tempKey: 'temporary-value' textin;

mask:
	'mask' columnid taskid? format? transform? uniqueMask? source*;

uniqueMask: 'unique';

format: 'format' textin;

transform: 'transform' transformprog;
transformprog: NAME;

convert: 'convert' convertprog;
convertprog: NAME;

source:
	sourceColumn
	| sourceFile
	| sourceRandom
	| sourceSequence;

sourceColumn: 'column' columnid convert?;

sourceSequence: 'sequence' integer integer;

sourceFile: 'file' filename randomOrder? convert?;

randomOrder: 'random-order';

sourceRandom:
	randomInteger
	| randomDecimal
	| randomTime
	| randomDate
	| randomdatetime;

randomInteger: 'random-integer' integer integer;

randomDecimal: 'random-decimal' decimal decimal;

randomTime: 'random-time' time time;

randomDate: 'random-date' date date;

randomdatetime: 'random-datetime' datetime datetime;

randomize:
	'randomize' columnid taskid? randomizeType randomType format? convert? transform? uniqueMask?
		offset? flatNoise? percentageNoise?;

randomizeType: 'type';

offset: 'offset' decimal;

flatNoise: 'flat-noise' decimal;

percentageNoise: 'percentage-noise' decimal;

shuffle: 'shuffle' columnid taskid?;

map: 'map' filename mapUsage 'encrypted'?;

mapUsage: input | output | inputOutput;

input: 'input';

output: 'output';

inputOutput: 'input-output';

create:
	'create' tableid taskid? sql? selectionKey? minRows? anonymization* distribute*;

distribute: 'distribute' distributeprog textin? createTable*;

createTable:
	'table' tableid textin? createChildColumns createParentColumns;

createChildColumns: 'child' columns;

createParentColumns: 'parent' columns;

minRows: 'minimum-rows' posint;

where: 'where' id;

delete:
	'delete' tableid taskid? sql? selectionKey? where? method? (
		bracketStart deleteTable+ bracketEnd
	)?;

method: 'method' cascading | notIn | notExists;

cascading: 'cascading';

notIn: 'not-in';

notExists: 'not-exists';

deleteTable:
	'cascade' tableid parentCols childCols (
		(bracketStart deleteTable+ bracketEnd)
		| setNull
	)?;

childCols: 'child' columns;

parentCols: 'parent' columns;

setNull: 'setnull';

erase:
	'erase' tableid taskid? sql? selectionKey? where? maskColumn* (
		bracketStart eraseTable+ bracketEnd
	)? setNull?;

eraseTable:
	'cascade' tableid parentCols childCols maskColumn* (
		bracketStart eraseTable+ bracketEnd
	)? setNull?;

sar:
	'sar' tableid taskid? sql? selectionKey? where? maskColumn* (
		bracketStart sarTable+ bracketEnd
	)?;

sarTable:
	'cascade' tableid parentCols childCols maskColumn* (
		bracketStart sarTable+ bracketEnd
	)?;

maskColumn: 'mask' columnid format? transform?;

bracketStart: '{';
bracketEnd: '}';

columnid: id;
tableid: id;
uniqueid: id;

datetime: date time?;
time: TIMEFMT;
date: DATEFMT;
filename: param;
textin: param;
integer: NUMERIC;
posint: NUMERIC;
decimal: NUMERIC;
taskid: id;
namespace: NAME ('.' NAME)*;
param: STRING | ('.' | NUMERIC | NAME | ANY_OTHER)+;
id: NAME | STRING;

/*
 LEXER rules:
 are directly tokenized
 fragments can only be used from LEXER rules.
 */
TIMEFMT: DIGIT DIGIT ':' DIGIT DIGIT ':' DIGIT DIGIT;
DATEFMT:
	DIGIT DIGIT DIGIT DIGIT '-' DIGIT DIGIT '-' DIGIT DIGIT;
STRING: ('"' ( ESCAPED_CHAR | WS_CHAR | ~('\\' | '"'))*? '"');
NUMERIC: '-'? DIGIT+ ('.' DIGIT+)?;
NAME: NAME_CHAR (NAME_CHAR | DIGIT)*;

ML_COMMENT: '/*' (.)+? '*/' -> channel(HIDDEN);
SL_COMMENT: '//' (.)+? '\n' -> channel(HIDDEN);

WS: WS_CHAR+ -> skip;
fragment ESCAPED_CHAR: '\\' ('n' | 't' | 'r' | '"' | '\\');
fragment DIGIT: [0-9];
fragment NAME_CHAR: [a-zA-Z_];
fragment WS_CHAR: [ \t\r\n];
ANY_OTHER: .;

