/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A5F',
        'navy-dark': '#162D4A',
        green: '#2D6A4F',
        'green-light': '#3EBF70',
        'green-hover': '#1E5040',
        slate: '#4A5568',
        cream: '#F8F9FA',
        border: '#E2E8F0',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
