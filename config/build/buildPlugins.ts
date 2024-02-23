import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export function buildPlugins(htmlTemplate: string): Array<webpack.WebpackPluginInstance> {
  return [
    new HTMLWebpackPlugin({
      template: htmlTemplate,
    }),
    new webpack.ProgressPlugin(),
  ]
}