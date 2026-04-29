const { test, expect } = require('@playwright/test');

test.describe('Local WordPress smoke checks', () => {
  test('homepage should load successfully', async ({ page }) => {
    const response = await page.goto('/');

    expect(response.status()).toBeLessThan(400);
    await expect(page.getByRole('link', { name: /sureforms/i }).first()).toBeVisible();
  });
});

