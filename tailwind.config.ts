import type { Config } from 'tailwindcss'
import form from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import animation from 'tailwindcss-animate'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,json}'],
  darkMode: ['selector'],
  theme: {
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      fontSize: {
        base: '.935rem',
      },
      colors: {
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        surface: 'hsl(var(--color-surface))',
        border: 'hsl(var(--color-border))',
        input: 'hsl(var(--color-input))',
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          foreground: 'hsl(var(--color-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--color-destructive))',
          foreground: 'hsl(var(--color-destructive-foreground))',
        },
      },
    },
    animation: {
      spotlight: 'spotlight 2s ease .75s 1 forwards',
      'meteor-effect': 'meteor 5s linear infinite',
    },
    keyframes: {
      spotlight: {
        '0%': {
          opacity: '0',
          transform: 'translate(-72%, -62%) scale(0.5)',
        },
        '100%': {
          opacity: '1',
          transform: 'translate(-50%,-40%) scale(1)',
        },
      },
      meteor: {
        '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
        '70%': { opacity: '1' },
        '100%': {
          transform: 'rotate(215deg) translateX(-500px)',
          opacity: '0',
        },
      },
    },
  },
  plugins: [form, animation, typography],
} satisfies Config
