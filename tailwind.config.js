/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'jet-black': '#111111',
        'charcoal': '#252525',
        'gray-cloud': '#828282',
        'soft-gray': '#F6F6F1',
        'brand-green': '#1a6b1a',
        'brand-green-mid': '#4a9e1a',
        'brand-yellow': '#f5d800',
        'brand-orange': '#f5820a',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.2', letterSpacing: '-0.04em' }],
        'h2': ['60px', { lineHeight: '1.2', letterSpacing: '-0.04em' }],
        'h3': ['54px', { lineHeight: '1.3', letterSpacing: '-0.04em' }],
        'h4': ['48px', { lineHeight: '1.3', letterSpacing: '-0.04em' }],
        'h5': ['44px', { lineHeight: '1.3', letterSpacing: '-0.04em' }],
        'h6': ['36px', { lineHeight: '1.3', letterSpacing: '-0.04em' }],
        'body-lg': ['20px', { lineHeight: '1.3', letterSpacing: '-0.04em' }],
        'body-md': ['18px', { lineHeight: '1.3', letterSpacing: '-0.04em' }],
        'body-sm': ['16px', { lineHeight: '1.3', letterSpacing: '-0.04em' }],
        'body-xs': ['14px', { lineHeight: '1.3', letterSpacing: '-0.04em' }],
      },
      letterSpacing: {
        tight: '-0.01em',
      },
    },
  },
  plugins: [],
}