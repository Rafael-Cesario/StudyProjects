import { Router } from "express";
import { TaskController } from "../controllers/taskController";
import { TaskService } from "../services/taskService";

const route = Router();
const taskService = new TaskService();
const taskController = new TaskController(taskService);

route.post("/", (req, res) => taskController.create(req, res));

export { route as taskRouter };
