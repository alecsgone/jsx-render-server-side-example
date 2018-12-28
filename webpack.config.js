const webpack = require('webpack')
const path = require('path')
const HTMLPage = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-source-code',

  entry: {
    client: [
      'webpack-hot-middleware/client',
      path.resolve(__dirname, './src/client.js'),
    ]
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          extends: path.resolve(__dirname, './.babelrc'),
        },
      },
    ],
  },

  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: '/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
