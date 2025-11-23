import express from "express";
import type { Request, Response } from "express";
import { userRouter } from "./routes/userRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { authRouter } from "./routes/authRouter.js";

export const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "user-authentication" });
});

app.use(errorMiddleware);
