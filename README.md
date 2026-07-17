# Gabriel Gregon — Portfolio & Blog

Personal portfolio/résumé + blog, built with plain HTML/CSS/JS and hosted on
GitHub Pages.

## Structure

```
index.html          Home page (about, experience, projects, skills, contact)
blog/index.html      Blog post listing
blog/posts/*.html    Individual blog posts
css/style.css        Shared styles (light/dark theme included)
js/main.js           Theme toggle + active-nav-link highlighting
assets/              Images, resume PDF, etc.
.nojekyll            Tells GitHub Pages to serve files as-is (skip Jekyll processing)
```

## Editing content

- **Home page**: edit [index.html](index.html) directly — replace the
  placeholder name, title, bio, experience, projects, skills, and contact
  links.
- **Resume**: drop a PDF at `assets/resume.pdf` (the "Download résumé" button
  on the home page already links there).
- **New blog post**:
  1. Copy `blog/posts/welcome.html` to a new file, e.g.
     `blog/posts/2026-08-01-my-post.html`.
  2. Edit its title, date, and body.
  3. Add a matching entry at the top of `blog/index.html`'s post list.

## Local preview

Open `index.html` directly in a browser, or serve it locally:

```
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `GGregon.github.io` for a user site,
   or any name for a project site).
2. Push this repo to it:
   ```
   git remote add origin https://github.com/GGregon/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Source**, select the `main`
   branch and `/ (root)` folder, then save.
4. Your site will be live at `https://GGregon.github.io/` (user site) or
   `https://GGregon.github.io/REPO_NAME/` (project site) within a
   minute or two.

### Custom domain (optional)

Add a `CNAME` file at the repo root containing just your domain
(e.g. `www.yourdomain.com`), then configure your DNS provider to point at
GitHub Pages per
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
