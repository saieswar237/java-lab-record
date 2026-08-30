import fs from 'node:fs';
import path from 'node:path';

/**
 * Build-time check for a bound record. Runs during `astro build` only, so a
 * missing PDF produces an empty state on that week instead of failing the
 * build or shipping a dead link.
 */
export function recordExists(pdf: string): boolean {
  if (!pdf) return false;
  return fs.existsSync(path.join(process.cwd(), 'public', 'records', pdf));
}
