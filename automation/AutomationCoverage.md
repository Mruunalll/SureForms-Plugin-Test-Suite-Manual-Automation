# Playwright Automation Coverage Plan

## Phase 1: Smoke Tests

- Verify local site is reachable.
- Verify wp-admin login works.
- Verify SureForms plugin is active.
- Generate, publish, view, and submit an AI-created SureForms contact form.
- Verify QA form page loads.
- Verify core fields and submit button are visible.

## Phase 2: Frontend Form Tests

- Submit form with all valid data.
- Submit form with required fields only.
- Submit empty form and verify required messages.
- Submit missing Name.
- Submit missing Email.
- Submit missing Message.
- Submit invalid email formats.
- Verify success message appears after valid submission.
- Verify submit button is visible and enabled.

## Phase 3: UI and Responsive Tests

- Desktop layout smoke check.
- Mobile layout smoke check.
- Tablet layout smoke check.
- Verify no horizontal overflow on narrow viewport.
- Verify field labels are visible.
- Verify validation messages are visible.

## Phase 4: Edge and Negative Tests

- Long Name value.
- Long Message value.
- Whitespace-only required fields.
- Special characters in Name and Message.
- Rapid double-click on Submit.

## Phase 5: Admin/Data Tests

- Create form through admin.
- Edit existing form fields.
- Verify submission appears in entries.
- Verify stored entry values match submitted data.

## Phase 6: Business Feature Tests

- Verify SureForms Business plugin is active.
- Verify Business dependency keeps core SureForms active.
- Verify Business frontend assets load without console errors.
- Verify Rating/NPS submission.
- Verify Date Picker and Time Picker submission.
- Verify Slider value submission.
- Verify multi-step next/back navigation.
- Verify multi-step validation prevents progressing with missing required fields.
- Verify conditional logic shows and hides dependent fields.
- Verify hidden required conditional fields do not block submission.
- Verify visible required conditional fields validate correctly.
- Verify calculation totals update when inputs change.
- Verify rapid submission handling on Business forms.

## Phase 7: Business Automation Later

- File upload success and validation.
- Signature draw/clear/upload workflows.
- Repeater add/remove/nested validation.
- Conditional confirmation variants.
- Webhook trigger and skip behavior.
- Entries verification for uploaded files and signatures.
- PayPal sandbox checkout flow.
- Native integration connection smoke checks.

## Notes

The first automation implementation should focus on stable frontend selectors. Admin and builder automation can be added after the final form structure and plugin screens are stable.
