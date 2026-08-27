# Portfolio — Alex Fialko (Flowe)

Personal portfolio site: bilingual (RU/EN), dark/light themes, case-study pages.

**Live:** https://portfolio-merseis-projects.vercel.app

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Base UI (shadcn) · next-themes

## How it works

- **Localisation** — routes live under `app/[locale]`, with `ru` as the default. `proxy.ts`
  prefixes unprefixed paths and skips `/` so the root redirect isn't hit twice. Copy is
  kept out of components in `lib/dictionaries/{ru,en}.ts`.
- **Case studies** — described as data in `lib/cases.ts` and rendered by the single
  `app/[locale]/work/[slug]` route, so adding a project means adding an entry, not a page.
- **Theming** — `next-themes` with a class-based Tailwind 4 dark mode; no flash on load.
- **Components** — shadcn primitives on Base UI in `components/ui`, page sections in
  `components/site`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md).
