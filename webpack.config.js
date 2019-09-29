const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')// De aquí toma el archivo javascript principal que se empaquetará.
  },                                            // En este caso un solo entrypoint para una Single Page Aplication.
  mode: 'production', 
  output: {
    path: path.resolve(__dirname, 'public'),
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
              limit: 1000
            }
          },
        ]
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Webpack 4',
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename:'css/[name].css'
    })
  ]
}