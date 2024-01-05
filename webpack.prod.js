const path = require("path");
const basic = require("./webpack.basic");
const { merge } = require('webpack-merge');

module.exports = merge(basic, {
    mode: "production",
    output: {
      filename: "main.[contenthash].js",
      path: path.resolve(__dirname, "dist")
    }
  });