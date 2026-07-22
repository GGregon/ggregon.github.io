# Posts

Each post lives in its own folder. The folder name is the public URL slug.

```text
blog/posts/my-post/
├── index.md
├── cover.jpg
└── images/
    └── example.jpg
```

Start by copying `posts/_template/`. A post appears on the site only when its frontmatter contains `published: true`. The homepage uses the newest post marked `featured: true`, or the newest published post when none is featured.

Use relative Markdown paths for images inside the article:

```md
![Accessible description](./images/example.jpg "Optional visible caption")
```

The build copies image assets to the static export automatically. Recommended cover format: JPG, PNG, WebP, AVIF, GIF, or SVG with a 3:2 aspect ratio.
