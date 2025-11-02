import bcrypt from "bcrypt";
import type { IUserCreate } from "../interfaces/userInterface";
import { prisma } from "../prisma";

class UserService {
  async create(userData: IUserCreate) {
    userData.password = await bcrypt.hash(userData.password, 10);

    const userDB = await prisma.user.create({ data: userData });

    const { password, ...user } = userDB;

    return user;
  }
}

export const userService = new UserService();
