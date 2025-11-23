import { userController } from "../controllers/userController.js";
import { Router, type NextFunction, type Request, type Response } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const route = Router();

route.post("/", userController.create);

route.use(authMiddleware);

route.get("/:id", userController.getOne);
route.put("/", userController.update);
route.delete("/:id", userController.remove);

export { route as userRouter };
