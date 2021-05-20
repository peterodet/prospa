const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  // jit: true,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['BRFirma', 'sans-serif'],
      },
      fontSize: {
        'xxs': '.625rem',
        '2.5xl': '1.75rem',
      },
      colors: {
        pink: {
          ...colors.orange,
          // 100: '#fcf8f7',
          // 200: '#fef5ec',
          500: '#FA4A84',
        },
        purple: {
          ...colors.purple,
          // 100: '#f2fcff',
          // 200: '#e1f7fe',
          // 300: '#e1f7fe',
          // 400: '#0797ce',
          500: '#7E51FF',
          // 600: '#006696',
          800: '#1C1335',
        },
        gray: {
          200: '#f4f8fb',
          300: '#EEEFF7',
          400: '#8397ab',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
