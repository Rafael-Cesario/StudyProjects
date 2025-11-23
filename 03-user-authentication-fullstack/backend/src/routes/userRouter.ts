import { Router } from "express";
import { userController } from "../controllers/userController";

const route = Router();

route.post("/", userController.create);

export { route as userRouter };
