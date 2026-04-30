# Manual QA Execution Report

Last updated: 2026-04-30

## Execution Summary

| Metric | Count |
|---|---:|
| Total planned manual test cases | 181 |
| Passed | 0 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 181 |

Execution status: Not started

## Evidence Status

| Evidence Type | Count | Status |
|---|---:|---|
| Real bug reports | 0 | None logged yet |
| Screenshots | 0 | None captured yet |
| Linked failed test cases | 0 | No executed failures yet |
| Environment notes from execution | 0 | Pending first execution pass |

This report is intentionally separated from test design coverage. The project has 181 designed manual cases, but it does not yet have manual execution proof.

## Current Blockers

| Blocker | Impact | Resolution |
|---|---|---|
| `/qa-test-form/` page is not created yet | Frontend, validation, submission, UI, responsive, accessibility, and automation cases cannot be fully executed | Create and publish the QA form page |
| Final SureForms field selectors are not confirmed | Automation and selector-based manual notes cannot be finalized | Inspect the rendered form after publishing |
| Mail capture is not configured | Email notification cases cannot be verified reliably | Configure a local mail/logging tool or mark email tests as environment-dependent |
| Business demo forms are not created yet | Business field and workflow execution is pending | Create dedicated Business test forms for fields, multi-step, and conditional logic |

## Execution Approach

Run manual testing in this order:

1. Setup and plugin activation checks.
2. Core form builder checks.
3. WordPress page embed checks.
4. Frontend rendering and UI checks.
5. Functional happy path submission.
6. Required field and invalid email validation.
7. Boundary, edge, and security-negative inputs.
8. Responsive checks across desktop, tablet, and mobile.
9. Accessibility checks with keyboard and visible labels.
10. Submission entries and email notification checks.
11. SureForms Business setup and feature checks.
12. Regression checks after fixes or configuration changes.

## Evidence Rules

| Result | Evidence Required |
|---|---|
| Pass | Note browser, date, and environment in comments |
| Fail | Add defect to `BugReports.md` and screenshot to `Screenshots/` |
| Blocked | Record blocker reason and dependency |
| Not Run | Leave as Not Run until execution starts |

## Exit Criteria For Manual QA

Manual QA can be considered execution-complete when:

- All P0 and P1 test cases are executed.
- No open critical or high severity defects remain unresolved or unaccepted.
- Business activation and dependency checks are executed.
- At least one Business field/workflow form is executed manually.
- Screenshots exist for failed cases and important UI observations.
- Final pass/fail/block counts are recorded in this report.
