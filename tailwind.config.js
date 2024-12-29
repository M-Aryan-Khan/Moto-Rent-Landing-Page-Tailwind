/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        bioRhyme: ["BioRhyme Expanded", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'md-lg' : "896px",
        'lg': '1024px',
        'lg-lg': '1025px',
        'xl': '1280px',
        '2xl': '1400px',
      }
    },
  },
  plugins: [],
}

