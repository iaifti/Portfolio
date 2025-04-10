/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 30s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
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
    },
    

    fontFamily: {
      signika: ['Signika'],
      nunito: ['Nunito'],
      overpass: ['Overpass'],
      charm: ['Charm'],
      caveat: ['Caveat'],
      league: ['League Gothic'],
      poppins: ['Poppins'],
    },
  },
  plugins: [],
}

