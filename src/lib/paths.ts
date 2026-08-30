const BASE = import.meta.env.BASE_URL;

/**
 * Joins a site-relative path onto the configured Vite/Astro base so every
 * link, asset and PDF keeps working when the site is served from a
 * subdirectory (GitHub Pages project sites) or from the root.
 */
export function withBase(path = ''): string {
  const root = BASE.endsWith('/') ? BASE : `${BASE}/`;
  const rest = path.replace(/^\//, '');
  return `${root}${rest}`;
}

/** Canonical URL for a week page, e.g. /java-lab-record/week/5/ */
export const weekHref = (week: number): string => withBase(`week/${week}/`);

/** Canonical URL for a bound record PDF. */
export const recordHref = (pdf: string): string => withBase(`records/${pdf}`);
