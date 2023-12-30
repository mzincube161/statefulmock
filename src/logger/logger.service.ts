import { Logger } from './logger';

export class LoggerService {
  private logger: Logger;
  private static instance: LoggerService;

  private constructor() {}

  public setLogger(logger: Logger) {
    this.logger = logger;
  }

  public static getLogger(): LoggerService {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService();
    }

    return LoggerService.instance;
  }

  public debug(log: any): void {
    this.logger.debug(log);
  }

  public error(log: any): void {
    this.logger.error(log);
  }

  public info(log: any): void {
    this.logger.info(log);
  }

  public verbose(log: any): void {
    this.logger.verbose(log);
  }

  public warn(log: any): void {
    this.logger.warn(log);
  }
}
