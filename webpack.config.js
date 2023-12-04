//CommonJS module syntax

//Same as --> import {path} from "path";
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//Same as export, configure desired object parameters(ik this comment won't help me much xD)
module.exports = {
  entry: {
    app: "./src/index.js",
    styles: "./src/index.css",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    contentBase: path.join(__dirname, "public"),
  },
};
