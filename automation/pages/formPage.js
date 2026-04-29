const { expect } = require('@playwright/test');
const { invalidEmailSubmission, validSubmission } = require('../fixtures/testData');
const { getTestConfig } = require('../utils/env');

class FormPage {
  constructor(page) {
    this.page = page;
    this.formPath = getTestConfig().formPath;

    this.nameInput = page.getByLabel(/name/i);
    this.emailInput = page.getByLabel(/email/i);
    this.phoneInput = page.getByLabel(/phone/i);
    this.messageInput = page.getByLabel(/message/i);
    this.submitButton = page.getByRole('button', { name: /submit/i });

    this.successMessage = page.locator('text=/success|submitted|thank you/i');
    this.validationMessage = page.locator('text=/required|invalid|valid email|enter/i');
  }

  async open() {
    await this.page.goto(this.formPath);
  }

  async openUrl(url) {
    await this.page.goto(url);
  }

  async expectFormVisible() {
    await expect(this.nameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.messageInput).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }

  async submitValidForm(data = validSubmission) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);

    if (await this.phoneInput.count()) {
      await this.phoneInput.fill(data.phone);
    }

    await this.messageInput.fill(data.message);
    await this.submitButton.click();
  }

  async submitEmptyForm() {
    await this.submitButton.click();
  }

  async submitInvalidEmailForm(data = invalidEmailSubmission) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.messageInput.fill(data.message);
    await this.submitButton.click();
  }

  async expectSuccessMessage() {
    await expect(this.successMessage.first()).toBeVisible();
  }

  async expectThankYouMessage(message) {
    await expect(async () => {
      const visibleText = await this.page.locator('body').innerText();
      const normalizedVisibleText = visibleText.replace(/\s+/g, ' ').trim();
      const normalizedMessage = message.replace(/\s+/g, ' ').trim();

      expect(normalizedVisibleText).toContain(normalizedMessage);
    }).toPass({ timeout: 30000 });
  }

  async expectValidationMessage() {
    await expect(this.validationMessage.first()).toBeVisible();
  }
}

module.exports = { FormPage };
