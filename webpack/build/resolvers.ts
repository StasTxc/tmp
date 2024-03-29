import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function resolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
  }
}