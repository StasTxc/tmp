import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function plugins(options: BuildOptions): Array<webpack.WebpackPluginInstance> {
  return [
    new HTMLWebpackPlugin({
      template: options.paths.htmlTemplate,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:8].css',
      chunkFilename: 'styles/[name].[contenthash:8].css',
    }),
  ]
}