# SureForms Business Coverage

The local WordPress site has both plugins active:

| Plugin | Status | Version |
|---|---:|---:|
| SureForms | Active | 2.8.1 |
| SureForms Business | Active | 2.8.2 |

Business coverage extends the base QA suite with cases for advanced fields, conditional workflows, calculations, multi-step flows, integrations, payments, entries, and responsive/accessibility behavior.

## Business Areas Added

| Area | Coverage Examples |
|---|---|
| Business setup | Plugin active state, dependency on core SureForms, version, license/settings access |
| Pro fields | File Upload, Signature, Rating, NPS, Date Picker, Time Picker, Slider, Hidden, HTML, Repeater |
| Multi-step forms | Page Break availability, next/back navigation, validation across steps, progress UI |
| Conversational forms | Conversational layout and submission |
| Conditional logic | Show/hide fields, hidden required field skip, visible required validation |
| Conditional confirmations | Different success messages or redirects based on submitted values |
| Conditional emails | Trigger or skip notifications based on rules |
| Calculations | Live total calculation, recalculation, invalid numeric input handling |
| Quiz | Quiz creation, score display, quiz entry data |
| Dynamic options | Populate/select options from configured dynamic sources |
| Webhooks | Save webhook endpoint, trigger webhook, skip conditional webhook |
| Native integrations | Google Sheets, Mailchimp, HubSpot, Notion connector flows |
| Payments | PayPal availability, sandbox configuration, payment method display |
| Spam and maps | CAPTCHA/honeypot settings, Google Maps address autocomplete |
| Entries | Pro field values in entries and exports |
| Accessibility/responsive | Multi-step keyboard flow, signature accessibility, mobile upload, mobile steps |
| Regression | Business frontend assets load without console errors |

## Practical Execution Notes

- Prioritize frontend automation for multi-step, conditional logic, calculations, ratings, and console-error checks.
- Keep payment, email, Google Maps, and third-party integration tests manual unless sandbox/API credentials are available.
- File upload can be automated once stable upload restrictions are configured in the test form.
- Entry verification can be automated later after confirming the admin entries URL and selectors.
