const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const pathsToCheck = [
  'fixtures',
  'pages',
  'tests',
  'utils',
  'playwright.config.js'
];

function collectJavaScriptFiles(targetPath) {
  const absolutePath = path.join(rootDir, targetPath);

  if (!fs.existsSync(absolutePath)) {
    return [];
  }

  const stat = fs.statSync(absolutePath);

  if (stat.isFile()) {
    return absolutePath.endsWith('.js') ? [absolutePath] : [];
  }

  return fs.readdirSync(absolutePath).flatMap((entry) => {
    const childPath = path.join(targetPath, entry);
    const childAbsolutePath = path.join(rootDir, childPath);

    if (fs.statSync(childAbsolutePath).isDirectory()) {
      return collectJavaScriptFiles(childPath);
    }

    return childPath.endsWith('.js') ? [childAbsolutePath] : [];
  });
}

const files = pathsToCheck.flatMap(collectJavaScriptFiles);
let hasFailure = false;

for (const file of files) {
  const result = spawnSync(process.execPath, ['--check', file], {
    encoding: 'utf8'
  });

  if (result.status !== 0) {
    hasFailure = true;
    console.error(result.stderr || result.stdout);
  }
}

if (hasFailure) {
  process.exit(1);
}

console.log(`Validated ${files.length} JavaScript files.`);
