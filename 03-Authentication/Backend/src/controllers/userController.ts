import type { Request, Response } from "express";
import { userService } from "../services/userService";

class UserController {
  async create(req: Request, res: Response) {
    // Tasks
    // Validate user input
    // Create User
    // Return success message 
  }
}

export const userController = new UserController();
