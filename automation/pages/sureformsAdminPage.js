const { expect } = require('@playwright/test');
const { getTestConfig } = require('../utils/env');

class SureFormsAdminPage {
  constructor(page) {
    this.page = page;
    this.config = getTestConfig();

    this.usernameInput = page.locator('#user_login');
    this.passwordInput = page.locator('#user_pass');
    this.loginButton = page.locator('#wp-submit');
    this.createNewFormButton = page.getByRole('button', { name: /create new form/i });
    this.promptTextarea = page.getByLabel(/describe the form/i);
    this.generateButton = page.getByRole('button', { name: /^generate$/i });
    this.publishButton = page.getByRole('button', { name: /^publish$/i });
  }

  async loginToWordPress() {
    await this.page.goto(this.config.wpAdminPath);

    if (await this.usernameInput.isVisible().catch(() => false)) {
      await this.usernameInput.fill(this.config.wpUsername);
      await this.passwordInput.fill(this.config.wpPassword);
      await this.loginButton.click();
    }

    await expect(this.page.locator('#wpadminbar')).toBeVisible({ timeout: 30000 });
  }

  async openSureFormsDashboard() {
    await this.page.goto('/wp-admin/admin.php?page=sureforms_menu');
    await expect(this.createNewFormButton).toBeVisible({ timeout: 30000 });
  }

  async openCreateNewForm() {
    await this.createNewFormButton.click();
    await expect(this.promptTextarea).toBeVisible({ timeout: 30000 });
  }

  async generateContactForm(prompt, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      await this.promptTextarea.fill(prompt);
      await this.generateButton.click();

      const result = await Promise.race([
        this.publishButton.waitFor({ state: 'visible', timeout: 90000 }).then(() => 'editor'),
        this.page
          .getByText(/unable to create form/i)
          .waitFor({ state: 'visible', timeout: 90000 })
          .then(() => 'error')
      ]);

      if (result === 'editor') {
        return;
      }

      if (attempt === maxAttempts) {
        throw new Error('SureForms AI form generation failed after retry attempts.');
      }

      await this.page.getByRole('button', { name: /try again/i }).click();
      await expect(this.promptTextarea).toBeVisible({ timeout: 30000 });
    }
  }

  async expectGeneratedEditorVisible(formName) {
    await expect(this.page.getByRole('button', { name: /^publish$/i })).toBeVisible({ timeout: 30000 });
    await expect(this.page.locator(`input[value="${formName}"]`)).toBeVisible();
  }

  async enableInstantForm() {
    await this.page.getByRole('button', { name: /instant form/i }).click();
    await this.page.getByText(/enable instant form/i).click();
  }

  async publishForm() {
    await this.publishButton.click();
    await this.publishButton.last().click();
    await expect(this.page.getByText(/form published/i).first()).toBeVisible({ timeout: 30000 });
  }

  async getPublishedFormUrl() {
    const viewFormLink = this.page.getByRole('link', { name: /view form/i }).last();
    await expect(viewFormLink).toBeVisible({ timeout: 30000 });

    return viewFormLink.getAttribute('href');
  }
}

module.exports = { SureFormsAdminPage };
