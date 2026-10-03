# Verification record

[Overview](../README.md) · [Machine-readable evidence](verification.json)

Local reference checks ran on 2026-10-03 with **Node v22.16.0**. The machine-readable record contains the captured output rather than an invented transcript.

## Executable checks

Command: `node --test`. Exit code: **0**. 3 tests passed.

Re-run from this repository with `npm test`. There are no external npm dependencies. The Git fixture creates and removes only its specifically named temporary repository.

## Browser evidence

Not applicable: M001 is a Git/CLI exercise.

No browser behavior is claimed.

## Reproduce the important observation yourself

Inspect git log --oneline --reverse, then git show the opening-time commit. Run npm run receipt with nothing staged. On a new practice branch, change only the notice, stage it, and run the helper again. Do not stage your personal journal.

Record viewport, input, expected result and actual result. For interaction failures, verify that correcting the input produces a normal result and does not leave stale error styling or stale output. For a layout failure, distinguish document overflow from an intentionally scrollable table region.

## Limits

These observations cover the listed fixtures and one installed browser. They are not a full cross-browser, accessibility, production-security or performance audit. There is no real external service to validate. Static pages use a lightweight link check in CI; the manual/browser observations remain essential. New stories require new evidence after your changes.

The GitHub Actions workflow runs `npm test` on push and pull request. Its configuration is included; an actual remote success must be verified on GitHub separately. Do not infer it merely from this local report.
