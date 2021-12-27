import { Router } from "https://deno.land/x/oak@v10.1.0/mod.ts";

const router = new Router();

const posts = [
  {
    id: 1,
    title: "My first post",
    body: "This is my first post",
  },
  {
    id: 2,
    title: "My first post",
    body: "This is my first post",
  },
  {
    id: 3,
    title: "My first post",
    body: "This is my first post",
  },
  {
    id: 4,
    title: "My first post",
    body: "This is my first post",
  },
  {
    id: 5,
    title: "My first post",
    body: "This is my first post",
  },
];

router.get("/posts", ({ response }) => {
  response.body = posts;
});

router.post("/posts", async ({ request, response }) => {
  const post = await request.body().value;
  post.id = posts.length + 1;
  posts.push(post);
  response.body = { success: true, ...posts };
});

router.get("/posts/:id", async ({ request, params, response }) => {
  const { id } = params;
  const post = posts.find((post) => post.id === Number(id));
  if (post) {
    response.status = 200;
    response.body = post;
  } else {
    response.status = 404;
    response.body = { msg: "Post not found" };
  }
});

export default router;
