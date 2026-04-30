# SureForms Playwright Automation

Playwright automation suite for the local SureForms WordPress QA project.

## Setup

```bash
cd automation
npm install
npx playwright install
```

Create a local environment file when needed:

```bash
cp .env.example .env
```

Default target:

```text
BASE_URL=http://sureforms.test
FORM_PATH=/qa-test-form/
```

If your LocalWP host is different, copy `.env.example` to `.env` and override `BASE_URL`.

## Commands

```bash
npm test
npm run ci:validate
npm run test:smoke
npm run test:form
npm run test:create-form
npm run test:headed
npm run test:mobile
npm run test:interactive
npm run test:debug
npm run report
```

Fallback on this local machine if global `npm` is unavailable:

```bash
../.tools/bin/npm test
../.tools/bin/npm run test:smoke
```

## Docker

From the project root:

```bash
docker compose build playwright
docker compose run --rm playwright
```

From `automation/`:

```bash
npm run docker:build
npm run docker:doctor
npm run docker:smoke
npm run docker:test
```

## Structure

```text
automation/
  fixtures/
    testData.js
  pages/
    formPage.js
    sureformsAdminPage.js
  scripts/
    validate-js.js
  tests/
    createFormE2E.spec.js
    form.spec.js
    interactive-summary.spec.js
    smoke.spec.js
  utils/
    env.js
  .env.example
  AUTOMATION_STATUS.md
  playwright.config.js
  package.json
```

## Reports And Artifacts

Playwright stores:

- HTML report in `playwright-report/`
- Test artifacts in `test-results/`
- JSON report in `test-results/results.json`
- JUnit report in `test-results/junit.xml`
- Screenshots, videos, and traces based on failure/retry settings

## Current Limitation

The Playwright setup is complete. Full form tests require the WordPress page `/qa-test-form/` to exist and contain the expected SureForms fields.

Current execution status, Docker notes, CI strategy, and WordPress-specific next steps are documented in `AUTOMATION_STATUS.md`.
