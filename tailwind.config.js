/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "767px",
      md: "768px",
      lg: "991px",
      xl: "1200px",
      xll: "1440px",
    },
    colors: {
      "white-full": "#ffffff",
      "black-fully": "#000000",
      "gray-cc": "#CCCCCC",
      "gray-6e": "#6E6E6E",
      "gray-80": "#809FB8",
      "gray-e6": "#E6E6E6",
      "gray-4f": "#4F4F4F",
      "gray-de": "#DEDEDE",
      "gray-70": "#707070",
      "gray-9a": "#9A9A9A",
      "gray-87": "#878787",
      "orange-f8": "#F88A0D",
      "orange-e8": " #E80707",
      "blue-27": "#273382",
      "green-04": "#04B909",
      "yellow-ff": "#FFE3A4",
    },
    fontSize: {
      "22-lg": ["22px", "30px"],
    },
    extend: {
      boxShadow: {
        "3xl-black": "0px 3px 6px #00000008",
      },
    },
  },
  plugins: [require("daisyui")],
};
