import z from "zod";
import type { Request, Response } from "express";
import { authService } from "../services/authService";

class AuthController {
  async login(req: Request, res: Response) {
    const Login = z.object({
      email: z.email(),
      password: z.string(),
    });

    const login = Login.parse(req.body);

    const token = await authService.login(login);

    res.status(200).json({ token });
  }
}

export const authController = new AuthController();
