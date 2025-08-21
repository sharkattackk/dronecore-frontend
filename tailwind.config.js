/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#151419",
        "med-gray": "#23242A",
        "light-gray": "F8F8FF"
      }
    },
  },
  plugins: [],
}

