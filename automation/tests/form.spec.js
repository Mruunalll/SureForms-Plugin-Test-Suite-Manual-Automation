const { test, expect } = require('@playwright/test');
const { FormPage } = require('../pages/formPage');

test.describe('SureForms QA Test Form', () => {
  test('should display the form fields and submit button', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.open();
    await formPage.expectFormVisible();
  });

  test('should submit the form with valid data', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.open();
    await formPage.submitValidForm();
    await formPage.expectSuccessMessage();
  });

  test('should show validation errors for empty submission', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.open();
    await formPage.submitEmptyForm();
    await formPage.expectRequiredValidationMessage();
  });

  test('should show validation error for invalid email', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.open();
    await formPage.submitInvalidEmailForm();
    await formPage.expectInvalidEmailValidationMessage();
  });

  test('should handle long boundary input without crashing', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.open();
    await formPage.submitLongInputForm();
    await formPage.expectSuccessMessage();
  });

  test('should submit special characters in name safely', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.open();
    await formPage.submitSpecialCharactersForm();
    await formPage.expectSuccessMessage();
  });

  test('should show a single success state after rapid double submit', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.open();
    await formPage.doubleSubmitValidForm();
    await formPage.expectSingleThankYouMessage();
  });

  test('should display submit button correctly', async ({ page }) => {
    const formPage = new FormPage(page);

    await formPage.open();

    await expect(formPage.submitButton).toBeVisible();
    await expect(formPage.submitButton).toBeEnabled();
  });
});
