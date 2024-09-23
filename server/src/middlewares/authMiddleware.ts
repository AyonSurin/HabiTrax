// src/middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { auth } from "../config/firebase";

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    res.locals.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
