const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/main.js',
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'static/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }],
      },
      {
        test: /\.(sc|c)ss$/,
        use: ['css-loader', 'sass-loader'],
      },
    ],
  },
  
  // devServer: {
  //   historyApiFallback: true,
  //   inline: true,
  //   port: 3000,
  //   hot: true,
  //   publicPath: '/',
  // },

  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
