// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });

//     config.resolve.alias = {
//       '@': './components'
//     }

//     return config;
//   }

// };

const withCSS = require('@zeit/next-sass')

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    url: false
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.alias = {
      '@': './components'
    }

    return config;
  }
})