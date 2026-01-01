import z from "zod";
import type { Request, Response } from "express";
import type { TaskService } from "../services/taskService";

export class TaskController {
  constructor(private taskService: TaskService) {}

  async create(req: Request, res: Response) {
    const TaskSchema = z.object({ title: z.string().min(3).max(50), description: z.string() });
    const createTaskData = TaskSchema.parse(req.body);

    const task = await this.taskService.create(createTaskData);

    res.status(201).json({ success: true, task });
  }
}
