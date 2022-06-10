module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: [],
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontSize: {
      'xxs': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    // screens: {
      // 'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      
      zIndex: {
        '-50': -50,
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '25': 25,
        '75': 75,
        '90' : 90,
        '100': 100,
        'auto': 'auto',
      },
      spacing: {
        // '5.5': '1.25rem',
        '-20' : '-5rem',
        '28r' : '28rem',
        '29r' : '29rem',
        '30r' : '30rem',
        '31r' : '31rem',
        '32r' : '32rem',
        '33r' : '33rem',
        '34r' : '34rem',
        '35r' : '35rem',
        '52r' : '52rem',
        '100': '100rem',
      },
      height: {
        "sPrice": "33rem",
        "21": "21rem",
        "23": "23rem",
        "25": "25rem",
        "26": "26rem",
        "27": "27rem",
        "31": "31rem",
        "35": "35rem",
      },
      colors: {
        primary: {
          'bg-login': '#D9E2E8',
          'darkblue-lp': '#038BBE',
          'softblue-lp': '#02BFCC',
          'greens': '#21cc9e',
          'reds': '#ff4560',
          'base-lp': '#088CBF',
          'soft-lp': '#335EEA1A',
          'base-red': '#EF5734',
          'base-purple': '#BB86FC',
          'base-green': '#2BAF2B',
          'base-yellow': '#F2994A',
          900: '#4b16af',
          500: '#6A6A9F',
          400: '#B7B1E6',
          300: '#EDECFA'
        },
        secondary: {
          900: '#0277FF',
          800: '#0027FF',
          'soft-gray': '#6b728080',
          'green-900': '#4EB547',
          'green': '#36BD21',
          'light-green': '#0FD494',
          'light-green-100': '#6DF531',
          'red': '#E8045C',
          'red-100': '#F07878',
          'yellow': '#FFA40A',
          'yellow-100': '#FFD896',
          'black': '#354052',
          'aqua': '#96E4FC',
          'light-aqua': '#25B8FA',
          'light-blue': '#0792CF',
          'light-purple': '#EF4CFC',
          'purple': '#3A03CE',
          'light-pink': '#FDB4E1',
          'pink': '#FF0045',
          'table' : '#F3EDFE',
        }
      },
      // fontFamily: {
      //   'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      // },
      fontFamily:{
        sans:['Poppins'],
        pop:['Poppins'],
        lp: ['Righteous'],
        cc: ['Orbitron']
      },
      backgroundImage: {
        // 'paid': "url('/assets/images/paid.png')",
      },
      ringOffsetWidth: {
        '3': '3px',
        '6': '6px',
        '10': '10px',
      }
      // screens: {
      //   'print': {'raw': 'print'},
      // }
    },
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'group-disabled', // Custom variant
    'disabled',
  ],
  variants: {
    extend: {
      textColor: ['active', 'focus'],
      ringWidth: ['hover', 'active'],
      ringOffsetWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
      ringOffsetColor: ['hover', 'active'],
      ring: ['hover', 'group-hover'],
      ringOffset: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
