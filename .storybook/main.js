const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.module.scss$/,
      use: [
        'style-loader',
        {
          loader: require.resolve('css-loader'),
          // options: {
          //   modules: true,
          // },
        },
        {
          loader: require.resolve('sass-loader'),
          // options: {
          //   modules: true,
          // },
        },
        // require.resolve('sass-resources-loader'),
      ],
      include: path.resolve(__dirname, '../'),
    })

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    })
    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}
