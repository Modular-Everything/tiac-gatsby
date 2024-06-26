module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
      maxWidth: '80rem',
    },
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
      '3/2': [3, 2],
      '40/23': [40, 23],
      '43/25': [43, 25],
      '140/171': [140, 171],
    },
    fontFamily: {
      serif: [
        'Tiempos Text',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
    extend: {
      colors: {
        brand: {
          'gray-25': '#fafafa',
          'gray-50': '#f6f6f6',
          'gray-100': '#ededed',
          'gray-300': '#d8d8d8',
          'gray-600': '#888',
          'gray-700': '#4a4a4a',
          'gray-800': '#3c3c3b',
          'gray-850': '#333',
          pink: '#ff8172',
          black: '#191919',
          'black-overlay': 'rgba(25,25,25,0.95)',
          'white-overlay': 'rgba(255,255,255, 0.9)',
        },
      },
      maxWidth: {
        xs: '16rem',
        '6xl': '80rem',
      },
      fontSize: {
        xxs: '0.625rem',
      },
      boxShadow: {
        focus: '0 0 30px rgba(0, 0, 0, 0.10)',
      },
      height: {
        login: 'calc(100vh - 5rem)',
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'last', 'odd'],
    fontSize: ['responsive'],
    opacity: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-aspect-ratio')(),
    require('tailwindcss-transitions')(),
  ],
}
