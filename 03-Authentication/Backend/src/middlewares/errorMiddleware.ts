import type { Request, Response, NextFunction } from "express";
import z, { ZodError } from "zod";

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ZodError) {
    const { fieldErrors } = z.flattenError(error);

    const errors = Object.entries(fieldErrors).map(([field, errorMessage]) => {
      return `${field}: ${errorMessage}`;
    });

    res.status(400).json({
      error: errors.join(". "),
    });

    return;
  }

  console.log({ error: error });
  res.status(500).json({ error: error });
};
