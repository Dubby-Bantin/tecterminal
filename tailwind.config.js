/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue: "#175CFF",
        primaryBlue2: "#E8EFFF",
        primaryYellow: "#E0C816",
        primaryGray: "#8E8F9F"
      }
    },
  },
  plugins: [],
}

