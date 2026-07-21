# Repository guide

## Purpose

This repository is a deliberately small personal page and future technical-writing archive for Gabriel Gregon. It uses Next.js App Router with TypeScript and exports static files for GitHub Pages. It has no database, backend, CMS, authentication, content schema, or runtime API.

Keep the site personal, concise, editorial, and easy to maintain. Do not rebuild it into a product dashboard or case-study platform unless real content creates that need.

## Important files

- `app/page.tsx`: concise introduction, writing preview, and low-emphasis projects-coming-soon note.
- `app/writing/page.tsx`: writing archive, intentionally empty until real articles exist.
- `app/resume/page.tsx`: concise web résumé.
- `app/globals.css`: complete visual system and responsive behavior.
- `app/layout.tsx`: shared header, footer, icon markup, site metadata, canonical URL fallback, and structured data.
- `app/sitemap.ts`: static sitemap.
- `.github/workflows/deploy-pages.yml`: static build and GitHub Pages deployment.

## Commands

Use Node.js 24.

```sh
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run check
```

The production export is written to ignored `out/`.

## Conventions

- Prefer direct page content over abstractions while the site is small.
- Add reusable components only for genuinely repeated UI.
- Keep the single-accent editorial palette, serif/sans/mono hierarchy, generous whitespace, and restrained motion.
- Preserve semantic HTML, heading order, keyboard access, visible focus, AA contrast, and reduced-motion behavior.
- Use `next/link` for internal routes so GitHub Pages `basePath` is applied.
- Mark unconfirmed text visibly as placeholder content.
- Do not add fake projects, articles, metrics, publication dates, or outcomes.
- Avoid cards everywhere, skill ratings, logo clouds, dashboards, decorative charts, glass effects, or heavy client-side libraries.

## GitHub Pages

`next.config.mjs` uses `output: "export"`, `trailingSlash: true`, and the optional build-time `PAGES_BASE_PATH`. The workflow supplies `PAGES_BASE_PATH` and `NEXT_PUBLIC_SITE_URL`. Leave them empty for local development.

Static export cannot use request-time rendering, Server Actions, ISR, middleware, or runtime redirects.

## Validation

After changes, run typecheck, lint, build, and `git diff --check`. Inspect `/`, `/writing/`, `/resume/`, and an invalid route at mobile and desktop widths. Check keyboard focus, icon labels, external-link behavior, metadata, and the emitted sitemap.

## Generated and protected files

Do not edit `.next/`, `out/`, `node_modules/`, `coverage/`, `next-env.d.ts`, or `.git/`. Preserve the user-owned untracked `assets/docs/*.tex` files. Do not publish a résumé PDF until its canonical source and build process are confirmed.

## Uncertainties

- The homepage About text is intentionally a placeholder awaiting Gabriel’s preferred personal wording.
- The checkout has no Git remote, so the production URL and Pages settings are unverified.
- The canonical résumé source and downloadable PDF workflow remain unconfirmed.
