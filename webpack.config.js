const path = require('path');
const webpack = require('webpack');
const package = require('./package');

module.exports = (env, argv) => {
  return {
    entry: './src/index.tsx',

    devtool: 'source-map',

    output: {
      path: path.resolve(__dirname, 'dist/js'),
      publicPath: '/js/',
      filename: 'bundle.js',
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      modules: ['node_modules', 'src']
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          include: /src/
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        },
      ]
    },

    plugins: [
      new webpack.BannerPlugin({
        banner: `bundle v${package.version}`
      })
    ],

    devServer: {
      hot: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      inline: true,
      historyApiFallback: true,
      contentBase: [
        path.join(__dirname, 'src/static'),
        path.join(__dirname, 'dist')
      ]
    }
  }
};
