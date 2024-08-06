

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  tailwindConfig: './styles/tailwind.config.js',
  content: ['./*.html'],
  theme: {
    extend: {
      fontSize: {
        '9xl': '12rem',
      },
    },
    colors: {
      transparent: 'transparent',
      'blue1': '#334257',
      'blue2': '#3A435E',
      'white': '#ffffff',
      'blue3': '#134074',
      'blue4': '#486474',
      'blue5': '#0077b6',
      'blue6': '#2364AA',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow
    },
    fontFamily: {
      sans: ['Poppin', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'noto': ['Noto Sans', 'sans-serif']
    },
    extend: {
      screens: {
       'screencard': { 'cardw': '(min-ascpect-ratio: 1100px)'},
       'tallscreen': { 'raw': '(min-ascpect-ratio: 13/20)'},
       'lg+': '1100px',
       'car2': '680px'
      },
      textShadow: {
        default: '2px 2px 4px #FFFFFF, -2px -2px 4px #FFFFFF, 2px -2px 4px #FFFFFF, -2px 2px 4px #FFFFFF',
      },
      spacing: {
          '128': '1000px',
          '110': '750px',
          '111': '500px',
          '256': '64rem',
      },
      
    },
  },
  
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animated'),
    require('tailwindcss-textshadow')
  ],
}
