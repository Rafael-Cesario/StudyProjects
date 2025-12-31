import z from "zod";
import type { Request, Response } from "express";
import type { TaskService } from "../services/taskService";

export class TaskController {
  constructor(private taskService: TaskService) {}

  async create(req: Request, res: Response) {
    const Task = z.object({ title: z.string().min(3).max(50), description: z.string() });
    const task = Task.parse(req.body);

    res.status(201).json({ task });
  }
}
