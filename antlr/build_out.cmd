copy "./index.ts" "./out/parser" /Y
copy "./package_out.json" "./out/parser" /Y
cd out/parser 
del "package.json"
ren "package_out.json" "package.json"
cd ..
cd ..
call npm run compile
robocopy ".\out\parser" "..\vscode\src\parser" *.ts /MIR
call echo %CD%