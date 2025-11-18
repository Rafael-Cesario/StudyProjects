import type { Request, Response } from "express";
import * as z from "zod";
import bcrypt from "bcrypt";
import { userService } from "../services/userService";

class UserController {
  async create(req: Request, res: Response) {
    const UserSchema = z.object({
      name: z.string().min(3).max(20),
      email: z.email(),
      password: z.string().min(8),
    });

    const data = UserSchema.parse(req.body);

    data.password = await bcrypt.hash(data.password, 10);

    const { password, ...user } = await userService.create(data);

    res.status(201).json({ user });
  }
}

export const userController = new UserController();
