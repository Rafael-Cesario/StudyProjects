import { AUTH_ERRORS } from "../helpers/authErrors";
import { CustomError } from "../helpers/customError";
import { prisma } from "../prisma";
import bcrypt from "bcrypt";
import type { ILogin } from "../interfaces/authInterface";
import { generateToken } from "../helpers/jwt";

class AuthService {
  async login({ email, password }: ILogin) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new CustomError(AUTH_ERRORS.invalidCredentials);

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new CustomError(AUTH_ERRORS.invalidCredentials);

    const token = generateToken(user.id);
    return token;
  }
}

export const authService = new AuthService();
