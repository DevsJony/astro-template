- Always check types using `pnpm run type-check`.
- Always use shadcn skill for UI components and interacting with shadcn.
- Prefer `.astro` components. Use React components (`.tsx`) only when interactivity is needed and hydrate them with the smallest fitting `client:*` directive.
- Do not use long dashes (em dashes or en dashes like "—" or "–"). Always use a regular hyphen "-" instead. Also, do not use typographic or curly quotation marks such as „ ” or “ ”. Always use standard straight double quotes " for all quotations.
- Never make try catches without logging the error, and never ignore errors silently. Always log the error with context.
- When using [Convex](https://www.convex.dev/) for authentication always use Better Auth https://better-auth.com/docs/integrations/convex
- When you want email sending:
  - Plain Astro on cloudflare workers: Use `send_email` binding (https://developers.cloudflare.com/email-service/configuration/send-bindings/)
  - With Convex: Send emails through Cloudflare Email Service through API using their library [cloudflare](https://www.npmjs.com/package/cloudflare) ([docs](https://github.com/cloudflare/cloudflare-typescript/blob/main/src/resources/email-sending/api.md)).
- When you want to use Cloudflare D1 then always use Drizzle ORM for working with SQL.
- Access Cloudflare bindings via `import { env } from "cloudflare:workers"`. After changing `wrangler.jsonc` run `pnpm run cf-typegen`.
- To interact with Convex use CLI.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
