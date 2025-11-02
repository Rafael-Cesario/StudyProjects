import { userController } from "../controllers/userController.js";
import { Router } from "express";

const router = Router();

router.post("/", userController.create);

export { router as userRouter };
