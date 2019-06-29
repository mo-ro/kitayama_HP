const path = require('path');
const withCSS = require('@zeit/next-sass');

const globalSass = [
  path.join(process.cwd(), 'style/reset.scss'),
  path.join(process.cwd(), 'https://fonts.googleapis.com/css?family=Montserrat|Noto+Sans+JP&display=swap'),
  path.join(process.cwd(), 'style/breakpoint.scss'),
  path.join(process.cwd(), 'style/color.scss'),
  path.join(process.cwd(), 'style/font.scss'),
  path.join(process.cwd(), 'style/appearance.scss'),
]

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    url: false
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }, {
      enforce: "pre",
      test: /\.scss$/,
      loader: "sass-resources-loader",
      options: {
        resources: globalSass
      } 
    },
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
      });

    config.resolve.alias = {
      '@': './components'
    }

    return config;
  }
})