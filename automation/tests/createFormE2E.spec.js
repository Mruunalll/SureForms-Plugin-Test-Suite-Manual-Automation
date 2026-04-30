const { expect, test } = require('@playwright/test');
const { SureFormsAdminPage } = require('../pages/sureformsAdminPage');
const { FormPage } = require('../pages/formPage');

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

test.describe('SureForms admin generated contact form flow', () => {
  test('should generate, publish, view, submit, and verify thank-you message', async ({ page }) => {
    test.setTimeout(180000);

    const timestamp = Date.now();
    const formName = `QA Contact Form ${timestamp}`;
    const thankYouMessage =
      "Thank you Your form has been submitted successfully. We'll review your details and get back to you soon.";
    const prompt =
      `Create a contact form named ${formName} with Name, Email, Phone, and Message fields. ` +
      `Make Name, Email, and Message required. ` +
      `After successful submission, display exactly this thank-you message: ${thankYouMessage}`;

    const sureFormsAdminPage = new SureFormsAdminPage(page);
    const formPage = new FormPage(page);

    await sureFormsAdminPage.loginToWordPress();
    await sureFormsAdminPage.openSureFormsDashboard();
    await sureFormsAdminPage.openCreateNewForm();
    await sureFormsAdminPage.generateContactForm(prompt);
    await sureFormsAdminPage.expectGeneratedEditorVisible(formName);
    await sureFormsAdminPage.enableInstantForm();
    await sureFormsAdminPage.publishForm();

    const publishedFormUrl = await sureFormsAdminPage.getPublishedFormUrl();
    expect(publishedFormUrl).toMatch(/\/form\/[^/?#]+\/?$/i);

    await formPage.openUrl(publishedFormUrl);
    await expect(page).toHaveURL(/\/form\/[^/?#]+\/?$/i);
    await expect(page).toHaveTitle(new RegExp(`${escapeRegExp(formName)}|QA Contact Form`, 'i'));
    await formPage.expectFormVisible();
    await formPage.expectRequiredFieldsVisible();
    await formPage.submitValidForm({
      name: 'Mrunal QA',
      email: 'mrunal.qa@example.com',
      phone: '4155552671',
      message: 'This is a Playwright E2E submission for the generated SureForms contact form.'
    });
    await formPage.expectThankYouMessage(thankYouMessage);
  });
});
