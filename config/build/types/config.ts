export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  output: string;
  htmlTemplate: string;
}

export interface EnvironmentVariables {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}