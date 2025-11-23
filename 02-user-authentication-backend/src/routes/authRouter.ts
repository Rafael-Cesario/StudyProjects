import { Router } from "express";
import { authController } from "../controllers/authController";

const route = Router();

route.post("/", authController.login);

export { route as authRouter };
