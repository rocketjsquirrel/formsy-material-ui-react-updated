const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: [path.resolve(__dirname, 'src', 'examples', 'index.js')],

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 8080,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    disableHostCheck: true,
    hot: false,
    open: process.env.BROWSER !== 'none',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    regenerator: true,
                  },
                ],
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties',
                [
                  '@babel/plugin-proposal-decorators',
                  {
                    decoratorsBeforeExport: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }], //, 'postcss-loader',],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      minify: {
        collapseWhitespace: false,
      },
      hash: true,
      title: 'Formsy Material UI',
      template: path.resolve(__dirname, 'src', 'examples', 'index.html'),
    }),
  ],
};

module.exports = config;
