# SureForms Plugin Test Suite (Manual + Automation)

Manual and Playwright automation testing project for the SureForms WordPress plugin on a local WordPress site.

## Local Test Site

- WordPress admin: `http://surefroms.test/wp-admin/`
- Frontend base URL: `http://surefroms.test`
- Automation target form path: update `FORM_PATH` after creating the QA form page.

## Project Structure

```text
manual-testing/
  TestPlan.md
  TestCases.csv
  BugReports.md
  Screenshots/

automation/
  fixtures/
    testData.js
  pages/
    formPage.js
  tests/
    form.spec.js
    interactive-summary.spec.js
    smoke.spec.js
  utils/
    env.js
  .env.example
  AutomationCoverage.md
  AutomationExecutionWorkArea.md
  AutomationStatus.md
  DockerStatus.md
  DockerReadinessChecklist.md
  PlaywrightSetupChecklist.md
  README.md
  Dockerfile
  playwright.config.js
  package.json
```

## Tooling

- WordPress local site
- SureForms plugin
- Node.js
- npm
- Playwright
- Docker Desktop
- JavaScript
- Git

## Automation Setup

From the project root:

```bash
cd automation
npm install
npx playwright install
```

Optional local environment file:

```bash
cp .env.example .env
```

In this workspace, global `npm` is not currently available, so a local npm bootstrap has been added under `.tools/npm`.

Use this fallback command if `npm` is still unavailable:

```bash
../.tools/bin/npm install
```

## Run Tests

From `automation/`:

```bash
npm test
npm run test:smoke
npm run test:form
npm run test:headed
npm run test:mobile
npm run test:interactive
npm run test:ui
npm run report
```

Fallback without global npm:

```bash
../.tools/bin/npm test
../.tools/bin/npm run test:smoke
../.tools/bin/npm run test:interactive
```

The interactive headed demo opens Chromium visibly, runs a simple WordPress smoke scenario, opens a new results tab, and keeps the browser open for observation. To change the observation time:

```bash
INTERACTIVE_DEMO=true OBSERVE_MS=10000 ../.tools/bin/npx playwright test tests/interactive-summary.spec.js --project=chromium --headed --workers=1
```

Override the local site URL or form page path:

```bash
BASE_URL=http://surefroms.test FORM_PATH=/qa-test-form/ npm test
```

## Run Tests With Docker

Docker uses the official Playwright image and maps `surefroms.test` to the Mac host so the container can reach the LocalWP site.

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

Fallback without global npm:

```bash
../.tools/bin/npm run docker:build
../.tools/bin/npm run docker:doctor
../.tools/bin/npm run docker:smoke
../.tools/bin/npm run docker:test
```

## Manual QA Artifacts

Manual QA documents live in `manual-testing/`:

- `TestPlan.md`
- `TestCases.csv`
- `TestCases.xlsx`
- `TestCoverage.md`
- `BusinessCoverage.md`
- `ManualCoverageMatrix.md`
- `ManualExecutionReport.md`
- `QASignoffChecklist.md`
- `BugReports.md`
- `Screenshots/`

Manual QA coverage status: 100/100 planned coverage, with execution status tracked separately.

## Current Test Coverage

The manual suite currently targets 180 test cases across:

- WordPress and plugin setup
- SureForms form builder
- WordPress page embedding
- Frontend UI checks
- Functional form submission
- Required field and email validation
- Boundary and edge cases
- Security-negative exploratory checks
- Responsive layout checks
- Accessibility checks
- Submission data verification
- Email notification checks
- Performance and reliability checks
- Regression checks
- SureForms Business activation and dependency checks
- Business/pro field coverage
- Multi-step, conversational, conditional logic, calculation, quiz, webhook, PayPal, and integration coverage

Automation coverage is tracked in `automation/AutomationCoverage.md`.

Automation execution work area is tracked in `automation/AutomationExecutionWorkArea.md`.

Current automation run status is tracked in `automation/AutomationStatus.md`.

Docker setup status is tracked in `automation/DockerStatus.md`.

Docker readiness status is tracked in `automation/DockerReadinessChecklist.md`.

Docker readiness status: 100/100. Full form execution is still blocked until `/qa-test-form/` exists in WordPress.

Playwright setup status is tracked in `automation/PlaywrightSetupChecklist.md`.

Playwright setup status: 100/100. Full form execution is still blocked until `/qa-test-form/` exists in WordPress.

Overall WIP status, remaining issues, testing score, and next plan are tracked in `PROJECT_STATUS_AND_NEXT_PLAN.md`.
