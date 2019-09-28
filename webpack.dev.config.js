const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.js')
  },
  mode: 'development', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentCase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    port: 3000
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.jpg|jpeg|png|svg|gif|woff|eot|ttf|mp4|webm$/,
        use: [
          {
            loader: 'file-loader', // Exporta los archivos y les da un enlace.
            options:{
              outputPath: 'assets/'
            }
          },
        ]
      },
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack 4',
      template:path.resolve(__dir, 'dist/index.html') //dice donde va a estar ubicado el template.
    })
  ]
} 