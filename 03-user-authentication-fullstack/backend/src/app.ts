import cors from "cors";
import express, { json, type Request, type Response } from "express";
import { userRouter } from "./routes/userRouter";
import { errorMiddleware } from "./middleware/errorMiddleware";

const app = express();

app.use(cors());
app.use(json());

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "User authentication" });
});

app.use("/user", userRouter);

app.use(errorMiddleware);

export { app };
