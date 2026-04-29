const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testIgnore: process.env.INTERACTIVE_DEMO ? [] : ['**/interactive-summary.spec.js'],
  timeout: 30000,
  retries: 0,
  reporter: [['list'], ['html']],
  use: {
    baseURL: process.env.BASE_URL || 'http://surefroms.test',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
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
