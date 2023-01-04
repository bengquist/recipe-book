/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: "#D6CDA4",
        "light-tan": "#EEF2E6",
        "light-green": "#3D8361",
        "dark-green": "#1C6758",
      },
    },
  },
  plugins: [],
};
