import { Context, log, Status, STATUS_TEXT } from "../deps.ts";
import Survey from "../models/Survey.ts";
class SurveyController {
  private _logger: any;
  constructor() {
    this._logger = log.getLogger();
  }

  public async getSurveys({ request, response }: Context) {
    return response;
  }

  public async createSurvey({ request, response }: Context) {
    try {
      const { name, description } = await request.body().value;
      response.status = Status.OK;
      response.body = {
        error: false,
        message: "Survey created successfully",
        status: STATUS_TEXT.get(Status.OK),
      };
    } catch (error) {
      response.status = Status.InternalServerError;
      response.body = {
        error: true,
        message: "Internal server error occurred! we are working on it.",
        status: STATUS_TEXT.get(Status.InternalServerError),
      };
    }
  }
}

const surveyController = new SurveyController();
export default surveyController;
