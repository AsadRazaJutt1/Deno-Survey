import { Router } from "../deps.ts";
import surveyController from "../controllers/SurveyController.ts";

const router = new Router();

router
  .post("/api/create-survey", surveyController.createSurvey);

export default router;
