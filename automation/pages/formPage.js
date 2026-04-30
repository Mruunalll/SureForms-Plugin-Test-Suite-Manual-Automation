const { expect } = require('@playwright/test');
const {
  edgeCaseSubmission,
  invalidEmailSubmission,
  longInputSubmission,
  validSubmission
} = require('../fixtures/testData');
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
    this.thankYouMessage = page.getByText(/thank you/i);
    this.requiredValidationMessage = page.locator('text=/required|required field|field is required/i');
    this.invalidEmailValidationMessage = page.locator('text=/valid email|invalid email|email address/i');
    this.validationMessage = page.locator('text=/required|invalid|valid email|enter|email address/i');
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
    await this.fillForm(data);
    await this.submitButton.click();
  }

  async fillForm(data = validSubmission) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);

    if ((await this.phoneInput.count()) && typeof data.phone === 'string') {
      await this.phoneInput.fill(data.phone);
    }

    await this.messageInput.fill(data.message);
  }

  async submitEmptyForm() {
    await this.submitButton.click();
  }

  async submitInvalidEmailForm(data = invalidEmailSubmission) {
    await this.fillForm({
      phone: '',
      ...data
    });
    await this.submitButton.click();
  }

  async submitLongInputForm(data = longInputSubmission) {
    await this.fillForm(data);
    await expect(this.nameInput).toHaveValue(data.name);
    await expect(this.messageInput).toHaveValue(data.message);
    await this.submitButton.click();
  }

  async submitSpecialCharactersForm(data = edgeCaseSubmission) {
    await this.fillForm(data);
    await expect(this.nameInput).toHaveValue(data.name);
    await this.submitButton.click();
  }

  async doubleSubmitValidForm(data = validSubmission) {
    await this.fillForm(data);
    await this.submitButton.dblclick();
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

  async expectRequiredValidationMessage() {
    await expect(this.requiredValidationMessage.first()).toBeVisible();
  }

  async expectInvalidEmailValidationMessage() {
    await expect(this.invalidEmailValidationMessage.first()).toBeVisible();
  }

  async expectSingleThankYouMessage() {
    await expect(this.thankYouMessage).toHaveCount(1);
    await expect(this.thankYouMessage.first()).toBeVisible();
  }
}

module.exports = { FormPage };
