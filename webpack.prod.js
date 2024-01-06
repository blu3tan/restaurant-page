const path = require("path");
const basic = require("./webpack.basic");
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(basic, {
    mode: "production",
    output: {
      filename: "main.[contenthash].js",
      clean: true,
      path: path.resolve(__dirname, "dist"), 
      assetModuleFilename: "images/[name].[hash][ext]",
    },
    plugins: [new MiniCssExtractPlugin({filename: "[name].[contenthash].css"})],
    module: {
      rules: [
          {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"]
          }
      ]
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  }
  });