@echo off
REM Convert markdown files to HTML and deploy

cd /d "%~dp0"

REM Create output directory
if not exist dist mkdir dist

REM Convert each md file to html
for %%f in (docs\*.md) do (
    call npx marked "%%f" > "dist\%%~nf.html"
    echo Converted: %%f -^> dist\%%~nf.html
)

echo.
echo Done! Run: wrangler pages deploy dist/ --project-name=markdown-pages
