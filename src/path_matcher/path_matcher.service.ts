import { TMockData, TPathData } from '../models/types/mockdata';

export interface PathMatcherService {
  setMockData: (data: TMockData) => void;
  matchPath: (path: string) => TPathData;
}
