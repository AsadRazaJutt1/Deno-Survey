import { Application, log } from "./deps.ts";
import router from "./routes/router.ts";
import postRouter from "./routes/post.ts";
import surveyRouter from "./routes/survey.ts";

const app = new Application();
const port = 8000;

app.use(router.routes());
app.use(postRouter.routes());
app.use(surveyRouter.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on ${secure ? "https://" : "http://"}${
      hostname || "localhost"
    }:${port}`,
  );
});

await app.listen({ port });
