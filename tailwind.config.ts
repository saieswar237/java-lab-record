import type { Config } from 'tailwindcss';

/**
 * Palette roles are defined once in src/styles/global.css as CSS custom
 * properties so the light/dark swap happens in one place. Tailwind maps
 * names onto them; no raw hex values live in components.
 */
export default {
  content: ['./src/**/*.{astro,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    // Replaces the default Tailwind palette outright.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ink: 'var(--ink)',
      ground: 'var(--ground)',
      surface: 'var(--surface)',
      keyword: 'var(--keyword)',
      string: 'var(--string)',
      console: 'var(--console)',
      // derived
      muted: 'var(--muted)',
      rule: 'var(--rule)',
      'console-ink': 'var(--console-ink)',
      'console-dim': 'var(--console-dim)',
      'console-rule': 'var(--console-rule)',
    },
    fontFamily: {
      display: ['"Martian Mono"', 'ui-monospace', 'monospace'],
      sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
    },
    fontSize: {
      meta: ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      sm: ['0.875rem', { lineHeight: '1.5' }],
      code: ['0.9375rem', { lineHeight: '1.7' }],
      base: ['1.0625rem', { lineHeight: '1.6' }],
      lg: ['1.1875rem', { lineHeight: '1.5' }],
      h2: ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      'display-l': ['2rem', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
      'display-xl': ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
    },
    extend: {
      maxWidth: { measure: '68ch' },
      spacing: { rail: '2.75rem' },
    },
  },
} satisfies Config;
