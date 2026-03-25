#!/bin/bash
# Convert markdown files to HTML and deploy

cd "$(dirname "$0")"

# Create output directory
mkdir -p dist

# Convert each md file to html
for f in docs/*.md; do
    if [ -f "$f" ]; then
        filename=$(basename "$f" .md)
        marked "$f" > "dist/${filename}.html"
        echo "Converted: $f -> dist/${filename}.html"
    fi
done

echo "Done! Run: wrangler pages deploy dist/ --project-name=markdown-pages"
