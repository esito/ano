## Table
**table** [tableid] (column)* (primary-key)? (unique-key)*
`Section lists the database tables used for the tasks`
## Column
**column** [datatype] [columnid] (size [posint] (scale [posint])? )?
`Column info for the table, size and scale are used for numerics`
## Tableid
*SQL compliant table name* cannot have spaces, equals, lt, gt, etc
## Columnid
*SQL compliant column name* cannot have spaces, equals, lt, gt, etc
## Datatype
Column **datatype** are logical types `text, boolean, integer, decimal, date, datetime, time`
## Precision
Column **size** specifies formatting of the numeric
## Numsize
Column **size** specifies formatting of whole part to the left of a decimal point
## Scale
Column **scale** specifies formatting of digits to right of the decimal point
## Posint
*Positive integer*
## Pk
**primary-key** (column)* - Columns used for PK
## Fk
**foreign-key** [parent relation] [child relation]
`Defines relations between tables used by update, delete, mask and distribute in order to maintain database integrity`
## FkCols
[table name] (column name)+
## Columns
Column names, comma separated
## FkParent
Parent relation part table + columns
## FkChild
Child relation part table + columns
## Unique-key
**unique-key** [uniqueid] (column)* - Columns used for unique 
## Uniqueid
Uniqueid is the name of the index
## Distribution
**distribution** [namespace] - Custom Java distribution implementation
## Conversion
**conversion** [namespace] - Custom Java conversion implementation
## Transformation
**transformation** [namespace] - Custom Java transformation implementation
## Distributeprog
Distribution implementation
## Convertprog
Conversion implementation
## Transformprog
Transformation implementation
## Namespace
*Java namespace to specify a program on classpath*
## Sql
SQL command to be run before or after an operation
## SqlBefore
**sql-before** ["SQL command"] - To be run before the database operation such as disable triggers
## SqlAfter
**sql-after** ["SQL command"] - To be run after the database operation such as enable triggers
## TaskGroup
Task grouping for organizing
## WorkTask
Database operation task
## Update
`Updates are organized by table and performed on one or more of its columns and on columns from dependent tables (i.e. foreign keys)`
**update** [tableid] [taskid]? (sql) (selectionKey)? (where)? (anonymization)*
## Create
`NOTE! It is important to define the creation of data for parent tables before defining the creation of data for the child tables and then ensure that the relation via the foreign keys are defined` 
`Creates data for tables, you can insert rows into database tables with sample data and also create records for child tables that are linked together by foreign keys.`
**create** [tableid] [taskid]? (sql) (selectionKey)? [minRows]? (anonymization)* (distribute)*
## MinRows
**minimum-rows** [posint]
`The minimum-rows POSINT value ensures that the table will have at least minimum-rows records inserted`
## Distribute
**distribute** [distributeprog] textin? (createTable)*
## CreateTable
**table** [tableid] textin? createChildColumns createParentColumns
## CreateChildColumns
**child** columns
## CreateParentColumns
**parent** columns
## Delete
`Used for deleting a sub-set of data from a specified table and records from referenced tables using the defined foreign-keys. Cascading deletes of dependent tables is supported. You may remove any dependency or manually add dependencies on other tables.`
**delete** [tableid] [taskid]? (sql) (selectionKey)? (where)? (anonymization)* [**method** method]? (**{** (deleteTable)+ **}**)?
## Method
**method** one of :[cascading], [not-in] or [not-exists] 
## Cascading
`Children are deleted first, and the parent last.Generally works without disabling constraints.Slow performance (one by one).`
**cascading**
## NotExists
`Parent is deleted first.Thereafter all orphans are deleted.Fastest, but constraints must be disabled.`
**not-exists**
## NotIn
`Parent is deleted first.Thereafter all orphans are deleted using: WHERE child.parent_id NOT IN (SELECT DISTINCT parent.id FROM parent).Fast, but constraints must be disabled. `
**not-in**
## Erase
`The erase task allows you to combine anonymizations (masking) and deletions.This may be used to anonymize or remove obsolete data. It may also be used to support GDPR`
**erase** [tableid] [taskid]? (sql) (selectionKey)? (where)? (anonymization)* (**{** (eraseTable)+ **}**)?
## Sar
`Used for creating data for Subject Access Requests reports`
`The exported data is a xml or json file`
**sar** [tableid] [taskid]? (sql) (selectionKey)? (where)? (anonymization)* (**{** (sarTable)+ **}**)?
## DeleteTable
**cascade** [tableid] **parent** (column)+ **child** (column)+ (**{** (deleteTable)+ **}**)?
## EraseTable
**cascade** [tableid] **parent** (column)+ **child** (column)+ (anonymization)* (**{** (eraseTable)+ **}**)?
## SarTable
**cascade** [tableid] **parent** (column)+ **child** (column)+ (anonymization)* (**{** (deleteTable)+ **}**)?
## MaskColumn
**mask** [columnid] (format)? (transform)?
## Where
**where** Specifies a selection filter
## Mask
**mask** [columnid] (format)? (transform)? [**unique**]? (source)*
## UniqueMask
**unique** Forces anonymizaion to try new values to satisfy unique constraint
## Format
**format** textin  
## Transform
**transform** [transformprog]
## Convert
**convert** [convertprog]
## SelectionKey
**selection-key** [columnid]
`Possible selection keys are the primary key and unique indexes. The default selection key is the primary key defined for the table.`
## Anonymization
**anonymization** (mask | randomize | shuffle) map? tempKey? propagate?
## TempKey
**temporary-value** textin 
`A temporary value may be defined for columns that are primary keys or unique columns. It is a temporary key that is used to temporarily set as the value before the system reads through all records`
## Propagate
**propagate** propagateColumn (',' propagateColumn)*
`Use propagate to update foreign keys with the same value as the primary key mask and use map to update similar values in another database.`
## PropagateColumn
**propagateColumn** [tableid].[columnid]
## Source
**source** 
## SourceColumn
**column** [columnid] (convert)?
## SourceFile
**file** [filename] [**random-order**]? (convert)?;
## SourceSequence
**sequence** [from] [to] - Inclusive integer range
## SourceRandom
**sourceRandom** 
## RandomInteger
**randomInteger** [from] [to] - Inclusive integer range
## RandomDecimal
**randomDecimal** [from] [to] - Inclusive decimal range
## RandomTime
**randomTime** [from] [to] - Inclusive time range
## RandomDate
**randomDate** [from] [to] - Inclusive date range
## Randomdatetime
**randomdatetime** [from] [to] - Inclusive datetime range
## Datetime
**datetime** [date] [time]?
## Randomize
**randomize** [columnid] [taskid]? **type** [randomType] (format)? (convert)?(transform)? (uniqueMask)? (offset)? (flatNoise)? (percentageNoise)?
## RandomType
 One of types: decimal, date, datetime, time, integer
## Offset
**offset** [decimal] - Noise offset value 
## FlatNoise
**flat-noise** [decimal] - Noise amplitude 
## PercentageNoise
**percentage-noise** [decimal] - Noise as percentage of original value
## Shuffle
**shuffle** [columnid] [taskid]? - Simple permutations anonymization shuffling values around 
## Map
**map** [filename] [mapUsage] [**encrypted**]? - Noise amplitude 
## MapUsage
One of: [input], [output] or [input-output]
## Input
`The map input function use a mapping file, which is produced by map output.The file contains key/value pairs (Key=Value) to update and replace columns by using the mapped value for corresponding key.`
**input**
## Output
`The map output function produces a mapping file containing key/value pairs (Key=Value) from the anonymization rule.`
**output**
## InputOutput
`The map input-output function uses the mapping file and produces the mapping file with key/value pairs (Key=Value), if there a new or missing values in the map file.`
**input-output**
## Textin
Formated string, variables denoted with %d %f %s %tF %tT or with numbered versions %1d %2s etc  



