const merge = require("webpack-merge");
const common = require("./config");

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 9000,
    hot: false,
    open: true
  }
});