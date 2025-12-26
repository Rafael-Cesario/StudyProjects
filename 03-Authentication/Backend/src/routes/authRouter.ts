import { Router } from "express";
import { authController } from "../controllers/authController";

const route = Router();

route.post("/", authController.login);
route.get("/", authController.validateToken);

export { route as authRouter };
