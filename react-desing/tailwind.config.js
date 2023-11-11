/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],  
}

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      gridTemplateColumns: {
        'cardsm': 'repeat(auto-fit, minmax(10rem, 1fr))     ' ,
          'cardmd':'repeat(4, minmax(20rem, 1fr))   '  ,
      },
      colors: {
        egreen: {
          '50': '#ecfdf7',
          '100': '#d1fae9',
          '200': '#a6f2d6',
          '300': '#6fe6c2',
          '400': '#36d1a7',
          '500': '#12b78f',
          '600': '#069575',
          '700': '#057762',
          '800': '#075e4e',
          '900': '#074d41',
          '950': '#022c26',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
});