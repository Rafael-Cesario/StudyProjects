import { prisma } from "../prisma";
import type { ICreateUser } from "../interfaces/userInterface";

class UserService {
  async create(user: ICreateUser) {
    await prisma.user.create({ data: user });
    return `Success: New user ${user.name} created.`;
  }
}

export const userService = new UserService();
