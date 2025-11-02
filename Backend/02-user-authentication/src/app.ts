import express from "express";
import { userRouter } from "./routes/userRouter.js";

export const app = express();

// configs
app.use(express.json());

// routes
app.use("/user", userRouter);
