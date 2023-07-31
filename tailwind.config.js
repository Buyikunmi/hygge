const colors = {
  carribeanGreen: {
    DEFAULT: "#00CC96",
    50: "#eafff6",
    100: "#cdfee8",
    200: "#a0fad7",
    300: "#63f2c3",
    400: "#25e2aa",
    500: "#00cc96",
    600: "#00a479",
    700: "#008365",
    800: "#006751",
    900: "#005544",
    950: "#003027",
  },
  mirage: {
    DEFAULT: "1a202c",
    50: "#f5f7fa",
    100: "#eaedf4",
    200: "#d1d9e6",
    300: "#a8b9d1",
    400: "#7993b7",
    500: "#58769f",
    600: "#455e84",
    700: "#394c6b",
    800: "#32415a",
    900: "#2d384d",
    950: "#1a202c",
  },
  red: {
    50: "#fff0f0",
    100: "#ffdddd",
    200: "#ffc0c0",
    300: "#ff9494",
    400: "#ff5757",
    500: "#ff2323",
    600: "#ff0000",
    700: "#d70000",
    800: "#b10303",
    900: "#920a0a",
    950: "#500000",
  },
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.mirage,
        green: colors.carribeanGreen,
        red: colors.red,
      },
    },
  },
  plugins: [],

  visibility: ["hover", "focus"],
  darkMode: "class",
};
