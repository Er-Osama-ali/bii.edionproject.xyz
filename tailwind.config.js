/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d3c9c1",
        secondary: "#e8e3df",
        ali:"#eeebe8"


      },
      gridTemplateColumns: {
        // Custom grid columns for 20 boxes per row
        '20': 'repeat(20, minmax(0, 1fr))',
      },
    },
    
    
  },
  plugins: [],
}

