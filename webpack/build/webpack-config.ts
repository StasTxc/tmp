import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {loaders} from "./loaders";
import {resolvers} from "./resolvers";
import {plugins} from "./plugins";
import {devServer} from "./devServer";

export function webpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev, port} = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    module: {
      rules: loaders(options),
    },
    resolve: resolvers(options),
    plugins: plugins(options),
    // Помогает по stack trace отследить ошибку в конкретном месте
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? devServer(options) : undefined,
  }
}