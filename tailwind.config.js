/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#cdb4db',  
        pinkLight: '#ffc8dd', 
        pinkSoft: '#ffafcc'   
      }
    },
  },
  plugins: [],
}