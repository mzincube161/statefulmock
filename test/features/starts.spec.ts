import { StepDefinitionContext, StepDefinitions } from '../steps/steps';

describe("App starts successfully", () => {
  let stepDefinitions: StepDefinitions;

  beforeEach(() => {
    stepDefinitions = new StepDefinitions(new StepDefinitionContext());
  });

  afterEach(() => {
    stepDefinitions.i_terminate_the_app();
  });

  test("Starts successfully", async () => {
    await stepDefinitions.i_ensure_app_is_setup_with_mocks();
  })
})