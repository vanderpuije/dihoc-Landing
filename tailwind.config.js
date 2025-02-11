/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xlg: '1440px'
    },
    extend: {
      colors: {
        mainGreen: '#0F7173',
        lightGreen: '#869596',
        supLightGreen: '#0F7173',
        lightBlack: '#272932',
        paleWhite: '#E7ECEF',
        darkGrayishBlue: 'hsl(227,12%,61%)',
        veryDarkBlue: 'hsl(233,12%,13%)',
        VeryPaleRed: 'hsl(13,100%,96%)',
        veryLightGray: 'hsl(0,0%,98%)',
        
      }
    },
  },
  plugins: [],
}

