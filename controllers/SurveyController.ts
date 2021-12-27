import { Context } from "../deps.ts";
class SurveyController {
  //   constructor(parameters) {
  //   }

  public async getSurveys({ request, response }: Context) {
    return response;
  }
}

const surveyController = new SurveyController();
export default surveyController;
