import type { ICreateUser } from "../interfaces/userInterface";
import { prisma } from "../prisma";

class UserService {
  async create(data: ICreateUser) {
    const user = await prisma.user.create({ data });
    return user;
  }
}

export const userService = new UserService();
