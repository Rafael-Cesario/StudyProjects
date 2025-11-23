import "dotenv/config";
import type { Request, Response, NextFunction } from "express";
import { CustomError } from "../helpers/customError";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const secret = process.env.JWT_SECRET!;

  const authorization = req.headers.authorization;
  if (!authorization) throw new CustomError("Authorization header is missing", 401);

  const token = authorization.split(" ")[1];
  if (!token) throw new CustomError("Authorization header does not have a token", 401);

  jwt.verify(token, secret);

  next();
};
