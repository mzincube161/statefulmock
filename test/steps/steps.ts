import { Express } from 'express';
import { StatefulMock } from '../../src/app';

export class StepDefinitionContext {
  app: Express
}

export class StepDefinitions {
  constructor(private context: StepDefinitionContext) {
    jest.clearAllMocks();
  }

  public async i_ensure_app_is_setup_with_mocks() {
    const statefulMock = new StatefulMock();
    statefulMock.setMockData({
      paths: []
    })
    this.context.app = statefulMock.getApp();
  }

  public async i_terminate_the_app() {
  }
}