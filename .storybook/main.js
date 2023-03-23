const path = require('path')

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'))
    config.resolve.alias = {
      ...config.resolve.alias,
      '@next/font/google': require.resolve('./nextFontGoogle'),
    }
    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-material-ui',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
