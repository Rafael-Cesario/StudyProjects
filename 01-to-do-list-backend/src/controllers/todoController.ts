import type { Request, Response } from "express";
import type { ITodoCreate, ITodoUpdate } from "../interfaces/todoInterface";
import { todoService } from "../services/todoService";
import { ErrorHandler } from "../utils/errorHandler";

class TodoController {
  async create(req: Request, res: Response) {
    const { title, notes }: ITodoCreate = req.body;

    if (!title) throw new ErrorHandler("Title is required.", 400);

    const message = await todoService.create({ title, notes });

    res.status(201).json({ message });
  }

  async getAll(_req: Request, res: Response) {
    const todos = await todoService.getAll();
    res.status(200).json({ todos });
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) throw new ErrorHandler("Parameter ID is required.", 400);

    const todo = await todoService.getOne({ id });

    if (!todo) throw new ErrorHandler("Todo not found", 404);

    res.status(200).json({ todo });
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { title, notes }: Omit<ITodoUpdate, "id"> = req.body;

    if (!id) throw new ErrorHandler("Parameter ID is required.", 400);
    if (!title) throw new ErrorHandler("Title is required", 400);
    if (notes === undefined) throw new ErrorHandler("Notes is required", 400);

    const message = await todoService.update({ id, title, notes });

    res.status(200).json({ message });
  }

  async remove(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    if (!id) throw new ErrorHandler("Parameter ID is required.", 400);

    const message = await todoService.remove({ id });

    res.status(200).json({ message });
  }
}

export const todoController = new TodoController();
