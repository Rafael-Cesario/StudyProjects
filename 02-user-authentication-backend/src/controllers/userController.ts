import type { Request, Response } from "express";
import type { IUserCreate } from "../interfaces/userInterface.js";
import { userService } from "../services/userService.js";
import { CustomError } from "../helpers/customError.js";
import { validateUser } from "../helpers/validateUser.js";

class UserController {
  async create(req: Request, res: Response) {
    const userData: IUserCreate = req.body;

    const error = validateUser.create(userData);
    if (error.hasError) throw new CustomError(error.message, 400);

    const user = await userService.create(userData);
    res.status(201).json(user);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params as { id: string };

    const user = await userService.getOne(id);

    res.status(200).json({ user });
  }

  async update(req: Request, res: Response) {
    const data = req.body;

    const error = validateUser.update(data);
    if (error.hasError) throw new CustomError(error.message, 400);

    const user = await userService.update(data);

    res.status(200).json({ user });
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params as { id: string };

    const message = await userService.remove(id);

    res.status(200).json({ message });
  }
}

export const userController = new UserController();
