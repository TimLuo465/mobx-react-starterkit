const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const env = process.env.NODE_ENV
const extractLess = new ExtractTextPlugin({
  filename: "[name].css",
});

module.exports = {
  entry: {
    vendor: ["mobx", "react", "react-dom"],
    index: "./src/index",
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].min.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      use: [
        {
          loader: "awesome-typescript-loader"
        },
      ],
      include: path.join(__dirname, '../src')
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'typings-for-css-modules-loader',
          options: {
              modules: true,
              namedExport: true,
              camelCase: true,
          }
        },
      ],
      include: path.join(__dirname, '../src/components')
    }, {
      test: /\.less$/,
      use: extractLess.extract({
        use: [{
          loader: "css-loader"
        }, {
            loader: "less-loader",
            options: { paths: [path.join(__dirname, '../src')] }
        }],
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      chunks: ["vendor", "index"]
    }),
    extractLess
  ]
};
