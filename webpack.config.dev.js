const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  devServer : {
    port: 3000,
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ]
});