import z from "zod";
import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import { userService } from "../services/userService";

class UserController {
  async create(req: Request, res: Response) {
    const User = z.object({
      email: z.email(),
      name: z.string().min(3).max(20),
      password: z.string(),
    });

    const user = User.parse(req.body);

    user.password = await bcrypt.hash(user.password, 10);

    const message = await userService.create(user);

    res.status(201).json({ message });
  }
}

export const userController = new UserController();
