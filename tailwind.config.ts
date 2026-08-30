import type { Config } from 'tailwindcss';

/**
 * Palette roles live once in src/styles/global.css as CSS custom properties
 * so the light/dark swap happens in one place. Tailwind maps names onto
 * them; no raw hex values appear in components.
 *
 * The palette is quarried rather than printed: cool Pentelic marble, basalt
 * ink, Aegean blue and the verdigris of weathered bronze. Deliberately not
 * cream + terracotta.
 */
export default {
  content: ['./src/**/*.{astro,ts}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ink: 'var(--ink)',
      ground: 'var(--ground)',
      surface: 'var(--surface)',
      accent: 'var(--accent)',
      patina: 'var(--patina)',
      console: 'var(--console)',
      // derived
      muted: 'var(--muted)',
      rule: 'var(--rule)',
      stone: 'var(--stone)',
      'console-ink': 'var(--console-ink)',
      'console-dim': 'var(--console-dim)',
      'console-rule': 'var(--console-rule)',
    },
    fontFamily: {
      // Inscriptional capitals, cut from Roman lettering.
      display: ['Cinzel', 'Georgia', 'serif'],
      // Humanist old-style for reading.
      serif: ['"EB Garamond"', 'Georgia', 'serif'],
      mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
    },
    fontSize: {
      // Inscriptional capitals want air between them, not tight tracking.
      inscription: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.2em' }],
      meta: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      sm: ['0.9375rem', { lineHeight: '1.5' }],
      code: ['0.9375rem', { lineHeight: '1.7' }],
      base: ['1.125rem', { lineHeight: '1.65' }],
      lg: ['1.25rem', { lineHeight: '1.5' }],
      h2: ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.03em' }],
      'display-l': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.04em' }],
      'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.05em' }],
    },
    extend: {
      maxWidth: { measure: '66ch' },
    },
  },
} satisfies Config;
