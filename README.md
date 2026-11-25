# hardpress.dev

Static site for GitHub Pages. No build step.

## Files
- `index.html` home page (projects, trainings, blog, docs)
- `style.css` all styling; colors are variables at the top (white, neon cyan highlights, near-black text) and under `[data-theme="dark"]`
- `site.js` dark mode toggle, code block copy buttons, share buttons
- `blog/first-post.html` copy for each new post
- `feed.xml` RSS; add an `<item>` for each post
- `sitemap.xml`, `robots.txt`, `site.webmanifest` SEO and app files
- `images/` favicon, app icons, and social share image (`og-image.png`)
- `CNAME` custom domain; keep it as the single line `hardpress.dev`

## Theme
The site is light by default. The footer button switches to dark and remembers the choice in the visitor's browser.

## Publish
1. Push these files to the `main` branch of your repo.
2. Repo Settings > Pages > Deploy from a branch > `main` / root.
3. Under Custom domain, enter `hardpress.dev`, save, then tick **Enforce HTTPS**.

## Namecheap DNS (Domain List > Manage > Advanced DNS)
Four A records, Host `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
One CNAME: Host `www`, Value `hardpress-dev.github.io`
Delete any default parking or URL redirect records.

## New posts
Copy `blog/first-post.html`, then add the post to `index.html`, `feed.xml`, and `sitemap.xml`.
