/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0A0A0A', 2: '#1A1A1A', 3: '#6B7280' },
        brand: { DEFAULT: '#4F46E5', light: '#818CF8', dim: '#EEF2FF' },
        paper: '#FFFFFF',
        line: '#E5E7EB',
        canvas: '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
