/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Raleway", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px"
      },
      backgroundImage: {
        'hero': "url('/src/assets/imgs/hero-bg.jpg')",
        'about': "url('/src/assets/imgs/about.jpg')",
      },
      colors: {
        'h1Color': 'rgb(44, 73, 100)',
        'pColor': 'rgb(119, 119, 119)',
        'iconsBg': 'rgb(160, 188, 213)',
        'arrowColor': 'rgb(28, 132, 227)',
      },
    },
  },
  plugins: [],
};