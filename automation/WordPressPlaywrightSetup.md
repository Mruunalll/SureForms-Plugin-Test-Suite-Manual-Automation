# WordPress Playwright Automation Setup Notes

Last updated: 2026-04-29

## Summary

Playwright is the current recommended direction for browser-based E2E testing in the WordPress ecosystem. WordPress Core has moved browser-based tests to Playwright, and WordPress provides helper packages for admin, editor, page, and REST API testing.

For this SureForms QA project, the current setup uses plain `@playwright/test` against an existing LocalWP site:

```text
BASE_URL=http://surefroms.test
FORM_PATH=/qa-test-form/
```

That approach is correct for a QA portfolio project testing an installed plugin on a local site. WordPress-specific Playwright helpers can be added later for admin, block editor, REST API, and plugin setup automation.

## Official WordPress Playwright Options

| Tool | Use Case | Fit For This Repo |
|---|---|---|
| `@playwright/test` | General E2E browser testing | Already implemented |
| `@wordpress/e2e-test-utils-playwright` | WordPress admin, editor, page utilities, REST helpers | Recommended next step for admin automation |
| `@wordpress/scripts` | Standard WordPress script runner including `test-playwright` | Optional if this repo becomes a plugin-style package |
| `@wordpress/env` / `wp-env` | Docker-based WordPress environment for plugin/theme testing | Optional alternative to LocalWP |

## Recommended Direction For This Repo

Keep the current Playwright setup.

Add WordPress utilities only when we start automating wp-admin flows:

- Login/admin navigation.
- SureForms plugin activation checks.
- Form creation from wp-admin.
- Page creation and embedding.
- Gutenberg/block editor checks.
- REST API and entries checks.

Do not replace the current setup yet. The current blocker is not the test framework. The blocker is that `/qa-test-form/` does not exist.

## Option A: Current LocalWP Setup

This is the setup currently used by the project.

```bash
cd automation
npm install
npx playwright install
../.tools/bin/npm run test:smoke
../.tools/bin/npm run test:form
```

Best for:

- Testing the real local SureForms installation.
- Portfolio QA demonstration.
- Frontend form submission and validation tests.
- Dockerized Playwright execution against LocalWP.

Current blocker:

```text
http://surefroms.test/qa-test-form/ returns HTTP 404
```

## Option B: Add WordPress Playwright Utilities

Install later when admin/editor automation begins:

```bash
cd automation
npm install -D @wordpress/e2e-test-utils-playwright
```

Example usage:

```javascript
const { test, expect, Admin } = require('@wordpress/e2e-test-utils-playwright');

test('opens a WordPress admin page', async ({ page, pageUtils }) => {
  const admin = new Admin({ page, pageUtils });

  await admin.visitAdminPage('plugins.php');
  await expect(page.getByRole('heading', { name: /plugins/i })).toBeVisible();
});
```

Use this when adding:

- Admin menu checks.
- Plugin active state checks.
- SureForms admin page checks.
- Block editor/page creation checks.
- REST API setup/cleanup helpers.

## Option C: Use `@wordpress/scripts`

If the repo is converted into a WordPress plugin-style package, `@wordpress/scripts` can run Playwright through WordPress conventions:

```bash
npm install -D @wordpress/scripts @wordpress/e2e-test-utils-playwright
```

Example scripts:

```json
{
  "scripts": {
    "test:playwright": "wp-scripts test-playwright",
    "test:playwright:debug": "wp-scripts test-playwright --debug"
  }
}
```

This is optional for this repo because the current QA suite already has a working `playwright.config.js`, custom scripts, Docker support, reports, page objects, and test data.

## Option D: Use `wp-env`

`wp-env` can create a clean Docker-based WordPress instance for plugin/theme testing.

Example:

```bash
npm install -D @wordpress/env
npm run wp-env start
```

This is useful when the project owns the plugin code and needs repeatable CI setup. For this repo, LocalWP is currently the source of truth because SureForms and SureForms Business are already installed and activated locally.

## Recommended Next Automation Execution Step

Before adding WordPress utilities, unblock the current form tests:

1. Create a SureForms form named `QA Test Form`.
2. Add Name, Email, Phone, Message fields.
3. Mark Name, Email, Message as required.
4. Publish `/qa-test-form/`.
5. Embed the form.
6. Run:

```bash
cd automation
../.tools/bin/npm run test:form
```

After that passes, add WordPress admin automation with `@wordpress/e2e-test-utils-playwright`.

## Source Notes

- WordPress Core uses Playwright for browser-based tests.
- `@wordpress/e2e-test-utils-playwright` provides WordPress-specific Playwright fixtures/utilities.
- `@wordpress/scripts` includes `test-playwright`.
- `wp-env` provides a Docker-based WordPress environment for plugin/theme development and testing.
