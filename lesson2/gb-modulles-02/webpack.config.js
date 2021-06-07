const { resolve } = require("path");
const webpack = require("webpack"); //to access built-in plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // 1
  entry: "./src/main.js", // 2
  output: {
    path: resolve(__dirname, "build"),
    filename: "main.[contenthash].js", // 3
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|mp3)$/,
        type: "asset/resource",
        use: "file-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, "index.html") }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  mode: "production",
};
