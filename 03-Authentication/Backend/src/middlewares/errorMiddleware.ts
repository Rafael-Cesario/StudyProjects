import type { Request, Response, NextFunction } from "express";
import z, { ZodError } from "zod";
import { Prisma } from "../generated/prisma/client";

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

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") res.status(400).json({ error: "E100: Unique constraint failed on the field email." });

    return;
  }

  console.log({ error: error });
  res.status(500).json({ error: "An unexpected error occurred" });
};
