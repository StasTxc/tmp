export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  output: string;
  htmlTemplate: string;
  src: string;
}

export interface EnvironmentVariables {
  MODE: BuildMode;
  PORT: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}