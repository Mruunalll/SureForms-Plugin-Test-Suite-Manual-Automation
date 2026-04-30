const fs = require('fs');
const path = require('path');

function loadEnvFile(envPath = path.resolve(__dirname, '..', '.env')) {
  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) {
      continue;
    }

    const index = trimmed.indexOf('=');
    const key = trimmed.slice(0, index).trim();
    const rawValue = trimmed.slice(index + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, '');

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function getBooleanEnv(name, defaultValue) {
  const value = process.env[name];

  if (value === undefined) {
    return defaultValue;
  }

  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase());
}

function getNumberEnv(name, defaultValue) {
  const value = Number(process.env[name]);
  return Number.isFinite(value) ? value : defaultValue;
}

function getTestConfig() {
  return {
    baseURL: process.env.BASE_URL || 'http://sureforms.test',
    formPath: process.env.FORM_PATH || '/qa-test-form/',
    wpAdminPath: process.env.WP_ADMIN_PATH || '/wp-admin/',
    wpUsername: process.env.WP_USERNAME || 'mrunalp',
    wpPassword: process.env.WP_PASSWORD || 'mrunalp',
    headless: getBooleanEnv('HEADLESS', true),
    retries: getNumberEnv('PW_RETRIES', process.env.CI ? 1 : 0),
    workers: getNumberEnv('PW_WORKERS', 1),
    trace: process.env.PW_TRACE || 'on-first-retry',
    video: process.env.PW_VIDEO || 'retain-on-failure',
    screenshot: process.env.PW_SCREENSHOT || 'only-on-failure'
  };
}

module.exports = {
  getBooleanEnv,
  getNumberEnv,
  getTestConfig,
  loadEnvFile
};
