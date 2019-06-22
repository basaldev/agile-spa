const path = require('path');

module.exports = async ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: [
          require.resolve('ts-loader'),
          require.resolve('react-docgen-typescript-loader')
        ],
        include: [
          path.resolve(__dirname, '../src/')
        ],
        enforce: 'pre',
      }
    ]
  },
  resolve: {
    ...config.resolve,
    extensions: [
      ...config.resolve.extensions,
      '.ts',
      '.tsx'
    ],
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    alias: {
      ...config.resolve.alias,
    }
  },
  devtool: 'source-map',
});

