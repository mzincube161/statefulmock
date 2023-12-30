import { PathMatcherService } from './path_matcher.service';
import { TMockData, TPathData } from '../models/types/mockdata';
import { LoggerService } from '../logger/logger.service';

export class TreePathMatcherService implements PathMatcherService {
  private mockData: TMockData;
  public matchPath(path: string): TPathData {
    return undefined;
  }

  setMockData(data: TMockData): void {
    LoggerService.getLogger().debug('Tree path matcher received mock data');
    this.mockData = data;
  }
}
