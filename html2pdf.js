const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function htmlToPdf(htmlFile, outputFile) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const htmlPath = path.resolve(htmlFile);
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: outputFile,
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' }
  });

  await browser.close();
  console.log(`✓ Saved: ${outputFile}`);
}

async function main() {
  const distDir = 'dist';

  if (!fs.existsSync(distDir)) {
    console.error('dist directory not found. Run deploy.js first.');
    process.exit(1);
  }

  const files = fs.readdirSync(distDir).filter(f => f.endsWith('.html'));

  for (const file of files) {
    const inputPath = path.join(distDir, file);
    const outputFile = file.replace('.html', '.pdf');
    try {
      await htmlToPdf(inputPath, outputFile);
    } catch (e) {
      console.error(`Error converting ${file}: ${e.message}`);
    }
  }
}

main();
