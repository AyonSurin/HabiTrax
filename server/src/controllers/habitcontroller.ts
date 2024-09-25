import { Request, Response } from "express";
import Habit from "../models/Habit";

export const addHabit = async (req: Request, res: Response) => {
  const { user_id, habit_name, habit_description, habit_startDate } = req.body;

  try {
    const newHabit = new Habit({
      userId: user_id,
      habitName: habit_name,
      description: habit_description,
      startDate: habit_startDate,
    });

    await newHabit.save();
    res.status(201).json(newHabit); // Respond with 201 for created resources
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
