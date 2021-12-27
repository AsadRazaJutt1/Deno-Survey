import { Router } from "../deps.ts";
import authController from "../controllers/AuthController.ts";
import surveyController from "../controllers/SurveyController.ts";
const router = new Router();

router
  .get("/", (ctx, next) => {
    ctx.response.body = { daya: "Hello world!" };
  })
  .post("/api/login", authController.login)
  .post("/api/register", authController.register);
// For Survey
router
  .get("/api/surveys", surveyController.getSurveys);

export default router;
