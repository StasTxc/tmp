import webpack from "webpack";

export function loaders(): Array<webpack.RuleSetRule> {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ]
}