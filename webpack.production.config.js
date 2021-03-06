const path = require('path');

const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry :{
   'hello-world':'./src/hello-world.js',
   'kiwi':'./src/kiwi.js'
  },
  output:{
    filename:'[name].[contenthash].js',
    path: path.resolve(__dirname,'./dist'),
    publicPath: ''
  },
  mode:'production',
  optimization:{
    splitChunks:{
      chunks:'all',
      minSize:10000,
      name:'vendor_'

    }
  },

  module:{
    rules:[
      {
        test : /\.(png|jpg)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test : /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,'css-loader'
        ]
      },
      {
        test : /\.js$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/env'],
            plugins:['transform-class-properties']
          }
        }
      },
      {
          test : /\.hbs$/,
          use:[
              'handlebars-loader'
          ]
      }
    ]
  },
  plugins:[

    new MiniCssExtractPlugin({
      filename:'[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename:"hello-world.html",
      chunks:['hello-world','vendors~hello-world~kiwi'],
      title:'Hello World',
      description:"Hello world",
      template:'src/page-template.hbs'

    }),
    new HtmlWebpackPlugin({
      filename:"kiwi.html",
      chunks:['kiwi','vendors~hello-world~kiwi'],
      title:'Kiwi',
      description:"Kiwi",
      template:'src/page-template.hbs'

    })
  ]
};
