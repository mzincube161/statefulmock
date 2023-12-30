export type TMockData = {
  paths: TPathData[];
};

export type TPathData = {
  match: string;
  syncResponse?: TSyncResponseData;
};

type TSyncResponseData = {
  statusCode: number;
  headers: object;
  jsonBody: object;
};
