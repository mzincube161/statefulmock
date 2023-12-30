import { Logger } from './logger';
import { LogLevel } from '../models/enums/loglevel.enum';
import winston, { Logger as WinstonLoggerType } from 'winston';

export class WinstonLogger implements Logger {
  private logLevel: string;
  private logger: WinstonLoggerType;

  constructor(logLevel?: LogLevel) {
    this.logLevel = logLevel || LogLevel.INFO;
    this.configureLogger();
  }

  private configureLogger() {
    this.logger = winston.createLogger({
      level: this.logLevel,
      levels: winston.config.syslog.levels,
      format: winston.format.json(),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
      ]
    });
  }

  debug(log: any): void {
    this.logger.debug(log);
  }

  error(log: any): void {
    this.logger.error(log);
  }

  info(log: any): void {
    this.logger.info(log);
  }

  verbose(log: any): void {
    this.logger.verbose(log);
  }

  warn(log: any): void {
    this.logger.warn(log);
  }
}
