/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': '#F8F5F2',
        'dark-bg': '#121212 ',
        'accent-light': '#FF5722',
        'accent-dark': '#F7F7F7',
        'light-text': '#2C2C2C',
        'dark-text': '#F7F7F7',
        'light-border': '#E6E1D8',
        'dark-border': '#444444',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}