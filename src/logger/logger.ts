export interface Logger {
  info: (...log: any) => void;
  warn: (...log: any) => void;
  error: (...log: any) => void;
  debug: (...log: any) => void;
  verbose: (...log: any) => void;
}
