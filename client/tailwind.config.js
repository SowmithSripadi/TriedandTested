/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#5cbdb9",
        secondaryColor: "#fbe3e8",
      },
    },
  },
  plugins: [],
};
