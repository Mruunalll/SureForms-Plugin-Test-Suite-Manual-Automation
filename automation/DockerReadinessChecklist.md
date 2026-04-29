# Docker Readiness Checklist

Last updated: 2026-04-29

## Docker Readiness Score

Docker readiness score: 100/100

This score means Docker is fully prepared for repeatable Playwright execution against the local WordPress test site. It does not mean the full SureForms form suite passes yet. Full form execution is still blocked until `/qa-test-form/` exists in WordPress.

## Readiness Matrix

| Requirement | Status | Evidence |
|---|---|---|
| Docker Desktop installed | Complete | `DockerStatus.md` |
| Docker CLI available | Complete | `DockerStatus.md` |
| Docker Compose available | Complete | `DockerStatus.md` |
| Playwright Dockerfile exists | Complete | `Dockerfile` |
| Compose service exists | Complete | `docker-compose.yml` |
| Official Playwright base image used | Complete | `mcr.microsoft.com/playwright:v1.59.1-noble` |
| npm dependencies installed during build | Complete | `Dockerfile` |
| Test command configured | Complete | `Dockerfile`, `docker-compose.yml` |
| Local WordPress host mapping configured | Complete | `extra_hosts: surefroms.test:host-gateway` |
| Test result volume configured | Complete | `automation/test-results:/app/test-results` |
| HTML report volume configured | Complete | `automation/playwright-report:/app/playwright-report` |
| Environment variables passed through | Complete | `BASE_URL`, `FORM_PATH`, `HEADLESS`, `PW_RETRIES`, `PW_WORKERS` |
| Build command documented | Complete | `DockerStatus.md`, `README.md`, `automation/README.md` |
| Smoke command documented | Complete | `docker:smoke` |
| Doctor command documented | Complete | `docker:doctor` |
| Full test command documented | Complete | `docker:test` |
| Caveat for blocked form tests documented | Complete | `DockerStatus.md` |

## Supported Docker Commands

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

## Current Execution Boundary

Docker readiness is complete. The Dockerized smoke path can verify the framework and local WordPress reachability. Dockerized form tests still require the WordPress page `/qa-test-form/` to exist and contain the expected SureForms fields.

## Latest Verification

```text
docker compose config --quiet: passed
../.tools/bin/npm run docker:build: passed
../.tools/bin/npm run docker:doctor: Playwright 1.59.1
../.tools/bin/npm run docker:smoke: 2 passed
```
