# Automation Status

Last updated: 2026-04-30

## Executive Summary

The automation project is structurally ready, but execution evidence is still limited.

| Area | Current Evidence | Status |
|---|---:|---|
| Playwright setup | Ready | Config, scripts, reports, fixtures, page objects, and env loader exist |
| Docker setup | Ready | Dockerfile and Compose runner are configured |
| CI validation | Added | GitHub Actions validates install, JS syntax, and Playwright availability |
| Passing local checks | 3 | 2 smoke checks + 1 generated SureForms E2E |
| Static form checks | 0/16 passing | Blocked by missing `/qa-test-form/` WordPress page |
| Business automation | 0 checks | Planned only |
| Backend/email checks | 0 checks | Planned only |

## Latest Verified Local Results

```text
Command: ../.tools/bin/npm run test:smoke
Result: 2 passed
Project: chromium
Last checked: 2026-04-29
```

```text
Command: ../.tools/bin/npm run test:create-form
Result: 1 passed
Coverage: login, SureForms dashboard, AI form generation, editor verification, Instant Form, publish, frontend view, field fill, submit, thank-you message
Last checked: 2026-04-29
```

```text
Command: ../.tools/bin/npm run docker:smoke
Result: 2 passed
Last checked: 2026-04-29
```

## Current Blocker

The static form suite is blocked because `/qa-test-form/` is not published in WordPress yet.

```text
Command: ../.tools/bin/npm run test:form
Total checks: 16
Passed: 0
Failed/blocked: 16
Root cause: configured BASE_URL + /qa-test-form/ returns a WordPress 404
```

The tests cannot find these expected SureForms controls because the page renders a WordPress 404 instead of the form:

- Name field
- Email field
- Message field
- Submit button

## Implemented Automation

| File | Purpose | Current State |
|---|---|---|
| `tests/smoke.spec.js` | Environment and homepage smoke checks | Passing locally |
| `tests/createFormE2E.spec.js` | Admin-to-frontend generated form flow | Passing locally |
| `tests/form.spec.js` | Static `/qa-test-form/` frontend form suite with happy path, validation, boundary, special-character, and double-submit checks | Blocked by missing page |
| `tests/interactive-summary.spec.js` | Headed Chromium demo with custom result tab | Available |
| `pages/formPage.js` | Frontend form page object | Started |
| `pages/sureformsAdminPage.js` | WordPress/SureForms admin page object | Started |
| `fixtures/testData.js` | Reusable form data | Available |
| `utils/env.js` | Environment variable loader | Available |

## Commands

Local automation:

```bash
cd automation
npm run ci:validate
npm run test:smoke
npm run test:create-form
npm run test:form
npm run test:interactive
```

Docker automation:

```bash
cd automation
npm run docker:build
npm run docker:doctor
npm run docker:smoke
npm run docker:test
```

Fallback on this machine when global `npm` is unavailable:

```bash
cd automation
../.tools/bin/npm run ci:validate
../.tools/bin/npm run test:smoke
../.tools/bin/npm run test:create-form
../.tools/bin/npm run docker:smoke
```

## Environment

The target WordPress host is environment-specific and should be configured through `.env`:

```bash
cp .env.example .env
```

```text
BASE_URL=http://<your-localwp-site>.test
FORM_PATH=/qa-test-form/
WP_ADMIN_PATH=/wp-admin/
```

If the LocalWP site was created with a misspelled host, keep that value in `.env`; do not hard-code it in public docs.

## Next Automation Work

| Priority | Work Item | Result Needed |
|---|---|---|
| P0 | Create SureForms `QA Test Form` | Form exists in WordPress admin |
| P0 | Publish `/qa-test-form/` | Target URL returns 200 and renders the form |
| P0 | Confirm actual SureForms selectors | Page object uses real rendered markup |
| P1 | Execute empty-submit assertion | Specific required-field text is checked against the real form |
| P1 | Execute invalid-email assertion | Specific email validation text is checked against the real form |
| P1 | Execute long-input boundary test | Field behavior is verified against the real form |
| P1 | Execute special-character test | Form does not crash or corrupt input |
| P1 | Execute double-submit test | Only one thank-you state is accepted |
| P2 | Add Business smoke automation | Business coverage moves beyond planning |
| P2 | Add backend entries/email checks | Submission proof extends beyond UI |

## CI Strategy

The GitHub Actions workflow currently runs `npm run ci:validate`, which can pass on hosted GitHub runners because it does not depend on a private LocalWP site.

LocalWP browser tests should not be added to hosted CI until one of these exists:

- A self-hosted runner on the machine with LocalWP.
- A `wp-env` setup that installs WordPress, SureForms, and test data inside CI.
- A public/staging WordPress target dedicated to QA automation.
