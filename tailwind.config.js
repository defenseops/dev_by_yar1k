/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#F0F0F0', 2: '#D1D5DB', 3: '#9CA3AF' },
        brand: { DEFAULT: '#818CF8', light: '#A5B4FC', dim: 'rgba(129,140,248,0.1)' },
        paper: '#0A0A0A',
        line: 'rgba(255,255,255,0.08)',
        canvas: '#111111',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: { DEFAULT: 'rgb(var(--primary) / <alpha-value>)', foreground: 'rgb(var(--primary-foreground) / <alpha-value>)' },
        secondary: { DEFAULT: 'rgb(var(--secondary) / <alpha-value>)', foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)' },
        accent: { DEFAULT: 'rgb(var(--accent) / <alpha-value>)', foreground: 'rgb(var(--accent-foreground) / <alpha-value>)' },
        destructive: { DEFAULT: 'rgb(var(--destructive) / <alpha-value>)', foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)' },
        border: 'rgb(var(--border))',
        input: 'rgb(var(--input))',
        ring: 'rgb(var(--ring) / <alpha-value>)',
        muted: { DEFAULT: 'rgb(var(--muted) / <alpha-value>)', foreground: 'rgb(var(--muted-foreground) / <alpha-value>)' },
        card: { DEFAULT: 'rgb(var(--card) / <alpha-value>)', foreground: 'rgb(var(--card-foreground) / <alpha-value>)' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
