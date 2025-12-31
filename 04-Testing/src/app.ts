import cors from "cors";
import express, { json, type Request, type Response } from "express";
import { taskRouter } from "./routes/taskRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Task api testing" });
});

app.use("/task", taskRouter);

app.use(errorMiddleware);

export { app };
