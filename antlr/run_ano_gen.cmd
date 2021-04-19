SET OUTDIR=.\src\gen_java
SET CLASSPATH=.;%OUTDIR%;\lib\antlr-4.9.1-complete.jar;%CLASSPATH%
md %OUTDIR%
java -Xmx500M org.antlr.v4.Tool -o %OUTDIR% -lib %OUTDIR% Ano.g4
dir /b /s %OUTDIR% | findstr \.java > files.txt
call javac @files.txt
# call java org.antlr.v4.gui.TestRig Ano table -tokens test/eraseme.ano
# call java org.antlr.v4.gui.TestRig Ano table -tree test/eraseme.ano
call npm install
call npm run antlr

