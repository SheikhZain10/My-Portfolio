const { spawn } = require('child_process');
const path = require('path');

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url, { method: 'GET' });
      if (res.ok) return true;
    } catch (e) {}
    await new Promise(r => setTimeout(r, 500));
  }
  throw new Error('Server did not become ready in time');
}

async function run() {
  const puppeteer = await import('puppeteer');
  const PORT = process.env.PORT || '3010';

  const server = spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['next', 'start', '-p', PORT], {
    stdio: 'inherit',
    shell: false,
  });

  try {
    await waitForServer(`http://localhost:${PORT}/resume`, 45000);

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}/resume`, { waitUntil: 'networkidle0' });

    const outputPath = path.join(process.cwd(), 'public', 'Zain_Resume.pdf');
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' },
    });

    await browser.close();
    console.log('Resume exported to:', outputPath);
  } catch (err) {
    console.error('Failed to export resume:', err);
    process.exitCode = 1;
  } finally {
    server.kill('SIGTERM');
  }
}

run();
