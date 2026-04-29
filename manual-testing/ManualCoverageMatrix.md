# Manual QA Coverage Matrix

Last updated: 2026-04-29

## Manual Coverage Score

Manual QA coverage score: 100/100

This score means the manual QA scope is fully mapped and documented for the SureForms core plugin and SureForms Business version. It does not mean all test cases have passed. Execution status is tracked separately in `ManualExecutionReport.md`.

## Coverage Completion Criteria

| Coverage Requirement | Status | Evidence |
|---|---|---|
| Test plan exists | Complete | `TestPlan.md` |
| Core functional scenarios covered | Complete | `TestCases.csv`, `TestCases.xlsx` |
| Validation scenarios covered | Complete | `TestCases.csv`, `TestCases.xlsx` |
| UI scenarios covered | Complete | `TestCases.csv`, `TestCases.xlsx` |
| Responsive scenarios covered | Complete | `TestCases.csv`, `TestCases.xlsx` |
| Accessibility scenarios covered | Complete | `TestCases.csv`, `TestCases.xlsx` |
| Security-negative scenarios covered | Complete | `TestCases.csv`, `TestCases.xlsx` |
| Data and entries scenarios covered | Complete | `TestCases.csv`, `TestCases.xlsx` |
| Email notification scenarios covered | Complete | `TestCases.csv`, `TestCases.xlsx` |
| Performance and reliability scenarios covered | Complete | `TestCases.csv`, `TestCases.xlsx` |
| Regression scenarios covered | Complete | `TestCases.csv`, `TestCases.xlsx` |
| SureForms Business scenarios covered | Complete | `BusinessCoverage.md`, `TestCases.csv`, `TestCases.xlsx` |
| Bug report template exists | Complete | `BugReports.md` |
| Evidence/screenshot location exists | Complete | `Screenshots/` |
| Execution report exists | Complete | `ManualExecutionReport.md` |
| Signoff checklist exists | Complete | `QASignoffChecklist.md` |

## Test Case Distribution

| Category | Test Cases | Coverage Status |
|---|---:|---|
| Setup | 5 | Complete |
| Form Builder | 11 | Complete |
| WordPress Page | 3 | Complete |
| Frontend | 11 | Complete |
| Functional | 8 | Complete |
| Validation | 21 | Complete |
| UI | 7 | Complete |
| Responsive | 5 | Complete |
| Accessibility | 6 | Complete |
| Compatibility | 5 | Complete |
| Data | 3 | Complete |
| Email Notification | 2 | Complete |
| Performance | 2 | Complete |
| Reliability | 2 | Complete |
| Error Handling | 1 | Complete |
| Security Negative | 4 | Complete |
| Regression | 4 | Complete |
| Business Setup | 5 | Complete |
| Business Settings | 3 | Complete |
| Business Fields | 28 | Complete |
| Business Feature | 23 | Complete |
| Business Integrations | 8 | Complete |
| Business Payments | 4 | Complete |
| Business Entries | 4 | Complete |
| Business Accessibility | 2 | Complete |
| Business Responsive | 2 | Complete |
| Business Regression | 1 | Complete |
| Total | 180 | Complete |

## Requirements Traceability

| Requirement Area | Manual Coverage | Automation Coverage |
|---|---|---|
| Plugin installation and activation | Covered | Planned |
| Admin navigation and setup | Covered | Planned |
| Form creation and field setup | Covered | Later |
| WordPress page embedding | Covered | Later |
| Frontend form rendering | Covered | In progress |
| Valid form submission | Covered | In progress |
| Required field validation | Covered | In progress |
| Invalid email validation | Covered | In progress |
| UI layout and button visibility | Covered | In progress |
| Responsive layout | Covered | Planned |
| Accessibility and keyboard flow | Covered | Planned |
| Edge and boundary input | Covered | Planned |
| Security-negative input | Covered | Manual |
| Submission entries | Covered | Later |
| Email notifications | Covered | Manual until mail capture exists |
| SureForms Business activation | Covered | Planned |
| Business fields | Covered | Planned |
| Conditional logic and multi-step workflows | Covered | Planned |
| Integrations and payment smoke checks | Covered | Manual |
| Regression after plugin/theme changes | Covered | Planned |

## Manual Coverage Notes

- Manual coverage is complete for portfolio/WIP purposes.
- Execution is blocked for form-specific cases until `/qa-test-form/` is created.
- Business integration and payment cases are designed as manual smoke checks unless sandbox credentials are available.
- Security testing is limited to manual negative testing and does not include penetration testing.
