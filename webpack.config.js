const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  mode: 'development', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test:/\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test:/\.jpg|jpeg|png|svg|gif|woff|eot|ttf|mp4|webm$/,
        use: [
          {
            loader: 'url-loader',
            options:{
              limit: 90000
            }
          },
        ]
      },
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack 4'
    }),
    new MiniCssExtractPlugin({
      filename:'css/[name].css'
    })
  ]
}