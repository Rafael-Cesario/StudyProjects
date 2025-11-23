import type { Request, Response } from "express";
import type { IAuthLogin } from "../interfaces/authInterface";
import { validateAuth } from "../helpers/validateAuth";
import { CustomError } from "../helpers/customError";
import { authService } from "../services/authService";

class AuthController {
  async login(req: Request, res: Response) {
    const data: IAuthLogin = req.body;

    const error = validateAuth.login(data);
    if (error.hasError) throw new CustomError(error.message, 400);

    const token = await authService.login(data);
    res.status(200).json({ token });
  }
}

export const authController = new AuthController();
