# Bug Reports: SureForms Testing

Document real issues found during manual or automation testing.

## Bug Template

**Title:**  
**Severity:**  
**Priority:**  
**Status:**  
**Reported By:**
**Reported Date:**
**Build/Version:**

### Environment

- Site:
- Browser:
- WordPress:
- Plugin:
- Theme:

### Steps to Reproduce

1.
2.
3.

### Expected Result


### Actual Result


### Screenshot

Add screenshot under `manual-testing/Screenshots/`.

### Notes

- Related Test Case ID:
- Reproducibility:
- Workaround:

## Severity Guide

| Severity | Meaning |
|---|---|
| Critical | Blocks form creation, site access, or all submissions |
| High | Breaks a primary workflow such as required validation or successful submission |
| Medium | Impacts important behavior but has a workaround |
| Low | Cosmetic, wording, or minor usability issue |

## Priority Guide

| Priority | Meaning |
|---|---|
| P0 | Must fix before execution can continue |
| P1 | Should fix before final QA signoff |
| P2 | Fix when practical |
| P3 | Nice-to-have improvement |

## Sample Bug

**Title:** Form submits without required email  
**Severity:** High  
**Priority:** High  
**Status:** Example  

### Steps to Reproduce

1. Open the QA form page.
2. Leave the email field empty.
3. Click Submit.

### Expected Result

Required email validation should appear.

### Actual Result

Form submitted successfully.
