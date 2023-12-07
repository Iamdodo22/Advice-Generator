/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
                grey8: 'hsl(193, 38%, 86%)',
                green8: 'hsl(150, 100%, 66%)',
                GrayBlue: 'hsl(217, 19%, 38%)',
                GrayBlueDark: 'hsl(217, 19%, 24%)',
                DarkBlue: 'hsl(218, 23%, 16%)',

      },
      fontFamily: {
        manrope: ['Manrope']
      }
    },
  },
  plugins: [],
}

