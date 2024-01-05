const path = require("path");
const basic = require("./webpack.basic");
const { merge } = require('webpack-merge');

module.exports = merge(basic, {
    mode: "development",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist")
    }
});