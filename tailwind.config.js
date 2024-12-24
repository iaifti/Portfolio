const { link, ins } = require('framer-motion/client');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      navy:'#14213d',
      orange:'#fca311',
      offwhite:'#e5e5e5',
      white:'#ffffff',
      black:'#000000',
      youtube:'#FF0000',
      github: '#181717',
      linkedin: '#0077B5',
      instagram: '#C13584',
      gmail: '#D44638',
    },

    fontFamily: {
      signika: ['Signika'],
      nunito: ['Nunito'],
      overpass: ['Overpass'],
    },
  },
  plugins: [],
}

