import { prisma } from "../prisma";

// Task: Move to interface folder
interface CreateTask {
  title: string;
  description: string;
}

export class TaskService {
  async create(createTaskData: CreateTask) {
    const task = await prisma.task.create({ data: createTaskData });
    return task;
  }
}
