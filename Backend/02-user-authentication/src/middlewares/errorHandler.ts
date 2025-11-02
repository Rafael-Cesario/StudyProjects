import { Prisma } from "../generated/prisma/client";
import type { Request, Response, NextFunction } from "express";
import type { CustomError } from "../helpers/customError";

export const errorHandler = (
  error: Error & Partial<CustomError>,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal server Error";

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") res.status(400).json({ error: "Email must be unique" });
    return;
  }

  res.status(status).json({ error: message });
};
