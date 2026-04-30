const { test, expect } = require('@playwright/test');
const { getTestConfig } = require('../utils/env');

test.describe('Local WordPress smoke checks', () => {
  test('automation environment should be configured', async () => {
    const testConfig = getTestConfig();

    expect(testConfig.baseURL).toMatch(/^https?:\/\//);
    expect(testConfig.formPath).toMatch(/^\//);
  });

  test('homepage should load successfully', async ({ page }) => {
    test.skip(
      process.env.CI && !process.env.BASE_URL,
      'Hosted CI cannot reach the LocalWP site unless BASE_URL points to a CI-accessible WordPress target.'
    );

    const response = await page.goto('/');

    expect(response.status()).toBeLessThan(400);
    await expect(page.getByRole('link', { name: /sureforms/i }).first()).toBeVisible();
  });
});
