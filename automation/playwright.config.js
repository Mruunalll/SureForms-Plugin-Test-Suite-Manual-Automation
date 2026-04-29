const { defineConfig, devices } = require('@playwright/test');
const { getTestConfig, loadEnvFile } = require('./utils/env');

loadEnvFile();

const testConfig = getTestConfig();

module.exports = defineConfig({
  testDir: './tests',
  testIgnore: process.env.INTERACTIVE_DEMO ? [] : ['**/interactive-summary.spec.js'],
  outputDir: './test-results/artifacts',
  timeout: 30000,
  expect: {
    timeout: 10000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: testConfig.retries,
  workers: testConfig.workers,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }]
  ],
  use: {
    baseURL: testConfig.baseURL,
    headless: testConfig.headless,
    actionTimeout: 10000,
    navigationTimeout: 30000,
    screenshot: testConfig.screenshot,
    video: testConfig.video,
    trace: testConfig.trace
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] }
    }
  ]
});
