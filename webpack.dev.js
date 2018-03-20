const merge = require("webpack-merge");
const common = require("./webpack.common.js");

var proxy = "localhost:8081";

module.exports = merge(common, {
  devtool: "source-map",
  // devtool: "cheap-module-eval-source-map",
  // devServer: {
  //   contentBase: "./dist",
  // },
  devServer: {
    proxy: {
      "*": {
        target: "http://" + proxy,
        changeOrigin: true,
      },
      port: 3456,
      host: "0.0.0.0",
      hot: true,
    },
    hot: true,
  },
});
