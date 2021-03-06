const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EnvironmentPlugin } = require("webpack");

dotenv.config();

const API_URL = process.env.API_URL || "http://localhost";
const PORT = process.env.PORT || 3000;

module.exports = {
  entry: path.join(__dirname, "./client/app.js"),
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3001,
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
