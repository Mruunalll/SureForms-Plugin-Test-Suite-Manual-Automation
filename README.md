# 🧪 SureForms Plugin Test Suite (Manual + Automation)

[![Automation Validation](https://github.com/Mruunalll/SureForms-Plugin-Test-Suite-Manual-Automation/actions/workflows/automation-validation.yml/badge.svg)](https://github.com/Mruunalll/SureForms-Plugin-Test-Suite-Manual-Automation/actions/workflows/automation-validation.yml)

Manual QA + Playwright automation portfolio project for testing the **SureForms WordPress plugin** and **SureForms Business** on a local WordPress site.

This project demonstrates real QA/SDET work: test planning, test case design, coverage tracking, bug reporting, Dockerized Playwright setup, page objects, reusable test data, and an end-to-end SureForms form creation/submission flow.

## 🚦 Project Dashboard

| Category | Status |
|---|---|
| **📌 Project** | ![status](https://img.shields.io/badge/status-WIP-orange) ![evidence](https://img.shields.io/badge/evidence%20readiness-38%2F100-red) ![docs](https://img.shields.io/badge/docs-structured-blue) |
| **🧪 Manual QA** | ![design](https://img.shields.io/badge/test%20design-181%20cases-blue) ![execution](https://img.shields.io/badge/executed-0%2F181-red) ![bugs](https://img.shields.io/badge/real%20bugs-0-red) ![screenshots](https://img.shields.io/badge/screenshots-0-red) |
| **🤖 Playwright Setup** | ![setup](https://img.shields.io/badge/setup-ready-brightgreen) ![framework](https://img.shields.io/badge/framework-Playwright%201.59.1-45ba4b) ![specs](https://img.shields.io/badge/specs-4-blue) ![pages](https://img.shields.io/badge/page%20objects-2-blueviolet) |
| **⚡ Automation Execution** | ![passing](https://img.shields.io/badge/passing%20checks-3-brightgreen) ![blocked](https://img.shields.io/badge/static%20form%20checks-22%20blocked-red) ![root cause](https://img.shields.io/badge/root%20cause-%2Fqa--test--form%20404-orange) |
| **🐳 Docker** | ![dockerfile](https://img.shields.io/badge/Dockerfile-ready-blue) ![compose](https://img.shields.io/badge/Compose-ready-blue) ![docker smoke](https://img.shields.io/badge/docker%20smoke-2%20passed-brightgreen) |
| **💼 SureForms Business** | ![business](https://img.shields.io/badge/manual%20design-done-blue) ![version](https://img.shields.io/badge/Business-2.8.2-blue) ![execution](https://img.shields.io/badge/execution-not%20run-red) ![automation](https://img.shields.io/badge/automation-not%20started-red) |
| **🌐 GitHub Readiness** | ![readme](https://img.shields.io/badge/README-polished-blue) ![ci](https://img.shields.io/badge/CI-validation%20added-blue) ![reports](https://img.shields.io/badge/hosted%20reports-missing-red) ![evidence](https://img.shields.io/badge/portfolio%20evidence-low-orange) |
| **✅ Latest Verified Build** | ![date](https://img.shields.io/badge/verified-2026--04--29-blue) ![test smoke](https://img.shields.io/badge/test%3Asmoke-2%20passed-brightgreen) ![test create form](https://img.shields.io/badge/test%3Acreate--form-1%20passed-brightgreen) ![docker smoke](https://img.shields.io/badge/docker%3Asmoke-2%20passed-brightgreen) |

> **Current truth:** This is a structured WIP, not an execution-complete QA portfolio yet. Test design is strong, but manual execution is **0/181**, real logged bugs are **0**, screenshots are **0**, and the static `/qa-test-form/` automation is blocked by a WordPress 404. The repo should be judged by evidence readiness, not by planning completeness.

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

- WordPress admin: `BASE_URL + /wp-admin/`
- Frontend base URL: configure with `BASE_URL`
- Static automation target path: `/qa-test-form/`
- Generated form E2E target: dynamic SureForms `/form/{slug}/` URL
- Example LocalWP host: `http://sureforms.test`

## 📂 Project Structure

Use the repo in this order:

```text
sureforms-qa-testing/
├── 📘 README.md                         # Portfolio overview, evidence status, setup, commands
├── 📊 PROJECT_STATUS_AND_NEXT_PLAN.md    # Current evidence status, blockers, next phases
├── 🐳 docker-compose.yml                 # Docker runner for Playwright
│
├── 🧪 manual-testing/                    # Manual QA deliverables
│   ├── TestPlan.md                       # Scope, approach, entry/exit criteria
│   ├── TestCases.csv                     # 181 manual test cases
│   ├── TestCases.xlsx                    # Spreadsheet version of test cases
│   ├── TestCoverage.md                   # Coverage map
│   ├── BusinessCoverage.md               # SureForms Business coverage
│   ├── ManualCoverageMatrix.md           # Manual test design coverage evidence
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
    ├── scripts/
    │   └── validate-js.js                # CI syntax/tooling validation
    ├── Dockerfile                        # Playwright Docker image
    ├── README.md                         # Automation-specific instructions
    └── AUTOMATION_STATUS.md              # One automation status, coverage, Docker, and CI hub
```

## 🗂️ Artifact Map

| Area | Main Artifacts | Purpose |
|---|---|---|
| **Project status** | `README.md`, `PROJECT_STATUS_AND_NEXT_PLAN.md` | Portfolio overview, current evidence status, blockers, next plan |
| **Manual QA** | `TestPlan.md`, `TestCases.csv`, `TestCases.xlsx` | Manual planning and executable test inventory |
| **Design coverage proof** | `ManualCoverageMatrix.md`, `TestCoverage.md`, `BusinessCoverage.md` | Evidence that manual and Business scenarios are mapped, not executed |
| **Execution tracking** | `ManualExecutionReport.md`, `AUTOMATION_STATUS.md` | Pass/fail/blocked/not-run status and automation progress |
| **Bug evidence** | `BugReports.md`, `Screenshots/` | Defect reporting and visual proof |
| **Automation code** | `tests/`, `pages/`, `fixtures/`, `utils/` | Playwright tests, page objects, data, and config helpers |
| **Tooling proof** | `AUTOMATION_STATUS.md`, `.github/workflows/automation-validation.yml` | Setup/readiness evidence and CI validation |
| **WordPress strategy** | `AUTOMATION_STATUS.md` | Notes for WordPress-specific Playwright/admin/editor automation |

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
│   │   └── Portfolio overview, setup commands, evidence status, and execution paths
│   └── PROJECT_STATUS_AND_NEXT_PLAN.md
│       └── Current evidence status, remaining issues, and next execution plan
│
├── 2️⃣ Manual QA design coverage
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
├── 4️⃣ Automation status
│   └── automation/
│       └── AUTOMATION_STATUS.md
│
├── 5️⃣ Docker setup
│   ├── docker-compose.yml
│   └── automation/
│       ├── Dockerfile
│       └── AUTOMATION_STATUS.md
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
│   └── Planning and traceability evidence
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
    └── Evidence target folder; currently no screenshots are captured
```

| QA Area | Coverage Proof | Status |
|---|---|---|
| **📋 Planning** | `TestPlan.md` | Complete |
| **✅ Test inventory** | `TestCases.csv`, `TestCases.xlsx` | 181 cases |
| **🎯 Traceability** | `ManualCoverageMatrix.md`, `TestCoverage.md` | Design complete |
| **💼 Business coverage** | `BusinessCoverage.md` | Design complete |
| **🧾 Execution tracking** | `ManualExecutionReport.md`, `QASignoffChecklist.md` | Ready |
| **🐞 Defect handling** | `BugReports.md`, `Screenshots/` | Template ready; no real bugs/screenshots yet |

Manual test design coverage is complete for planning and traceability. Manual execution is still **0/181**, so this project should not be described as manually tested yet.

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
    └── LocalWP/browser CI after self-hosted runner, wp-env, or staging target exists
```

| Automation Area | Current State | Evidence |
|---|---|---|
| **✅ Smoke** | Passing | `tests/smoke.spec.js` |
| **✅ Generated form E2E** | Passing | `tests/createFormE2E.spec.js` |
| **✅ Page objects** | Implemented | `pages/formPage.js`, `pages/sureformsAdminPage.js` |
| **✅ Test data** | Reusable | `fixtures/testData.js` |
| **✅ Docker smoke** | Passing | `AUTOMATION_STATUS.md` |
| **⏳ Static form suite** | Pending WordPress page | `tests/form.spec.js` |
| **⏳ Business automation** | Planned | `AUTOMATION_STATUS.md` |

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
npm run ci:validate
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
BASE_URL=http://sureforms.test FORM_PATH=/qa-test-form/ npm test
```

## 🐳 Docker Execution

Docker uses the official Playwright image and maps the configured `LOCAL_WP_HOST` to the Mac host so the container can reach the LocalWP site.

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

- `PROJECT_STATUS_AND_NEXT_PLAN.md` - evidence readiness, next plan, and remaining issues
- `automation/AUTOMATION_STATUS.md` - automation results, blockers, roadmap, Docker status, and CI strategy
- `manual-testing/ManualCoverageMatrix.md` - manual design coverage and traceability

## 🚧 Known Gaps

This repo is WIP. It has a strong structure, but it needs real execution evidence before it should be treated as a finished portfolio project.

Remaining work:

- Create/publish the static `/qa-test-form/` WordPress page
- Run and stabilize `tests/form.spec.js`
- Execute manual P0/P1 cases and update pass/fail/block counts
- Log real reproducible bugs if found
- Capture and link screenshots in `manual-testing/Screenshots/`
- Add Business automation for advanced fields/workflows
- Add accessibility automation
- Add backend entries/email verification
- Add CI, hosted Playwright report evidence, and execution video polish

## 🏁 Portfolio Outcome

This project demonstrates:

- Real WordPress plugin QA workflow
- Manual QA planning and coverage discipline
- Playwright automation with page objects
- Dockerized test execution
- LocalWP testing strategy
- SureForms Business test planning
- Honest WIP reporting with clear next steps

## 🔗 See Also
- [E-Commerce QA Suite](https://github.com/Mruunalll/ecommerce-manual-qa-test-suite)
- [WordPress Astra QA Suite](https://github.com/Mruunalll/wordpress-astra-qa-test-suite)
- [AI Application QA Suite](https://github.com/Mruunalll/ai-application-qa-test-suite)
