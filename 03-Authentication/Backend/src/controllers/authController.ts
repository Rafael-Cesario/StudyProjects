import z from "zod";
import type { Request, Response } from "express";
import { authService } from "../services/authService";
import { validateToken } from "../helpers/jwt";

class AuthController {
  async login(req: Request, res: Response) {
    const Login = z.object({
      email: z.email(),
      password: z.string(),
    });

    const login = Login.parse(req.body);

    const token = await authService.login(login);

    res.cookie("authentication", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60, // 1 Hour
    });

    res.status(200).json({ message: "Success" });
  }

  async validateToken(req: Request, res: Response) {
    const token = req.cookies["authentication"];
    const isValid = validateToken(token);
    res.status(200).json({ isValid });
  }
}

export const authController = new AuthController();
