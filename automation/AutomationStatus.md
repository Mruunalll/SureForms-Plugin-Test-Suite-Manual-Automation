# Playwright Automation Status

Last checked: 2026-04-29

## Current Result

```text
Total tests: 10
Passed: 0
Failed: 10
Projects: chromium, mobile-chrome
```

## Why Tests Are Failing

The Playwright framework is installed and Chromium launches successfully when run outside the sandbox, but the configured frontend form page does not exist yet:

```text
FORM_PATH=/qa-test-form/
```

The captured Playwright page snapshot shows a WordPress `Page not found` page instead of the expected SureForms form. Because of that, these locators cannot find elements:

- `getByLabel(/name/i)`
- `getByLabel(/email/i)`
- `getByLabel(/message/i)`
- `getByRole('button', { name: /submit/i })`

## Tests Currently Implemented

The suite currently has 5 tests, executed across 2 projects, for 10 total checks:

- Form fields and submit button visibility
- Valid form submission
- Empty form validation
- Invalid email validation
- Submit button visibility/enabled state

## Next Required Step

Create and publish the frontend WordPress page:

```text
QA Test Form
/qa-test-form/
```

The page should contain a SureForms form with:

- Name
- Email
- Phone
- Message
- Submit button

After the page exists, rerun:

```bash
cd automation
../.tools/bin/npm test
```

If the page exists but selectors still fail, inspect the generated SureForms HTML and update `pages/formPage.js` with the actual field selectors.
