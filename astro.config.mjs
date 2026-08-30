import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub username. Used only to build absolute Open Graph URLs.
const GITHUB_USER = 'saieswar237';

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  // Project site on GitHub Pages -> served from /java-lab-record/
  base: '/java-lab-record/',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [tailwind({ applyBaseStyles: false })],
});
