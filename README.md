## Development

Install dependencies with your preferred package manager and start the dev server:

```bash
pnpm install
pnpm dev
```

The app becomes available on [http://localhost:3000](http://localhost:3000).

## Testing

| Type | Command | Notes |
| --- | --- | --- |
| Unit / integration | `pnpm test` | Runs Jest + Testing Library with jsdom. |
| Watch mode | `pnpm test:watch` | Ideal while iterating on components. |
| E2E (headed) | `pnpm e2e` | Starts Cypress UI; be sure `pnpm dev` is running. |
| E2E (CI/headless) | `pnpm e2e:headless` | Uses Cypress run mode for pipelines. |

The Jest suite currently covers shared UI primitives (`Button`, `Card` family) and utilities (`cn`). Cypress checks the landing page renders its primary call-to-action to guard against regressions across the full stack.

## Tooling

- **Biome** handles linting/formatting (`pnpm lint`, `pnpm format`, `pnpm check:ci`).
- **TypeScript** strict mode ensures the app stays type-safe (`pnpm typecheck`).
- **Semantic Release** automates versioning/publishing from GitHub Actions (`.github/workflows/release.yml`).
