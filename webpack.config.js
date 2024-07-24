const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ReactRefreshWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
};



// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const webpack = require('webpack');
//
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   mode: 'development',
//   devtool: 'inline-source-map',
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//       inject: 'body'
//     }),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify('development')
//     }),
//     new ReactRefreshWebpackPlugin()
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             plugins: ['react-refresh/babel'],
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       }
//     ]
//   },
//   devServer: {
//     static: path.join(__dirname, 'public'),
//     port: 3000,
//     hot: true,
//     historyApiFallback: true
//   }
// };



// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const { app, BrowserWindow } = require('electron');
// const isDev = require('electron-is-dev');
//
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//     }),
//     isDev && new ReactRefreshWebpackPlugin(),
//   ].filter(Boolean),
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     hot: true,
//     port: 3000,
//   },
// };
//
