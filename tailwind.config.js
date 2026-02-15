/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },

      colors: {
        "dark-gray": "#151419",
        "med-gray": "#23242A",
        "light-gray": "#FEF2DB",
        "neutral-gray": "#F7E5C3",
        "accent-blue": "#2c92d1",
        "harbour-blue": "#024A62"
      }
    },
  },
  plugins: [],
}

