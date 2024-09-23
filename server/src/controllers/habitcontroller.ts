// src/controllers/habitController.ts
import { Request, Response } from "express";

export const getHabits = (req: Request, res: Response) => {
  const userId = res.locals.user.uid; // Getting the user from middleware
  return res.json({
    message: `Successfully authenticated. Your UID is: ${userId}`,
  });
};
