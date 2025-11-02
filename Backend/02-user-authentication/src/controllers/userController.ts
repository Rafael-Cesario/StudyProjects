import type { Request, Response } from "express";
import type { IUserCreate } from "../interfaces/userInterface.js";

class UserController {
  async create(req: Request, res: Response) {
    // const { email, name, password }: IUserCreate = req.body;
    // const user = await userService.create({ email, name, password });
    // res.status(201).json(user);
  }
}

export const userController = new UserController();
