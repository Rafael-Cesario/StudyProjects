import express, { type Request, type Response } from "express";
import { userRouter } from "./routes/userRouter";

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Authentication API" });
});

export { app };
