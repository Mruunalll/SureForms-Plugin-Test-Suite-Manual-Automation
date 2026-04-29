# 🧪 SureForms Plugin Test Suite (Manual + Automation)

Manual QA + Playwright automation portfolio project for testing the **SureForms WordPress plugin** and **SureForms Business** on a local WordPress site.

This project demonstrates real QA/SDET work: test planning, test case design, coverage tracking, bug reporting, Dockerized Playwright setup, page objects, reusable test data, and an end-to-end SureForms form creation/submission flow.

## 🚦 Project Dashboard

| Category | Status |
|---|---|
| **📌 Project** | ![status](https://img.shields.io/badge/status-WIP-blue) ![portfolio](https://img.shields.io/badge/portfolio-ready--to--show-brightgreen) ![score](https://img.shields.io/badge/overall-91%2F100-brightgreen) |
| **🧪 Manual QA** | ![coverage](https://img.shields.io/badge/coverage-100%2F100-brightgreen) ![test cases](https://img.shields.io/badge/test%20cases-181-blue) ![execution](https://img.shields.io/badge/execution-not%20started-yellow) |
| **🤖 Playwright Setup** | ![setup](https://img.shields.io/badge/setup-100%2F100-brightgreen) ![framework](https://img.shields.io/badge/framework-Playwright-45ba4b) ![pattern](https://img.shields.io/badge/pattern-Page%20Object%20Model-blueviolet) |
| **⚡ Automation Execution** | ![execution](https://img.shields.io/badge/execution-55%2F100-yellow) ![smoke](https://img.shields.io/badge/smoke-2%20passed-brightgreen) ![e2e](https://img.shields.io/badge/generated%20form%20E2E-1%20passed-brightgreen) ![static form](https://img.shields.io/badge/static%20form%20suite-pending-orange) |
| **🐳 Docker** | ![docker](https://img.shields.io/badge/docker-100%2F100-brightgreen) ![compose](https://img.shields.io/badge/compose-ready-blue) ![docker smoke](https://img.shields.io/badge/docker%20smoke-2%20passed-brightgreen) |
| **💼 SureForms Business** | ![business](https://img.shields.io/badge/business%20coverage-100%2F100-brightgreen) ![automation](https://img.shields.io/badge/business%20automation-planned-yellow) |
| **🌐 GitHub Readiness** | ![readiness](https://img.shields.io/badge/readiness-90%2F100-brightgreen) ![docs](https://img.shields.io/badge/docs-polished-brightgreen) ![ci](https://img.shields.io/badge/CI-planned-yellow) |
| **✅ Latest Verified Build** | ![test smoke](https://img.shields.io/badge/test%3Asmoke-2%20passed-brightgreen) ![test create form](https://img.shields.io/badge/test%3Acreate--form-1%20passed-brightgreen) ![playwright](https://img.shields.io/badge/Playwright-1.59.1-blue) |

> **Current truth:** Playwright setup and Docker readiness are complete. Automation execution is improving, but it is not 100/100 yet because the static `/qa-test-form/` suite, Business automation, accessibility checks, and backend verification are still pending.

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

Use the repo in this order:

```text
sureforms-qa-testing/
├── 📘 README.md                         # Portfolio overview, scores, setup, commands
├── 📊 PROJECT_STATUS_AND_NEXT_PLAN.md    # Current score, blockers, next phases
├── 🐳 docker-compose.yml                 # Docker runner for Playwright
│
├── 🧪 manual-testing/                    # Manual QA deliverables
│   ├── TestPlan.md                       # Scope, approach, entry/exit criteria
│   ├── TestCases.csv                     # 181 manual test cases
│   ├── TestCases.xlsx                    # Spreadsheet version of test cases
│   ├── TestCoverage.md                   # Coverage map
│   ├── BusinessCoverage.md               # SureForms Business coverage
│   ├── ManualCoverageMatrix.md           # 100/100 manual coverage evidence
│   ├── ManualExecutionReport.md          # Pass/fail/blocked/not-run tracking
│   ├── QASignoffChecklist.md             # Coverage vs execution signoff
│   ├── BugReports.md                     # Defect template and examples
│   └── Screenshots/                      # Bug and execution evidence
│
└── 🤖 automation/                         # Playwright automation suite
    ├── fixtures/
    │   └── testData.js                   # Reusable form submission data
    ├── pages/
    │   ├── formPage.js                   # Frontend form page object
    │   └── sureformsAdminPage.js         # WordPress/SureForms admin page object
    ├── tests/
    │   ├── smoke.spec.js                 # Local WordPress smoke checks
    │   ├── form.spec.js                  # Static /qa-test-form/ suite
    │   ├── createFormE2E.spec.js         # Passing generated-form E2E
    │   └── interactive-summary.spec.js   # Headed demo with result summary tab
    ├── utils/
    │   └── env.js                        # Environment/config loader
    ├── .env.example                      # Local env template
    ├── playwright.config.js              # Playwright projects/reporting/artifacts
    ├── package.json                      # npm test scripts
    ├── Dockerfile                        # Playwright Docker image
    ├── README.md                         # Automation-specific instructions
    ├── AutomationCoverage.md             # Automation roadmap
    ├── AutomationExecutionWorkArea.md    # Execution score and blockers
    ├── AutomationStatus.md               # Latest automation results
    ├── PlaywrightSetupChecklist.md       # 100/100 setup evidence
    ├── DockerStatus.md                   # Docker verification results
    ├── DockerReadinessChecklist.md       # 100/100 Docker evidence
    └── WordPressPlaywrightSetup.md       # WordPress Playwright notes
```

## 🗂️ Artifact Map

| Area | Main Artifacts | Purpose |
|---|---|---|
| **Project status** | `README.md`, `PROJECT_STATUS_AND_NEXT_PLAN.md` | Portfolio overview, current score, blockers, next plan |
| **Manual QA** | `TestPlan.md`, `TestCases.csv`, `TestCases.xlsx` | Manual planning and executable test inventory |
| **Coverage proof** | `ManualCoverageMatrix.md`, `TestCoverage.md`, `BusinessCoverage.md` | Evidence for 100/100 manual and Business coverage |
| **Execution tracking** | `ManualExecutionReport.md`, `AutomationStatus.md`, `AutomationExecutionWorkArea.md` | Pass/fail/blocked/not-run status and automation progress |
| **Bug evidence** | `BugReports.md`, `Screenshots/` | Defect reporting and visual proof |
| **Automation code** | `tests/`, `pages/`, `fixtures/`, `utils/` | Playwright tests, page objects, data, and config helpers |
| **Tooling proof** | `PlaywrightSetupChecklist.md`, `DockerReadinessChecklist.md`, `DockerStatus.md` | Setup/readiness scoring and command verification |
| **WordPress strategy** | `WordPressPlaywrightSetup.md` | Notes for WordPress-specific Playwright/admin/editor automation |

## 🧭 Automation Entry Points

```text
automation/
├── ✅ smoke.spec.js
│   └── npm run test:smoke
│       Verifies environment config and LocalWP homepage.
│
├── ✅ createFormE2E.spec.js
│   └── npm run test:create-form
│       Logs in, generates a SureForms form, publishes it, submits it, and checks thank-you text.
│
├── ⏳ form.spec.js
│   └── npm run test:form
│       Targets /qa-test-form/. Pending until that static page exists.
│
├── 👀 interactive-summary.spec.js
│   └── npm run test:interactive
│       Opens headed Chromium and shows a custom HTML result summary.
│
└── 🐳 Docker smoke
    └── npm run docker:smoke
        Runs the smoke path inside the Playwright Docker container.
```

## 🪜 Suggested Review Flow

```text
Review path/
├── 1️⃣ Project status
│   ├── README.md
│   │   └── Portfolio overview, setup commands, scores, and execution paths
│   └── PROJECT_STATUS_AND_NEXT_PLAN.md
│       └── Current score, remaining issues, and next execution plan
│
├── 2️⃣ Manual QA coverage
│   └── manual-testing/
│       ├── TestPlan.md
│       ├── TestCases.csv / TestCases.xlsx
│       ├── TestCoverage.md
│       ├── BusinessCoverage.md
│       ├── ManualCoverageMatrix.md
│       ├── ManualExecutionReport.md
│       ├── QASignoffChecklist.md
│       ├── BugReports.md
│       └── Screenshots/
│
├── 3️⃣ Automation design
│   └── automation/
│       ├── fixtures/testData.js
│       ├── pages/formPage.js
│       ├── pages/sureformsAdminPage.js
│       ├── tests/smoke.spec.js
│       ├── tests/createFormE2E.spec.js
│       ├── tests/form.spec.js
│       ├── tests/interactive-summary.spec.js
│       └── utils/env.js
│
├── 4️⃣ Automation status docs
│   └── automation/
│       ├── AutomationCoverage.md
│       ├── AutomationExecutionWorkArea.md
│       ├── AutomationStatus.md
│       ├── PlaywrightSetupChecklist.md
│       └── WordPressPlaywrightSetup.md
│
├── 5️⃣ Docker setup
│   ├── docker-compose.yml
│   └── automation/
│       ├── Dockerfile
│       ├── DockerStatus.md
│       └── DockerReadinessChecklist.md
│
└── 6️⃣ Command verification
    └── npm run test:smoke, test:create-form, docker:smoke
```

Quick command check:

```bash
cd automation
../.tools/bin/npm run test:smoke
../.tools/bin/npm run test:create-form
../.tools/bin/npm run docker:smoke
```

Expected currently:

```text
test:smoke        2 passed
test:create-form 1 passed
docker:smoke     2 passed
```

## 🧪 Manual QA Artifacts

Manual QA documents live in `manual-testing/`:

```text
manual-testing/
├── 📋 TestPlan.md
│   └── Scope, objectives, entry/exit criteria, risks, and QA approach
│
├── ✅ TestCases.csv
│   └── 181 executable manual test cases for functional, UI, validation, edge, and Business flows
│
├── 📊 TestCases.xlsx
│   └── Spreadsheet version for filtering, review, and portfolio presentation
│
├── 🧭 TestCoverage.md
│   └── Feature-to-test coverage summary
│
├── 💼 BusinessCoverage.md
│   └── SureForms Business and advanced feature coverage
│
├── 🎯 ManualCoverageMatrix.md
│   └── 100/100 planning and traceability evidence
│
├── 🧾 ManualExecutionReport.md
│   └── Pass/fail/blocked/not-run execution tracker
│
├── 🏁 QASignoffChecklist.md
│   └── Coverage signoff and execution readiness separation
│
├── 🐞 BugReports.md
│   └── Defect format, examples, severity, expected vs actual results
│
└── 📸 Screenshots/
    └── Bug proof, UI proof, execution proof, and GitHub-ready evidence
```

| QA Area | Coverage Proof | Status |
|---|---|---|
| **📋 Planning** | `TestPlan.md` | Complete |
| **✅ Test inventory** | `TestCases.csv`, `TestCases.xlsx` | 181 cases |
| **🎯 Traceability** | `ManualCoverageMatrix.md`, `TestCoverage.md` | 100/100 |
| **💼 Business coverage** | `BusinessCoverage.md` | 100/100 |
| **🧾 Execution tracking** | `ManualExecutionReport.md`, `QASignoffChecklist.md` | Ready |
| **🐞 Defect handling** | `BugReports.md`, `Screenshots/` | Template ready |

Manual coverage is **100/100** for planning and traceability. Execution status is tracked separately so the project stays honest and professional.

## 🤖 Automation Coverage

```text
automation coverage/
├── ✅ Implemented
│   ├── Local WordPress smoke check
│   ├── Automation environment validation
│   ├── Generated SureForms contact form E2E
│   ├── Frontend form page object
│   ├── SureForms admin page object
│   ├── Interactive headed Chromium demo with custom result summary
│   └── Dockerized Playwright smoke path
│
├── ⏳ Pending execution
│   ├── Static /qa-test-form/ suite after the page is created
│   ├── Missing-name validation
│   ├── Missing-email validation
│   ├── Missing-message validation
│   └── Invalid email format validation
│
├── 💼 Business automation planned
│   ├── Business/pro field checks
│   ├── Conditional logic
│   ├── Multi-step forms
│   ├── Conversational forms
│   ├── Calculations and quiz flows
│   ├── Webhook/integration checks
│   └── PayPal/payment path checks
│
└── 🚀 Future quality gates
    ├── Entries and backend verification
    ├── Email notification verification
    ├── Accessibility checks
    ├── Visual checks
    └── GitHub Actions smoke workflow
```

| Automation Area | Current State | Evidence |
|---|---|---|
| **✅ Smoke** | Passing | `tests/smoke.spec.js` |
| **✅ Generated form E2E** | Passing | `tests/createFormE2E.spec.js` |
| **✅ Page objects** | Implemented | `pages/formPage.js`, `pages/sureformsAdminPage.js` |
| **✅ Test data** | Reusable | `fixtures/testData.js` |
| **✅ Docker smoke** | Passing | `DockerStatus.md` |
| **⏳ Static form suite** | Pending WordPress page | `tests/form.spec.js` |
| **⏳ Business automation** | Planned | `AutomationCoverage.md` |

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

```text
coverage highlights/
├── 🧱 Setup and configuration
│   ├── WordPress local site readiness
│   ├── SureForms plugin activation
│   ├── SureForms Business activation
│   └── Dependency and compatibility checks
│
├── 🛠️ Form builder coverage
│   ├── Form creation
│   ├── AI prompt-based form generation
│   ├── Field add/edit/remove behavior
│   ├── WordPress page embedding
│   └── Publish and preview behavior
│
├── 🧾 Frontend submission coverage
│   ├── Valid contact form submission
│   ├── Required field validation
│   ├── Email format validation
│   ├── Boundary and long input checks
│   ├── Special character checks
│   └── Rapid multiple submission checks
│
├── 🎨 UI and UX coverage
│   ├── Field alignment
│   ├── Button visibility
│   ├── Responsive layout checks
│   ├── Accessibility checks
│   └── Visual consistency checks
│
├── 🔐 Reliability and negative coverage
│   ├── Security-negative exploratory checks
│   ├── Submission data verification
│   ├── Email notification checks
│   ├── Performance checks
│   └── Regression checks
│
└── 💼 SureForms Business coverage
    ├── Business/pro fields
    ├── Multi-step forms
    ├── Conversational forms
    ├── Conditional logic
    ├── Calculation forms
    ├── Quiz flows
    ├── Webhooks and integrations
    └── PayPal/payment path coverage
```

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
