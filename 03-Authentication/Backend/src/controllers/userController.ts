import z from "zod";
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
    res.json({ user });

    // Tasks
    // Validate user input
    // Create User
    // Return success message
  }
}

export const userController = new UserController();
