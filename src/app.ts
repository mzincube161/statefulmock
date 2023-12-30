import express, { Express } from 'express';
import { TMockData, TPathData } from './models/types/mockdata';
import { PathMatcherService } from './path_matcher/path_matcher.service';
import { TreePathMatcherService } from './path_matcher/tree_path_matcher.service.impl';
import { Logger } from './logger/logger';
import { LoggerService } from './logger/logger.service';
import { WinstonLogger } from './logger/winston.logger';
import { LogLevel } from './models/enums/loglevel.enum';

type StateFulMockOptions = {
  pathMatcher?: PathMatcherService;
  logger?: Logger;
  logLevel?: LogLevel;
};

export class StatefulMock {
  private port: number;

  private pathMatcher: PathMatcherService;

  constructor(options?: StateFulMockOptions) {
    this.pathMatcher = options?.pathMatcher ?? new TreePathMatcherService();
    LoggerService.getLogger().setLogger(options?.logger ?? new WinstonLogger(options?.logLevel));
  }

  public setMockData(data: TMockData): StatefulMock {
    LoggerService.getLogger().debug('Sending mock data to path matcher service');
    this.pathMatcher.setMockData(data)
    LoggerService.getLogger().debug('Sent mock data to path matcher service');
    return this;
  }

  public getApp(): Express {
    const app = express();
    app.use((req, res, next) => {
      const requestData: TPathData = this.pathMatcher.matchPath(req.path);
      console.log(requestData);
    });
    return app;
  }

  public listen(port: number) {
    this.port = port;
    LoggerService.getLogger().debug(`Set port to ${this.port}`);
    const app = this.getApp();
    app.listen(this.port, () => {
      LoggerService.getLogger().info(`Mock server Listening on port ${this.port}`);
    });
  }
}
