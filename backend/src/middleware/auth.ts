import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : undefined;
    if (!token) return res.status(401).json({ msg: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; iat: number; exp: number };
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};
