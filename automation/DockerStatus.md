# Docker + Playwright Setup Status

Last checked: 2026-04-29

## System Docker Status

```text
Docker Desktop: Installed
Docker CLI: 29.4.1
Docker Engine: 29.4.1
Docker Compose: v5.1.3
```

Docker CLI is available in new zsh terminal sessions through:

```text
/Applications/Docker.app/Contents/Resources/bin/docker
```

The zsh profile files were updated to include Docker Desktop's CLI path:

```text
~/.zprofile
~/.zshrc
```

## Project Docker Status

Docker readiness score:

```text
100/100
```

Docker files added:

```text
docker-compose.yml
automation/Dockerfile
automation/.dockerignore
automation/DockerReadinessChecklist.md
```

The Playwright Docker image builds successfully:

```text
sureforms-qa-testing-playwright:latest
```

Container smoke checks passed:

```text
Playwright: 1.59.1
surefroms.test resolves inside container
http://surefroms.test/ returns 200 from inside container
```

Latest verified Docker commands:

```text
docker compose config --quiet: passed
../.tools/bin/npm run docker:build: passed
../.tools/bin/npm run docker:doctor: Playwright 1.59.1
../.tools/bin/npm run docker:smoke: 2 passed
```

## Commands

From the project root:

```bash
docker compose build playwright
docker compose run --rm playwright npm run doctor
docker compose run --rm playwright npm run test:smoke
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

## Current Test Caveat

Docker and Playwright are ready, but the actual form tests will still fail until the WordPress page `/qa-test-form/` is created and contains the expected SureForms fields.

## Readiness Evidence

- `docker-compose.yml`
- `automation/Dockerfile`
- `automation/.dockerignore`
- `automation/DockerReadinessChecklist.md`
- `automation/package.json`
- `automation/playwright.config.js`
- `automation/.env.example`
