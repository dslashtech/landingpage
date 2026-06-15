/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        display: ['var(--font-syne)'],
        bebas: ['var(--font-bebas)'],
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#0F0F0F',
        primary: {
          DEFAULT: '#FF5E00',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FF5E00',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#DEDFE0',
          foreground: '#838585',
        },
        accent: {
          DEFAULT: '#DEDFE0',
          foreground: '#0F0F0F',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F0F0F',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F0F0F',
        },
        border: '#DEDFE0',
        input: '#DEDFE0',
        ring: '#FF5E00',
        textPrimary: '#0F0F0F',
        textMuted: '#838585',
        cardBg: 'rgba(255, 255, 255, 0.6)',
        // Neutral ramp anchored on the brand greys (#DEDFE0, #838585, #0F0F0F),
        // with a few derived in-between shades for hierarchy.
        slate: {
          50: '#F4F5F5',
          100: '#DEDFE0',
          200: '#DEDFE0',
          300: '#C2C3C4',
          400: '#838585',
          500: '#838585',
          600: '#5C5E5E',
          700: '#2A2B2B',
          800: '#1A1A1A',
          900: '#0F0F0F',
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        blob: 'blob 7s infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}
