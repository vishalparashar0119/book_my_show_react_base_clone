/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        darkBackground: {
          50: '#E8E9ED',
          100: '#DDDEE4',
          200: '#C6C9D3',
          300: '#AFB3C1',
          400: '#989DAF',
          500: '#81879D',
          600: '#6B728A',
          700: '#52586A',
          800: '#3A3E4B',
          900: '#21242B',
          950: '#15171B'
        },
        crimson: {
          50: '#F7B7BC',
          100: '#F5A5AB',
          200: '#F18089',
          300: '#ED5B66',
          400: '#E93644',
          500: '#DF1827',
          600: '#AC131E',
          700: '#7A0D15',
          800: '#47080C',
          900: '#140204',
          950: '#000000'
        },
        dark: {
          50: '#898DA2',
          100: '#7E829A',
          200: '#696D86',
          300: '#575A6F',
          400: '#454858',
          500: '#333541',
          600: '#1A1B22',
          700: '#020202',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        button: {
          50: '#FFF5F7',
          100: '#FEE1E6',
          200: '#FCBAC6',
          300: '#FB93A5',
          400: '#F96B85',
          500: '#F84464',
          600: '#F60E37',
          700: '#C40729',
          800: '#8E051E',
          900: '#580312',
          950: '#3D020D'
        }
      },
      screens: {
        'led2': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'led': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'computer': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'tablet': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'iphone': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      
    },
    plugins: [],
  }
}
