/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./assets/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'green': '#6ee3b4',
      'red': '#ec5288',
      'black': '#000000',
      'gray': '#A9A9A9',
      "lightblue": '#5072A7',
      'white': '#FFFFFF',
      'pink': '#FFC0CB',
      'purple': '#E6E6FA',
      'lightgray': '#BFBFBF',
      'blue': '#002244',
      'middleblue': '#6699CC'
    }
  },
  plugins: [],
}
