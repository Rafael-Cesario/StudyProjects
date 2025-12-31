import type { Request, Response, NextFunction } from "express";
import z, { ZodError } from "zod";

export const errorMiddleware = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  let status = 500;
  let errorMessage: Record<string, any> = { error: "Internal server error." };

  if (error instanceof ZodError) {
    status = 400;
    errorMessage = z.flattenError(error);
  }

  res.status(status).json(errorMessage);
};
