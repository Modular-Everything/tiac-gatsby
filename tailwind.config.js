module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    aspectRatio: {
      square: [1, 1],
      '3/2': [3, 2],
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
          black: '#191919',
          'gray-300': '#d8d8d8',
          'gray-600': '#888',
        },
      },
    },
  },
  variants: {
    margin: ['last'],
  },
  plugins: [require('tailwindcss-aspect-ratio')()],
}
