import path from 'path';
import webpack from 'webpack';
import {webpackConfig} from "./webpack/build/webpack-config";
import {BuildPaths, EnvironmentVariables} from "./webpack/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src/app', 'index.tsx'),
  output: path.resolve(__dirname, 'dist'),
  htmlTemplate: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
}

export default (env: EnvironmentVariables): webpack.Configuration => {
  const mode = env.MODE || 'development';
  const isDev = mode === 'development';
  const port = env.PORT || 3000;

  return webpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
};
