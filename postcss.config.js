const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/*.html',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.css',
  ],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nesting'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}
