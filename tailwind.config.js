const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#f8961e",
      primaryDark: "#ED8607",
      dark: "#141414",
      customGrey: "#F1F1F1",
      customGrey2: "#E0E0E0",
    },
    extend: {
      // height: {
      //   128: "32rem",
      // },
      colors: {
        white: colors.white,
        slate: colors.slate,
        grey: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yelllow: colors.yelllow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,

        zIndex: {
          100: "100",
          "-100": "-100",
        },
      },
    },
  },
  plugins: [],
};
