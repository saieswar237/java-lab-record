# Java Lab Record — 25EU02122

A static site presenting eight weekly Java lab experiments, each on its own page
with the scanned record embedded inline.

Java Lab · 24CS281 · Siddhartha Academy of Higher Education · Instructor: Ramesh Sir

## Local development

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:4321/java-lab-record/>. Note the `/java-lab-record/`
path — the site is built for a GitHub Pages project site, so it is served from a
subdirectory in development too.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve `dist/` exactly as it will be published |
| `npm run check` | Type-check the manifest and components |

Always run `npm run preview` before pushing — it is the only way to see the
built output with the real base path applied.

## Adding Week 9

Two steps, no component edits.

1. Drop `week-09.pdf` into `public/records/`.
2. Append one object to `experiments` in [`src/data/labData.ts`](src/data/labData.ts):

```ts
{
  week: 9,
  title: 'Exception Handling',
  aim: 'To catch and handle checked and unchecked exceptions…',
  concepts: ['try', 'catch', 'finally', 'throw'],
  pdf: 'week-09.pdf',
  pages: 6,
  // optional:
  // sourceCode: `public class Demo { … }`,
  // sampleOutput: `…`,
}
```

The landing grid, the rail, the `/week/9/` route, prev/next navigation, the
search index, the About contents table and the page count all follow from that
one object. `sourceCode` and `sampleOutput` are optional — omit them and those
sections simply do not render.

If the PDF is missing at build time the build still succeeds and that week's page
shows a "record not uploaded yet" state, so you can add the manifest entry before
the scan is ready.

## Replacing a PDF

Overwrite the file in `public/records/` keeping the same filename, update `pages`
in the manifest if the page count changed, and push. Nothing else refers to the
file.

## Deployment

Push to `main`. That is the whole publishing step —
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site
and deploys it to GitHub Pages.

### One-time GitHub setup

1. Create an empty repository named **`java-lab-record`** on GitHub.
2. In [`astro.config.mjs`](astro.config.mjs), set `GITHUB_USER` to your GitHub
   username. It is only used to build absolute Open Graph URLs.
3. Push this repository to it.
4. On GitHub, go to **Settings → Pages → Build and deployment → Source** and
   select **GitHub Actions**.
5. The first push to `main` deploys the site to
   `https://<username>.github.io/java-lab-record/`.

If you name the repository something other than `java-lab-record`, change `base`
in `astro.config.mjs` to match, or every asset URL will 404.

## How it is put together

Astro, rather than a client-rendered SPA, because GitHub Pages has no rewrite
rules: Astro emits a real `week/5/index.html`, so a hard refresh on a deep link
works without a hash-router or a `404.html` fallback, and the site ships almost
no JavaScript.

Three production dependencies, all pinned to exact versions:

- **astro** — static site generation and routing
- **tailwindcss** — styling, with a custom theme in `tailwind.config.ts` that
  replaces the default palette entirely
- **@astrojs/tailwind** — wires the two together

Everything else is deliberate omission. Fonts are self-hosted `.woff2` files in
`public/fonts/`. Icons are inline SVG. Java syntax highlighting is a ~50-line
build-time function in `src/lib/java-highlight.ts` rather than a highlighting
library, so the code blocks use the site's own colour tokens. The published site
makes no network requests to anything outside itself.

### Layout

```
public/
  records/     week-01.pdf … week-08.pdf
  fonts/       self-hosted woff2
  og-image.png
  favicon.svg
src/
  data/labData.ts    the manifest — single source of truth
  components/
  layouts/
  lib/
  pages/             index, about, week/[n]
  styles/global.css  colour tokens, rail, print rules
```

No week data is hardcoded anywhere outside `src/data/labData.ts`.

### About the records

The eight PDFs were split from one submitted document. Where an experiment
begins partway down a page, that page appears in both of the weeks it belongs to
rather than being cut in half, so weeks 4/5, 5/6 and 7/8 each share a boundary
page.
