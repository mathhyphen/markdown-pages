/**
 * Deploy script: Convert Markdown to HTML and deploy to Cloudflare Pages
 *
 * Usage: node deploy.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const docsDir = 'docs';
const distDir = 'dist';
const templateFile = 'template.html';

console.log('🚀 Markdown Pages Deploy\n');

// Read template
const template = fs.readFileSync(templateFile, 'utf-8');

// Create dist directory
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Clear dist directory
fs.readdirSync(distDir).forEach(f => fs.unlinkSync(path.join(distDir, f)));

// Get all md files
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
console.log(`Found ${files.length} markdown file(s)\n`);

// Convert each file
files.forEach(file => {
  const inputPath = path.join(docsDir, file);
  const outputFile = file.replace('.md', '.html');
  const outputPath = path.join(distDir, outputFile);

  try {
    // Read markdown content
    const mdContent = fs.readFileSync(inputPath, 'utf-8');

    // Convert to HTML using marked
    const htmlContent = execSync('npx marked', { input: mdContent, encoding: 'utf-8' });

    // Extract title from first h1
    const titleMatch = mdContent.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : outputFile.replace('.html', '');

    // Wrap with template
    const fullHtml = template
      .replace('{{title}}', title)
      .replace('{{content}}', htmlContent);

    // Write output
    fs.writeFileSync(outputPath, fullHtml);
    console.log(`✓ ${file} → ${outputFile}`);
  } catch (e) {
    console.error(`✗ Error converting ${file}: ${e.message}`);
  }
});

// Create index page listing all docs
const indexContent = template
  .replace('{{title}}', '文档首页')
  .replace('{{content}}',
    '<h1>文档列表</h1>\n' +
    files.map(f => {
      const name = f.replace('.md', '');
      const title = fs.readFileSync(path.join(docsDir, f), 'utf-8').match(/^#\s+(.+)$/m)?.[1] || name;
      return `<li><a href="${name}.html">${title}</a></li>`;
    }).join('\n')
  );

fs.writeFileSync(path.join(distDir, 'index.html'), indexContent);
console.log(`✓ index.html\n`);

// Deploy
console.log('📤 Deploying to Cloudflare Pages...');
try {
  execSync('wrangler pages deploy dist/ --project-name=markdown-pages', { stdio: 'inherit' });
  console.log('\n✨ Done! Visit https://weekly.hyphen123.xyz/');
} catch (e) {
  console.error('\n✗ Deploy failed');
}
