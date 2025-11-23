import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";
import { todoRouter } from "./routes/todoRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";

export const app = express();

app.use(express.json());
app.use("/todo", todoRouter);

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "01 To do List" });
});

app.use(errorMiddleware);
