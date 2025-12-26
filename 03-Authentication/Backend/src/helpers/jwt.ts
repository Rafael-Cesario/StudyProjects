import jwt from "jsonwebtoken";

export const generateToken = (userId: string) => {
  const secret = process.env.TOKEN_SECRET!;
  const token = jwt.sign({ data: userId }, secret, { expiresIn: "1h" });

  return token;
};
