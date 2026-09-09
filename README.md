# Personal research site

Personal and research homepage of **Dominika Bohuslavová** (publishing as
*Dominika Draesslerová*) — PhD candidate in theoretical computer science at
CTU in Prague, working on compressed indices for biological sequence
collections.

## Structure

```
index.html          single page: About, Research, Publications, Teaching,
                    Education, Activities
css/styles.css      compiled Start Bootstrap "Resume" theme — do not hand-edit
css/custom.css      all site-specific styling and overrides
js/scripts.js       scrollspy, responsive nav, poster lightbox
assets/img/         photo, favicon, poster (PNG preview + PDF)
robots.txt          crawler directives
sitemap.xml         single-page sitemap
```

`css/styles.css` is a generated theme file. Keep every local change in
`css/custom.css`, which is loaded after it, so the theme can be regenerated
without losing customisations.

## Running it locally

The site is fully static, but the poster lightbox loads a PDF in an iframe,
so it needs to be served over HTTP rather than opened from the filesystem:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

Served by GitHub Pages from the default branch. If a custom domain is
re-added, put it in a `CNAME` file at the repository root and update the
absolute URLs in `index.html` (`<link rel="canonical">`, the `og:` tags and
the JSON-LD `url`/`image`) plus the `Sitemap:` line in `robots.txt`.

## Updating content

- **A new publication** — copy an `<li class="pub">` block in the
  `#publications` section and fill in title, authors, venue and DOI. Wrap your
  own name in `<span class="me">` so it stands out.
- **A new project** — copy an `<article class="project">` block in
  `#research`. Status and topic labels use `<span class="tag">`, with the
  `tag--ongoing` and `tag--published` modifiers for colour.
- **A conference, visit or course** — the `.link-list` and `.entry` blocks in
  `#activities`, `#teaching` and `#education` follow the same shape throughout.
