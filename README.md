# hardpress.dev

Static site for GitHub Pages. No build step.

## Files
- `index.html` home page (projects, trainings, blog)
- `style.css` all styling; colors are variables at the top (white, logo blue `#1e88db`, logo yellow `#fdb10a`, darker blue links, near-black text) and under `[data-theme="dark"]`
- `site.js` dark mode toggle, code block copy buttons, share buttons
- `blog/*.html` blog posts
- `feed.xml` RSS; add an `<item>` for each post
- `sitemap.xml`, `robots.txt`, `site.webmanifest` SEO and app files
- `images/favicon.svg` SVG logo favicon (keep your PNG/ICO/OG images in `images/`)
- `CNAME` custom domain; keep it as the single line `hardpress.dev`

## Theme
The site is light by default. The header button switches to dark and remembers the choice in the visitor's browser.

## Publish
1. Push these files to the `main` branch of your repo.
2. Repo Settings > Pages > Deploy from a branch > `main` / root.
3. Under Custom domain, enter `hardpress.dev`, save, then tick **Enforce HTTPS**.

## Namecheap DNS (Domain List > Manage > Advanced DNS)
Four A records, Host `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
One CNAME: Host `www`, Value `hardpress-dev.github.io`
Delete any default parking or URL redirect records.

## New posts
Copy an existing post in `blog/`, then add the post to `index.html`, `feed.xml`, and `sitemap.xml`.
