import express, { type Request, type Response } from "express";
import { userRouter } from "./routes/userRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { authRouter } from "./routes/authRouter";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Authentication API" });
});

app.use(errorMiddleware);

export { app };
