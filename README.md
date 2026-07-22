# Gabriel Gregon — personal site

A small personal website and future writing archive built with Next.js and exported as static files for GitHub Pages.

## Structure

```text
app/                 Pages, shared layout, metadata, sitemap, and visual system
.github/workflows/   GitHub Pages deployment
blog/posts/          One self-contained folder per article
assets/docs/         Résumé source drafts
```

The site intentionally has no project database, content schema, CMS, backend, or application state. The homepage is a concise introduction; `/writing/` is the future article archive; `/resume/` is a short professional record.

## Development

Use Node.js 24, then run:

```sh
npm install
npm run dev
```

Open the URL printed by Next.js, usually `http://localhost:3000`.

## Validation

```sh
npm run typecheck
npm run lint
npm run build
```

Or run all three checks with `npm run check`.

The static production site is written to `out/`.

## Writing an article

Copy `blog/posts/_template/` to a folder named with the article slug. Keep the article text and every related image together:

```text
blog/posts/my-article/
├── index.md
├── cover.jpg
└── images/
    └── example.jpg
```

Complete the frontmatter in `index.md` and set `published: true` when the article is ready. Published posts automatically appear in the archive, receive a `/writing/<slug>/` route, and are added to the sitemap. See `blog/README.md` for image syntax and the complete workflow.

## GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` tests and builds the site on pushes to `main`. It obtains the correct repository base path from GitHub Pages, so links also work for project sites hosted below `/<repository>/`.

In GitHub, select **Settings → Pages → Build and deployment → GitHub Actions**. A future custom domain can be configured in the same Pages settings without changing the application architecture.

## Content that still needs confirmation

- Replace the visibly labeled homepage introduction placeholder with Gabriel’s final personal copy.
- Confirm the canonical résumé/PDF workflow before adding a downloadable file.
- Confirm the final production URL fallback in `app/layout.tsx` and `app/sitemap.ts`.
