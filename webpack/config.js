const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

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
    extensions: ['.js', '.ts', '.tsx']
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
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      chunks: ["vendor", "index"]
    })
  ]
};
