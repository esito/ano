# ANO - Anonymizer DSL

Monorepo for working with the Ano language and vscode Extension

## Features
The extension will:
* Colorize and 
* Supply text-hovers 
* Syntax completion
* Formating
* Renaming

<br/>
<br/>

## Participating in extension development

### Generating the Antlr4 typescript parser
* To generate the Antlr/Typescript parser you need Java installed on the path
* see the `antlr\run_ano_gen.cmd` file for running the Antlr generator
* when succeeding the generated code will appear in src/parser

### Running the LSP
* `npm run build` to initialize the project