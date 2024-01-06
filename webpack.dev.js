const path = require("path");
const basic = require("./webpack.basic");
const { merge } = require('webpack-merge');

module.exports = merge(basic, {
    mode: "development",
    output: {
      filename: "main.[contenthash].js", 
      path: path.resolve(__dirname, "dist"), 
      assetModuleFilename: "images/[name][ext]",
    },
    module: {
      rules: [
          {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
          }
      ]
  },
});