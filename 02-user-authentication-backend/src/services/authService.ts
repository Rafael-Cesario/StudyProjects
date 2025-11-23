import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { IAuthLogin } from "../interfaces/authInterface";
import { CustomError } from "../helpers/customError";
import { prisma } from "../prisma";

class AuthService {
  async login({ email, password }: IAuthLogin) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new CustomError("Email or password incorrect.", 400);

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new CustomError("Email or password incorrect.", 400);

    const secret = process.env.JWT_SECRET!;
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: "24h" });

    return token;
  }
}

export const authService = new AuthService();
