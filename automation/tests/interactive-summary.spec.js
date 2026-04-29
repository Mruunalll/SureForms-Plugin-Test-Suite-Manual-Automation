const { test, expect } = require('@playwright/test');

// This test is intentionally interactive. Run it with:
// INTERACTIVE_DEMO=true OBSERVE_MS=300000 npx playwright test tests/interactive-summary.spec.js --project=chromium --headed --workers=1

test.use({
  headless: false
});

test.describe('Interactive headed Chromium demo', () => {
  test('runs a sample scenario and opens a results tab', async ({ page }, testInfo) => {
    const observeMs = Number(process.env.OBSERVE_MS || 300000);
    const steps = [];
    const startedAt = new Date();
    let scenarioError;

    // Keep the Playwright Test timeout longer than the observation window.
    test.setTimeout(observeMs + 45000);

    // Small reusable step helper. Add more calls to this helper as the suite grows.
    async function runStep(name, action) {
      const started = Date.now();

      try {
        await action();
        steps.push({
          name,
          status: 'PASS',
          durationMs: Date.now() - started,
          message: ''
        });
      } catch (error) {
        steps.push({
          name,
          status: 'FAIL',
          durationMs: Date.now() - started,
          message: error.message
        });
        throw error;
      }
    }

    try {
      await runStep('Open local WordPress homepage', async () => {
        const response = await page.goto('/');
        expect(response.status()).toBeLessThan(400);
      });

      await runStep('Verify site title link is visible', async () => {
        await expect(page.getByRole('link', { name: /sureforms/i }).first()).toBeVisible();
      });

      await runStep('Click the Sample Page navigation link', async () => {
        await page.getByRole('link', { name: /sample page/i }).click();
        await expect(page).toHaveURL(/sample-page/);
      });

      await runStep('Verify Sample Page content is visible', async () => {
        await expect(page.getByRole('heading', { name: /sample page/i })).toBeVisible();
      });
    } catch (error) {
      scenarioError = error;
    } finally {
      const finishedAt = new Date();
      const status = scenarioError ? 'FAIL' : 'PASS';
      const summaryHtml = buildSummaryHtml({
        status,
        baseURL: testInfo.project.use.baseURL,
        startedAt,
        finishedAt,
        durationMs: finishedAt - startedAt,
        steps,
        error: scenarioError
      });

      await testInfo.attach('interactive-summary.html', {
        body: summaryHtml,
        contentType: 'text/html'
      });

      // Open a new browser tab with a custom HTML result summary.
      const summaryPage = await page.context().newPage();
      await summaryPage.setContent(summaryHtml, { waitUntil: 'domcontentloaded' });
      await summaryPage.bringToFront();

      // Keep the headed browser visible for manual observation.
      // Override with OBSERVE_MS, for example OBSERVE_MS=10000 for 10 seconds.
      await summaryPage.waitForTimeout(observeMs);
    }

    if (scenarioError) {
      throw scenarioError;
    }
  });
});

function buildSummaryHtml({ status, baseURL, startedAt, finishedAt, durationMs, steps, error }) {
  const statusClass = status === 'PASS' ? 'pass' : 'fail';
  const rows = steps
    .map(
      (step, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHtml(step.name)}</td>
          <td><span class="pill ${step.status.toLowerCase()}">${step.status}</span></td>
          <td>${step.durationMs} ms</td>
          <td>${escapeHtml(step.message)}</td>
        </tr>`
    )
    .join('');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Playwright Interactive Test Summary</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f6f8fb;
        color: #172033;
      }
      main {
        max-width: 980px;
        margin: 40px auto;
        padding: 32px;
        background: #ffffff;
        border: 1px solid #d9e1ec;
        border-radius: 8px;
      }
      h1 {
        margin-top: 0;
        font-size: 28px;
      }
      .status {
        display: inline-block;
        padding: 8px 14px;
        border-radius: 999px;
        color: #ffffff;
        font-weight: 700;
      }
      .status.pass,
      .pill.pass {
        background: #16803c;
      }
      .status.fail,
      .pill.fail {
        background: #b42318;
      }
      .meta {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px 24px;
        margin: 24px 0;
      }
      .meta div {
        padding: 12px;
        background: #f8fafc;
        border: 1px solid #e5e9f0;
        border-radius: 6px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }
      th,
      td {
        padding: 12px;
        border-bottom: 1px solid #e5e9f0;
        text-align: left;
        vertical-align: top;
      }
      th {
        background: #f1f5f9;
      }
      .pill {
        display: inline-block;
        min-width: 52px;
        padding: 4px 8px;
        border-radius: 999px;
        color: #ffffff;
        font-size: 12px;
        font-weight: 700;
        text-align: center;
      }
      pre {
        white-space: pre-wrap;
        padding: 16px;
        background: #111827;
        color: #f9fafb;
        border-radius: 6px;
        overflow: auto;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Playwright Interactive Test Summary</h1>
      <p><span class="status ${statusClass}">${status}</span></p>
      <section class="meta">
        <div><strong>Base URL</strong><br>${escapeHtml(baseURL || '')}</div>
        <div><strong>Duration</strong><br>${durationMs} ms</div>
        <div><strong>Started</strong><br>${startedAt.toLocaleString()}</div>
        <div><strong>Finished</strong><br>${finishedAt.toLocaleString()}</div>
      </section>
      <h2>Step Results</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Step</th>
            <th>Status</th>
            <th>Duration</th>
            <th>Log</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      ${error ? `<h2>Error</h2><pre>${escapeHtml(error.stack || error.message)}</pre>` : ''}
    </main>
  </body>
</html>`;
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

