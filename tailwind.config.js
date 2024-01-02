/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        font: '#2f3640',
        back: '#f5f6fa',
        main: '#00a8ff',
        accent: '#0097e6',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
