module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "sm": "93.75%",
        "xs": "87.5%",
        "2xs": "0.75rem",
      },
      fontFamily: {
        sans: ["Roboto", "sans"],
      },
      colors: {
        "gray-50": "#eeeef2",
        "gray-100": "#d1d2dc",
        "gray-200": "#b3b5c6",
        "gray-300": "#9699b0",
        "gray-400": "#797d9a",
        "gray-500": "#616480",
        "gray-600": "#4b4d63",
        "gray-700": "#353646",
        "gray-800": "#1f2029",
        "gray-900": "#181b23",
      },
      maxWidth: {
        "2sm": "22.5rem",
      },
    },
  },
  plugins: [],
};
