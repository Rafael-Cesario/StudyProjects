import { Router } from "express";

const route = Router();

route.get("/", () => {
  console.log("User route");
});

export { route as userRouter };
