import path from 'path';
import webpack from 'webpack';
import {webpackConfig} from "./config/build/webpack-config";
import {BuildPaths, EnvironmentVariables} from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: path.resolve(__dirname, 'dist'),
  htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
}

export default (env: EnvironmentVariables): webpack.Configuration => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;

  return webpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
};
