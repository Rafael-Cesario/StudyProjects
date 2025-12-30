import type { Request, Response } from "express";
import type { TaskService } from "../services/taskService";

export class TaskController {
  constructor(private taskService: TaskService) {}

  async create(req: Request, res: Response) {
    console.log("task controller create...");
    await this.taskService.create();
  }
}
