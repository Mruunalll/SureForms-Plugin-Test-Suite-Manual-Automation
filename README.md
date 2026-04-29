# 🧪 SureForms Plugin Test Suite (Manual + Automation)

Manual QA + Playwright automation portfolio project for testing the **SureForms WordPress plugin** and **SureForms Business** on a local WordPress site.

This project demonstrates real QA/SDET work: test planning, test case design, coverage tracking, bug reporting, Dockerized Playwright setup, page objects, reusable test data, and an end-to-end SureForms form creation/submission flow.

## 🚦 Current Status

| Area | Score | Status |
|---|---:|---|
| Manual QA coverage | **100/100** | 181 planned test cases with coverage matrix, signoff checklist, and execution report |
| Playwright setup | **100/100** | Framework, scripts, reports, artifacts, Docker path, fixtures, and page objects are complete |
| Automation execution | **55/100** | Smoke tests and generated SureForms E2E pass; static `/qa-test-form/` suite is still pending |
| Docker readiness | **100/100** | Compose service, host mapping, report volumes, doctor/smoke commands, and checklist complete |
| SureForms Business coverage | **100/100** | Business scenarios are fully mapped for manual coverage |
| GitHub portfolio readiness | **90/100** | Attractive README, clear scoring, passing E2E evidence, and honest remaining gaps |

**Overall project score:** `91/100 WIP`

## ✅ Latest Verified Automation

```bash
cd automation
../.tools/bin/npm run test:smoke
```

```text
2 passed
```

```bash
cd automation
../.tools/bin/npm run test:create-form
```

```text
1 passed
```

The generated SureForms E2E test verifies:

- WordPress login
- SureForms dashboard access
- Create New Form button
- AI prompt-based contact form generation
- Editor verification
- Instant Form enablement
- Publish flow
- Frontend form view
- Field fill and submit
- Thank-you message validation

## 🧰 Tech Stack

- WordPress local test site
- SureForms + SureForms Business
- Playwright Test
- JavaScript
- Page Object Model
- Docker Desktop
- Docker Compose
- Node.js / npm
- Git + GitHub

## 🌐 Local Test Site

- WordPress admin: `http://surefroms.test/wp-admin/`
- Frontend base URL: `http://surefroms.test`
- Static automation target path: `/qa-test-form/`
- Generated form E2E target: dynamic SureForms `/form/{slug}/` URL

## 📂 Project Structure

```text
manual-testing/
  TestPlan.md
  TestCases.csv
  TestCases.xlsx
  TestCoverage.md
  BusinessCoverage.md
  ManualCoverageMatrix.md
  ManualExecutionReport.md
  QASignoffChecklist.md
  BugReports.md
  Screenshots/

automation/
  fixtures/
    testData.js
  pages/
    formPage.js
    sureformsAdminPage.js
  tests/
    smoke.spec.js
    form.spec.js
    createFormE2E.spec.js
    interactive-summary.spec.js
  utils/
    env.js
  .env.example
  AutomationCoverage.md
  AutomationExecutionWorkArea.md
  AutomationStatus.md
  DockerStatus.md
  DockerReadinessChecklist.md
  PlaywrightSetupChecklist.md
  WordPressPlaywrightSetup.md
  README.md
  Dockerfile
  playwright.config.js
  package.json

docker-compose.yml
PROJECT_STATUS_AND_NEXT_PLAN.md
README.md
```

## 🧪 Manual QA Artifacts

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

Manual coverage is **100/100** for planning and traceability. Execution status is tracked separately so the project stays honest and professional.

## 🤖 Automation Coverage

Implemented automation:

- Local WordPress smoke check
- Automation environment validation
- Generated SureForms contact form E2E
- Frontend form page object
- SureForms admin page object
- Interactive headed Chromium demo with custom result summary
- Dockerized Playwright smoke path

Planned automation:

- Static `/qa-test-form/` suite once the page exists
- Missing-name / missing-email / missing-message validations
- Business field automation
- Conditional logic automation
- Multi-step form automation
- Entries and backend verification
- Accessibility checks
- GitHub Actions smoke workflow

## ⚙️ Automation Setup

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

Fallback on this machine if global `npm` is unavailable:

```bash
../.tools/bin/npm install
```

## ▶️ Run Tests

From `automation/`:

```bash
npm test
npm run test:smoke
npm run test:form
npm run test:create-form
npm run test:headed
npm run test:mobile
npm run test:interactive
npm run test:ui
npm run report
```

Fallback without global npm:

```bash
../.tools/bin/npm run test:smoke
../.tools/bin/npm run test:create-form
../.tools/bin/npm run test:interactive
```

Override target settings:

```bash
BASE_URL=http://surefroms.test FORM_PATH=/qa-test-form/ npm test
```

## 🐳 Docker Execution

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

## 📊 Coverage Highlights

The manual suite currently targets **181 test cases** across:

- WordPress and plugin setup
- SureForms form builder
- AI form generation
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

## 📌 Key Documents

- `PROJECT_STATUS_AND_NEXT_PLAN.md` - overall score, next plan, and remaining issues
- `automation/AutomationStatus.md` - latest automation results
- `automation/AutomationExecutionWorkArea.md` - execution gaps and improvement path
- `automation/AutomationCoverage.md` - automation roadmap
- `automation/PlaywrightSetupChecklist.md` - setup score and evidence
- `automation/DockerReadinessChecklist.md` - Docker readiness score and evidence
- `automation/WordPressPlaywrightSetup.md` - WordPress-specific Playwright notes
- `manual-testing/ManualCoverageMatrix.md` - manual coverage score and traceability

## 🚧 Known Gaps

This repo is WIP, but in good portfolio shape.

Remaining work:

- Create/publish the static `/qa-test-form/` WordPress page
- Run and stabilize `tests/form.spec.js`
- Add Business automation for advanced fields/workflows
- Add accessibility automation
- Add backend entries/email verification
- Add CI, badges, screenshots, and execution video polish

## 🏁 Portfolio Outcome

This project demonstrates:

- Real WordPress plugin QA workflow
- Manual QA planning and coverage discipline
- Playwright automation with page objects
- Dockerized test execution
- LocalWP testing strategy
- SureForms Business test planning
- Honest WIP reporting with clear next steps
