# Playwright Setup Checklist

Last updated: 2026-04-29

## Playwright Setup Score

Playwright setup readiness: Ready

This means the framework, configuration, scripts, local/Docker execution paths, reusable structure, and reporting setup are complete. It does not mean all SureForms form tests pass yet. Form execution is still blocked until `/qa-test-form/` is created in WordPress.

## Setup Completion Matrix

| Requirement | Status | Evidence |
|---|---|---|
| Playwright Test framework installed | Complete | `package.json`, `package-lock.json` |
| Chromium project configured | Complete | `playwright.config.js` |
| Mobile viewport project configured | Complete | `playwright.config.js` |
| Headed and interactive execution supported | Complete | `test:headed`, `test:interactive` |
| HTML report configured | Complete | `playwright.config.js`, `npm run report` |
| JSON and JUnit reports configured | Complete | `playwright.config.js` |
| Screenshots, traces, and videos configured | Complete | `playwright.config.js` |
| Local environment variables documented | Complete | `.env.example` |
| Reusable environment helper available | Complete | `utils/env.js` |
| Reusable page object available | Complete | `pages/formPage.js` |
| Reusable test data available | Complete | `fixtures/testData.js` |
| Smoke test available | Complete | `tests/smoke.spec.js` |
| Form test suite available | Complete | `tests/form.spec.js` |
| Interactive summary demo available | Complete | `tests/interactive-summary.spec.js` |
| Docker execution path available | Complete | `Dockerfile`, `docker-compose.yml` |
| npm scripts cover common workflows | Complete | `package.json` |
| Automation README exists | Complete | `README.md` |

## Supported Commands

```bash
npm test
npm run test:smoke
npm run test:form
npm run test:headed
npm run test:mobile
npm run test:interactive
npm run report
npm run doctor
npm run docker:build
npm run docker:test
```

Fallback for this local machine if global `npm` is unavailable:

```bash
../.tools/bin/npm test
../.tools/bin/npm run test:smoke
```

## Current Execution Boundary

Setup is complete. Full form execution is pending because WordPress still needs the published `/qa-test-form/` page with the SureForms test form.
