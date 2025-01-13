const mix = require('laravel-mix');

mix.webpackConfig({
  stats: {
    children: true,
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
});

mix.js('resources/js/app.js', 'public/js')
  .vue()
  .sass('resources/scss/app.scss', 'public/css')
  .setPublicPath('public')
  .version();
