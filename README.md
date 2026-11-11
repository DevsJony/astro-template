# Astro Template

Astro + React + Tailwind CSS v4 + shadcn/ui, deployed to Cloudflare Workers.

## Commands

| Command                 | Action                                          |
| :---------------------- | :---------------------------------------------- |
| `pnpm install`          | Install dependencies                            |
| `pnpm dev`              | Start dev server at `localhost:4321`            |
| `pnpm build`            | Build to `./dist/`                              |
| `pnpm preview`          | Build and preview locally with Wrangler         |
| `pnpm deploy`           | Build and deploy to Cloudflare Workers          |
| `pnpm type-check`       | Run `astro check` and ESLint                    |
| `pnpm cf-typegen`       | Regenerate binding types from `wrangler.jsonc`  |
| `pnpm dlx shadcn add x` | Add a shadcn/ui component                       |

Before the first deploy change `name` in `wrangler.jsonc`.
