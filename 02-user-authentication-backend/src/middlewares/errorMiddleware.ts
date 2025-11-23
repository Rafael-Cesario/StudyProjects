import { Prisma } from "../generated/prisma/client";
import type { Request, Response, NextFunction } from "express";
import type { CustomError } from "../helpers/customError";

export const errorMiddleware = (
  error: Error & Partial<CustomError>,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal server Error";

  if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
    res.status(401).json({ error: "Invalid token" });
    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") res.status(400).json({ error: "Email must be unique" });
    if (error.code === "P2025") res.status(404).json({ error: error.meta!.cause });
    return;
  }

  res.status(status).json({ error: message });
};
