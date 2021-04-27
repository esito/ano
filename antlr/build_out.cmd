copy "./index.ts" "./out/parser" /Y
copy "./package.json" "./out/parser" /Y
call npm run compile
robocopy ".\out\parser" "..\vscode\src\parser" *.ts /MIR
call echo %CD%