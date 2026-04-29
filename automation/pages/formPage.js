const { expect } = require('@playwright/test');

class FormPage {
  constructor(page) {
    this.page = page;
    this.formPath = process.env.FORM_PATH || '/qa-test-form/';

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

  async expectFormVisible() {
    await expect(this.nameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.messageInput).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }

  async submitValidForm() {
    await this.nameInput.fill('Mrunal QA');
    await this.emailInput.fill('test@example.com');

    if (await this.phoneInput.count()) {
      await this.phoneInput.fill('9876543210');
    }

    await this.messageInput.fill('This is a Playwright test submission.');
    await this.submitButton.click();
  }

  async submitEmptyForm() {
    await this.submitButton.click();
  }

  async submitInvalidEmailForm() {
    await this.nameInput.fill('Mrunal QA');
    await this.emailInput.fill('invalid-email');
    await this.messageInput.fill('Testing invalid email validation.');
    await this.submitButton.click();
  }

  async expectSuccessMessage() {
    await expect(this.successMessage.first()).toBeVisible();
  }

  async expectValidationMessage() {
    await expect(this.validationMessage.first()).toBeVisible();
  }
}

module.exports = { FormPage };

