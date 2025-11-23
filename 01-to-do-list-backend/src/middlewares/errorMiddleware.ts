import type { NextFunction, Request, Response } from "express";
import type { ErrorHandler } from "../utils/errorHandler";
import { Prisma } from "../generated/prisma/client";

export const errorMiddleware = (
  error: Error & Partial<ErrorHandler>,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "Internal server error.";

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code == "P2025") res.status(400).json({ error: error.meta?.cause });
    return;
  }

  res.status(statusCode).json({ error: message });
};
