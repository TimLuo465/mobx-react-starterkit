const merge = require("webpack-merge");
const common = require("./config");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin()
  ]
});