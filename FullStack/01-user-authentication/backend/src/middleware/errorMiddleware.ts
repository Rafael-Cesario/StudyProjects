import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { Prisma } from "../generated/prisma/client";

export const errorMiddleware = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log({ error });

  if (error instanceof ZodError) {
    const zodError = error.issues.map(({ path, message }) => ({ path, message }));
    res.status(400).json({ error: zodError });
    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    let message = "";

    if (error.code === "P2002") message = `U100: Unique constraint failed on the field: ${error.meta!.target}`;

    return res.status(400).json({ error: message });
  }

  return res.status(500).json({ error: "Unexpected server error." });
};
