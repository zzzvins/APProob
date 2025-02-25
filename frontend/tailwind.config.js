/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lexend-deca': ['Lexend Deca', 'sans-serif']
      },
      colors: {
        'eerie-black': '#19211B',
        'celadon': '#8CD69C',
        'racing-green': '#1B4228',
        'baby-powder': '#FCFDF9',
        'red-flag': '#AB2D25',
        'gray-border': '#272A26',
        'greenish-black': '#1A1C19',
        'pure-green': '#215130',

        // New colors
        'new-blue': '#3CACCF',
        'new-blue-light': '#72DBFD',
        'new-blue-dark': '#2C87A4',
        'new-red': "#d14b52",
      }
    },
  },
  plugins: [],
};
