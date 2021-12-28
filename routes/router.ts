import { Router } from "../deps.ts";
import authController from "../controllers/AuthController.ts";

const router = new Router();

router
  .get("/", (ctx, next) => {
    ctx.response.body = { daya: "Hello world!" };
  })
  .post("/api/login", authController.login)
  .post("/api/register", authController.register);
// For Survey

export default router;
