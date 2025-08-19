import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt, { Secret, SignOptions } from "jsonwebtoken";

const jwtSecret: Secret = process.env.JWT_SECRET as string;
const jwtExpires = (process.env.JWT_EXPIRES ||
  "1d") as SignOptions["expiresIn"];

// tipe payload token
interface JwtPayload {
  id: string;
}

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as {
      username?: string;
      password?: string;
    };

    if (!username || !password) {
      return res.status(400).json({ msg: "username & password required" });
    }

    const exists = await User.findOne({ username });
    if (exists) return res.status(400).json({ msg: "Username already exists" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hash });

    return res
      .status(201)
      .json({
        msg: "Registered",
        user: { id: user.id, username: user.username },
      });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message || "Server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as {
      username?: string;
      password?: string;
    };

    if (!username || !password) {
      return res.status(400).json({ msg: "username & password required" });
    }

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id } as JwtPayload, jwtSecret, {
      expiresIn: jwtExpires,
    });

    return res.json({ token, user: { id: user.id, username: user.username } });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message || "Server error" });
  }
};

export const me = async (req: Request, res: Response) => {
  try {
    if (!req.userId) return res.status(401).json({ msg: "Unauthorized" });

    const user = await User.findById(req.userId).select("_id username");
    if (!user) return res.status(404).json({ msg: "User not found" });

    return res.json({ user });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message || "Server error" });
  }
};
