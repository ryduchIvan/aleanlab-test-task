const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        cover: "#E6E9F2",
        mobile: "#EFF0F5",
        button: "#384564",
        singBoardBlue: "rgba(161, 177, 219, 0.317343)",
        singBoardYellow: "rgba(255, 207, 0, 0.15)",
      },
      borderColor: {
        singBoardBlue: "rgba(85, 105, 158, 0.3)",
        singBoardYellow: "#FFCF00"
      },
      colors: {
        primaryBlue: "#3A4562",
        primarySilver: "#878D9D",
        singBoardYellow: "#988B49",
        singBoardBlue: "#55699E",
        opacityBlue: "rgba(56, 65, 93, 0.355988)"
      }, 
      letterSpacing: {
        tightest: '-.05em',
      }, 
      fontFamily: {
        novaBold: ["Nova-bold", "arial"], 
        novaRegular: ["Nova-regular", "arial"], 
        novaLight: ["Nova-light", "arial"], 
        novaSemiBold: ["Nova-semiBold", "arial"],
        robotoRegular: ["Roboto-regular", "arial"]
      },
    },
  },
  plugins: [],
}
