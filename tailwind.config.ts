import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      fontSize: {
        // Display typography
        'display': [
          '6rem',
          {
            lineHeight: '1',
            letterSpacing: '0.2em',
            fontWeight: '700',
          },
        ],
        
        // Heading levels (h1-h6)
        'h1': [
          '4.5rem',
          {
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            fontWeight: '600',
          },
        ],
        'h2': [
          '3.75rem',
          {
            lineHeight: '1.15',
            letterSpacing: '-0.015em',
            fontWeight: '600',
          },
        ],
        'h3': [
          '3rem',
          {
            lineHeight: '1.2',
            letterSpacing: '-0.01em',
            fontWeight: '600',
          },
        ],
        'h4': [
          '2.25rem',
          {
            lineHeight: '1.3',
            fontWeight: '500',
          },
        ],
        'h5': [
          '1.875rem',
          {
            lineHeight: '1.4',
            fontWeight: '500',
          },
        ],
        'h6': [
          '1.5rem',
          {
            lineHeight: '1.4',
            fontWeight: '500',
          },
        ],
        
        // Body text variants
        'body-lg': [
          '1.25rem',
          {
            lineHeight: '1.6',
            fontWeight: '400',
          },
        ],
        'body-md': [
          '1rem',
          {
            lineHeight: '1.6',
            fontWeight: '400',
          },
        ],
        'body-sm': [
          '0.875rem',
          {
            lineHeight: '1.5',
            fontWeight: '400',
          },
        ],
        
        // Caption/small text
        'caption': [
          '0.75rem',
          {
            lineHeight: '1.4',
            letterSpacing: '0.05em',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        // ===================================================================
        // Brand colors - 12 base colors with CSS custom properties for opacity
        // ===================================================================
        
        // Primary brand core colors
        brandIndigo: 'hsl(var(--color-brand-indigo) / <alpha-value>)',      // #4F46E5
        brandBlue: 'hsl(var(--color-brand-blue) / <alpha-value>)',          // #3B82F6
        brandCyan: 'hsl(var(--color-brand-cyan) / <alpha-value>)',          // #06B6D4
        
        // Expanded palette colors
        brandViolet: 'hsl(var(--color-brand-violet) / <alpha-value>)',      // #8B5CF6
        brandPink: 'hsl(var(--color-brand-pink) / <alpha-value>)',          // #EC4899
        brandRose: 'hsl(var(--color-brand-rose) / <alpha-value>)',          // #F43F5E
        brandAmber: 'hsl(var(--color-brand-amber) / <alpha-value>)',        // #F59E0B
        brandEmerald: 'hsl(var(--color-brand-emerald) / <alpha-value>)',    // #10B981
        brandTeal: 'hsl(var(--color-brand-teal) / <alpha-value>)',          // #14B8A6
        brandSky: 'hsl(var(--color-brand-sky) / <alpha-value>)',            // #0EA5E9
        brandOrange: 'hsl(var(--color-brand-orange) / <alpha-value>)',      // #F97316
        brandLime: 'hsl(var(--color-brand-lime) / <alpha-value>)',          // #84CC16
        
        // ===================================================================
        // Semantic colors - for states and status indicators
        // ===================================================================
        success: 'hsl(var(--color-semantic-success) / <alpha-value>)',      // #10B981 (Emerald)
        warning: 'hsl(var(--color-semantic-warning) / <alpha-value>)',      // #F59E0B (Amber)
        error: 'hsl(var(--color-semantic-error) / <alpha-value>)',          // #EF4444 (Red)
        info: 'hsl(var(--color-semantic-info) / <alpha-value>)',            // #3B82F6 (Blue)
      },
      spacing: {
        // 4px-based spacing scale for consistent rhythm
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'base': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      maxWidth: {
        'prose': '65ch',
      },
    },
  },
  plugins: [],
} satisfies Config;

