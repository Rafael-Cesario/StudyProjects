import express, { type Request, type Response } from "express";
import { userRouter } from "./routes/userRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Authentication API" });
});

app.use(errorMiddleware);

export { app };
