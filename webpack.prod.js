const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: true,
            },
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              sourceMap: true,
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              // precision: 8,
              // data: "$ENV: " + "PRODUCTION" + ";",
            },
          },
        ],
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles.css",
      // chunkFilename: "[id].css",
    }),
  ],
});
