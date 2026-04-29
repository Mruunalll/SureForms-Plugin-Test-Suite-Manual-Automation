# SureForms Test Coverage Map

This project targets broad QA coverage across the SureForms plugin workflow, from admin setup to frontend submission and regression.

## Coverage Areas

| Area | Examples | Execution |
|---|---|---|
| Setup | Login, plugin installed, plugin active, admin menu visible | Manual + automated |
| Form Builder | Create form, add fields, required settings, save/publish | Manual + automated later |
| WordPress Page | Create page, embed form, publish page | Manual |
| Frontend UI | Field visibility, labels, button, spacing, errors, success state | Manual + automated |
| Functional | Happy path, optional field behavior, repeated submissions | Automated |
| Validation | Required fields, email formats, whitespace, boundaries | Automated |
| Edge Cases | Long text, special characters, Unicode, rapid submit | Manual + automated |
| Security Negative | XSS-like input, HTML, SQL-like strings | Manual |
| Responsive | Mobile, tablet, desktop, narrow viewport, zoom | Manual + automated |
| Accessibility | Keyboard navigation, labels, tab order, contrast | Manual + automated |
| Data | Submission entries, stored values, timestamps | Manual + automated later |
| Notifications | Email notification delivery and content | Manual |
| Performance | Page load and submission response | Manual + automated later |
| Regression | Plugin update, cache, theme change, browser cache | Manual + automated |
| Business Setup | Business activation, dependency, license/settings access | Manual + automated |
| Business Fields | File Upload, Signature, Rating, NPS, Date Picker, Time Picker, Slider, Hidden, HTML, Repeater | Manual + automated |
| Business Workflows | Multi-step, Conversational, Conditional Logic, Conditional Confirmations, Conditional Emails | Manual + automated |
| Business Data/Integrations | Entries, uploads, signatures, webhooks, native integrations, PayPal | Mostly manual + automated later |
| Business Regression | Pro assets, mobile behavior, accessibility, plugin dependency | Manual + automated |

## Automation Targeting Strategy

### Automate First

- Login smoke check
- Plugin active check
- Form page loads
- Form field visibility
- Valid submission
- Required field errors
- Invalid email validation
- Optional phone behavior
- Mobile viewport layout smoke check
- Duplicate submit behavior
- SureForms Business active check
- Multi-step navigation and validation
- Conditional show/hide logic
- Calculation field updates
- Rating and NPS submission
- Business frontend console-error checks

### Automate Later

- Form creation through wp-admin
- Submission entries verification
- Pro field builder availability checks
- File upload entry verification
- Signature entry verification
- Webhook trigger verification
- Firefox and WebKit browser coverage
- Network failure simulation
- Email/mail-log verification
- Accessibility assertions with axe or equivalent tooling

### Keep Manual

- Visual polish and spacing
- Color contrast review
- License/account state checks
- Payment gateway sandbox checks
- Third-party native integration connection flows
- Google Maps autocomplete checks
- Plugin update exploratory testing
- Email notification content unless a reliable mail log is available
- Security negative exploratory checks
