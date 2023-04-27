/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          primary: "#FF6464",
          dark: "#f84c4c",
        },
        blue: {
          light: "#00A8CC",
          dark: "#098EAB",
        },
        gray: {
          lighter: "#E0E0E0",
          light: "#8695A4",
        },
        black: {
          base: "#000000",
          dark: "#21243D",
        },
      },
      fontSize: {},
      lineHeight: {
        15: "60px",
      },
      spacing: {
        7.5: "30px",
        9.5: "38px",
        15: "60px",
        150: "600px",
      },
      maxWidth: {
        88.5: "354px",
        92: "368px",
        95: "380px",
        104.5: "418px",
        150: "600px",
        195: "780px",
        214: "856px",
        323.5: "1294px",
        "1/2": "50%",
      },
      minHeight: {
        37.5: "150px",
        75: "300px",
      },
      screens: {
        default: "0px",
        xs: "450px",
        sm: "720px",
        md: "900px",
        lg: "1076px",
        gl: "1300px",
        xl: "1614px",
      },
    },
  },
  plugins: [],
};
