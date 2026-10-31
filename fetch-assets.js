const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://mannatthemes.com/selfown/default/';

function downloadFile(relPath) {
  return new Promise((resolve, reject) => {
    // clean up query strings like ?#iefix
    const cleanRelPath = relPath.split('?')[0].split('#')[0].replace(/^\.\.\//, '').replace(/^\.\//, '');
    const url = BASE_URL + cleanRelPath;
    const destPath = path.join(__dirname, 'public', cleanRelPath);

    fs.mkdirSync(path.dirname(destPath), { recursive: true });

    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
      // already downloaded
      return resolve(destPath);
    }

    const file = fs.createWriteStream(destPath);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // redirect
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, BASE_URL).href;
        }
        https.get(redirectUrl, (rRes) => {
          rRes.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${cleanRelPath} (${rRes.statusCode})`);
            resolve(destPath);
          });
        }).on('error', err => {
          fs.unlinkSync(destPath);
          reject(err);
        });
        return;
      }

      if (res.statusCode !== 200) {
        console.warn(`Failed ${res.statusCode} for ${url}`);
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return resolve(null);
      }

      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${cleanRelPath}`);
        resolve(destPath);
      });
    }).on('error', (err) => {
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      console.error(`Error downloading ${url}:`, err.message);
      resolve(null);
    });
  });
}

async function run() {
  console.log('Fetching index.html...');
  const htmlContent = await new Promise((resolve) => {
    https.get(BASE_URL + 'index.html', (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    });
  });

  fs.writeFileSync(path.join(__dirname, 'public', 'original-index.html'), htmlContent);
  console.log('Saved original-index.html');

  // Find all assets in HTML
  const assetRegex = /(?:src|href|background|background-image|url)\s*=\s*["']([^"']+\.(?:png|jpg|jpeg|svg|ico|gif|css|js|webp))["']/gi;
  const matches = new Set();
  let m;
  while ((m = assetRegex.exec(htmlContent)) !== null) {
    const val = m[1].trim();
    if (!val.startsWith('http') && !val.startsWith('//') && !val.startsWith('#') && !val.startsWith('javascript:')) {
      matches.add(val);
    }
  }

  // Also style inline url(...)
  const inlineUrlRegex = /url\(['"]?([^'"\)]+\.(?:png|jpg|jpeg|svg|ico|gif|css|js|webp))['"]?\)/gi;
  while ((m = inlineUrlRegex.exec(htmlContent)) !== null) {
    const val = m[1].trim();
    if (!val.startsWith('http') && !val.startsWith('//')) {
      matches.add(val);
    }
  }

  // Color schemes
  const colorThemes = ['default', 'info', 'warning', 'orange', 'purple', 'success'];
  for (const c of colorThemes) {
    matches.add(`css/colors/${c}.css`);
  }

  // Common font files
  const fonts = [
    'fonts/la-brands-400.woff2',
    'fonts/la-brands-400.woff',
    'fonts/la-brands-400.ttf',
    'fonts/la-brands-400.eot',
    'fonts/la-regular-400.woff2',
    'fonts/la-regular-400.woff',
    'fonts/la-regular-400.ttf',
    'fonts/la-regular-400.eot',
    'fonts/la-solid-900.woff2',
    'fonts/la-solid-900.woff',
    'fonts/la-solid-900.ttf',
    'fonts/la-solid-900.eot',
    'fonts/tabler-icons.woff2',
    'fonts/tabler-icons.woff',
    'fonts/tabler-icons.ttf',
    'fonts/tabler-icons.eot'
  ];
  for (const f of fonts) {
    matches.add(f);
  }

  // Check all original-*.html files for any missing assets
  const htmlFiles = fs.readdirSync(path.join(__dirname, 'public')).filter(f => f.startsWith('original-') && f.endsWith('.html'));
  for (const hf of htmlFiles) {
    const content = fs.readFileSync(path.join(__dirname, 'public', hf), 'utf8');
    while ((m = assetRegex.exec(content)) !== null) {
      const val = m[1].trim();
      if (!val.startsWith('http') && !val.startsWith('//') && !val.startsWith('#') && !val.startsWith('javascript:')) {
        matches.add(val);
      }
    }
  }

  console.log(`Found ${matches.size} total assets to download:`);
  for (const asset of matches) {
    await downloadFile(asset);
  }

  console.log('All downloads completed!');
}

run().catch(console.error);
