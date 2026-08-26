/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#006B46',
          'emerald-dark': '#044C33',
          'emerald-light': '#E6F4EE',
          gold: '#C5A059',
          'gold-light': '#F5EBE0',
          charcoal: '#111827',
          body: '#374151',
          linen: '#F9F8F6', // Soft Warm Off-White Linen
          card: '#FFFFFF', // Clean White Card
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        title: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      }
    },
  },
  plugins: [],
}
