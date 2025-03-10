/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rampart': ['"Rampart One"', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}

