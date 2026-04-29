# Test Plan: SureForms WordPress Plugin Testing

## Objective

Verify that the SureForms WordPress plugin supports form creation, display, validation, and submission on the local WordPress test site.

## Scope

### In Scope

- SureForms plugin availability
- Form creation
- Form page display
- Required field validation
- Invalid email validation
- Successful submission
- Success message
- Basic UI and responsive checks
- Admin plugin smoke checks
- Form builder configuration checks
- WordPress page embed checks
- Edge case and boundary testing
- Accessibility checks
- Security-negative exploratory checks
- Submission entry verification
- Email notification checks if mail capture is available
- Regression checks after plugin/theme/cache changes
- SureForms Business plugin activation and dependency checks
- Business/pro fields including File Upload, Signature, Rating, NPS, Date Picker, Time Picker, Slider, Hidden, HTML, and Repeater
- Business workflows including Multi-step Forms, Conversational Forms, Conditional Logic, Conditional Confirmations, Conditional Emails, Calculations, Quiz, and Dynamic Options
- Business integrations including Webhooks, native connectors, PayPal payments, Google Maps, and advanced entries where configured

### Out of Scope

- Real payment processing outside a sandbox
- Live CRM or third-party integration verification without test credentials
- Production email deliverability testing outside local mail capture/logging
- Load testing
- Security penetration testing

Note: Payment, native integration, and advanced conditional workflow smoke checks are in scope for manual QA when the required sandbox settings or demo configuration are available.

## Test Environment

- Site: `http://surefroms.test`
- WordPress: Local WordPress
- Plugin: SureForms
- Browser: Chromium
- Automation: Playwright
- Editor: VS Code or any code editor

## Entry Criteria

- Local WordPress site is running.
- SureForms plugin is installed and activated.
- QA test form is created and published.
- Test form page URL is available.

## Exit Criteria

- Core manual test cases are executed.
- Critical bugs are documented.
- Playwright tests cover happy path, validation, and UI visibility.
- README includes setup and execution instructions.
- Final manual execution counts are recorded in `ManualExecutionReport.md`.
- Any failed cases have linked evidence in `BugReports.md` and `Screenshots/`.

## Test Case Volume

The QA suite includes 181 target test cases in `TestCases.csv`, grouped by setup, form builder, frontend, functional, validation, UI, responsive, accessibility, compatibility, data, email, performance, reliability, error handling, regression, and SureForms Business coverage.

## Manual QA Coverage Score

Manual QA coverage is now 100/100 for planning and traceability.

Coverage artifacts:

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

Execution remains separate from coverage. Current execution status is tracked in `ManualExecutionReport.md`.
