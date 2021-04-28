copy "./index.ts" "./out/parser" /Y
copy "./package_out.json" "./out/parser" /Y
cd out/parser 
ren "package_out.json" "package.json"
cd ../..
call npm run compile
robocopy ".\out\parser" "..\vscode\src\parser" *.ts /MIR
call echo %CD%