const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      dark: "#383861",
      muted: "#747487",
      primary: "#3361E0",
      activeMenu: "#EBF2FD",
      strokeColor: "#EEEEF1",
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
