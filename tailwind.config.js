/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#B0CC0D",
        yellow: "#FFA800",
      },
      fontFamily: {
        montserrat: '"Montserrat", sans-serif',
        roboto: '"Roboto", sans-serif',
        inter: '"Inter", sans-serif',
        nato: '"Noto Sans JP", sans-serif',
        flamenco: '"Flamenco", sans-serif'
      },


    },
  },
  plugins: [],
}
