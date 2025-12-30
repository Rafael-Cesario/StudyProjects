import cors from "cors";
import express, { json, type Request, type Response } from "express";

const app = express();

app.use(json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Task api testing" });
});

export { app };
