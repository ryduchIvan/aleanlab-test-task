const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        "cover": "#E6E9F2",
        "mobile": "#EFF0F5"
      },
      colors: {
        "primary-blue": "#3A4562",
        "primary-silver": "#878D9D"
      }, 
      letterSpacing: {
        tightest: '-.05em',
      }, 
      fontFamily: {
        novaBold: ["Nova-bold"], 
        novaRegular: ["Nova-regular", "arial"], 
        novaLight: ["Nova-light", "arial"], 
      },
    },
  },
  plugins: [],
}
