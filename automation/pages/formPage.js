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

    this.form = page.locator('form, [role="form"], .sureforms-form, .srfm-form').first();
    this.nameInput = page.getByLabel(/name/i);
    this.emailInput = page.getByLabel(/email/i);
    this.phoneInput = page.getByLabel(/phone/i);
    this.messageInput = page.getByLabel(/message/i);
    this.submitButton = page.getByRole('button', { name: /submit/i });

    this.formErrorSummary = page
      .locator(
        [
          '[role="alert"]',
          '[aria-live="assertive"]',
          '[aria-live="polite"]',
          '.sureforms-error-message',
          '.srfm-error-message',
          '.sureforms-error',
          '.srfm-error',
          '.error-message',
          '.form-error'
        ].join(', ')
      )
      .filter({ hasText: /required|invalid|valid email|enter|error|failed/i });
    this.validationMessages = page.locator(
      [
        '[role="alert"]',
        '[aria-live="assertive"]',
        '[aria-live="polite"]',
        '.sureforms-error-message',
        '.srfm-error-message',
        '.sureforms-error',
        '.srfm-error',
        '.error-message',
        '.form-error',
        '.components-notice',
        '.notice'
      ].join(', ')
    );
    this.successMessage = page.locator('text=/success|submitted|thank you/i');
    this.thankYouMessage = page.getByText(/thank you/i);
    this.requiredValidationMessage = this.validationMessages.filter({
      hasText: /required|required field|field is required|please fill|enter/i
    });
    this.invalidEmailValidationMessage = this.validationMessages.filter({
      hasText: /valid email|invalid email|email address/i
    });
    this.validationMessage = this.validationMessages.filter({
      hasText: /required|invalid|valid email|enter|email address/i
    });
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

  async expectRequiredFieldsVisible() {
    await expect(this.nameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.messageInput).toBeVisible();
  }

  async expectSubmitButtonEnabled() {
    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton).toBeEnabled();
  }

  async expectSubmitButtonNotDisabled() {
    await expect(this.submitButton).not.toBeDisabled();
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

  async submitWithMissingRequiredField(fieldName) {
    const data = {
      ...validSubmission,
      [fieldName]: ''
    };

    await this.fillForm(data);
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

  async expectRequiredValidationFor(fieldName) {
    const fieldInput = this.getRequiredFieldInput(fieldName);
    const fieldError = await this.getFieldValidationMessage(fieldInput);

    if (fieldError) {
      await expect(fieldError).toBeVisible();
      await expect(fieldError).toContainText(/required|required field|field is required|please fill|enter/i);
      return;
    }

    await this.expectRequiredValidationMessage();
  }

  async expectInvalidEmailValidationMessage() {
    await expect(this.invalidEmailValidationMessage.first()).toBeVisible();
  }

  async expectSingleThankYouMessage() {
    await expect(this.thankYouMessage).toHaveCount(1);
    await expect(this.thankYouMessage.first()).toBeVisible();
  }

  getRequiredFieldInput(fieldName) {
    const normalizedFieldName = fieldName.toLowerCase();

    if (normalizedFieldName === 'name') {
      return this.nameInput;
    }

    if (normalizedFieldName === 'email') {
      return this.emailInput;
    }

    if (normalizedFieldName === 'message') {
      return this.messageInput;
    }

    throw new Error(`Unsupported required field: ${fieldName}`);
  }

  async getFieldValidationMessage(fieldInput) {
    const describedBy = await fieldInput.getAttribute('aria-describedby');

    if (describedBy) {
      const firstId = describedBy.split(/\s+/).find(Boolean);

      if (firstId) {
        const describedByMessage = this.page.locator(`#${firstId}`);

        if (await describedByMessage.count()) {
          return describedByMessage;
        }
      }
    }

    const invalidValue = await fieldInput.getAttribute('aria-invalid');

    if (invalidValue === 'true') {
      return fieldInput
        .locator(
          'xpath=ancestor::*[self::label or contains(@class, "field") or contains(@class, "srfm") or contains(@class, "sureforms")][1]'
        )
        .locator(
          [
            '[role="alert"]',
            '[aria-live]',
            '.sureforms-error-message',
            '.srfm-error-message',
            '.sureforms-error',
            '.srfm-error',
            '.error-message',
            '.form-error'
          ].join(', ')
        )
        .first();
    }

    return null;
  }
}

module.exports = { FormPage };
