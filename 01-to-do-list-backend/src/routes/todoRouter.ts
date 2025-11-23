import { Router } from "express";
import { todoController } from "../controllers/todoController";

const router = Router();

router.post("/", todoController.create);
router.get("/", todoController.getAll);
router.get("/:id", todoController.getOne);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.remove);

export { router as todoRouter };
