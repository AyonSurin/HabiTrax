import { Request, Response } from "express";
import Habit from "../models/Habit";
import * as mongoose from "mongoose";
import { auth } from "firebase-admin";

export const addHabit = async (req: Request, res: Response) => {
  try {
    const { name, description, start_date, target_days } = req.body;
    const user_id = null;

    // Validate required fields
    if (!name || !start_date || !target_days || target_days.length === 0) {
      return res
        .status(400)
        .json({
          message:
            "Please provide all required fields (name, start_date, target_days).",
        });
    }

    // Create a new habit
    const newHabit = new Habit({
      habit_id: new mongoose.Types.ObjectId(), // Generates a unique habit ID
      user_id, // Firebase UID
      name,
      description,
      start_date: new Date(start_date), // Ensure date is in the correct format
      target_days, // Array of days (e.g., ["Monday", "Wednesday"])
    });

    // Save the habit in the database
    await newHabit.save();

    // Respond with success message and created habit
    return res
      .status(201)
      .json({ message: "Habit created successfully!", habit: newHabit });
  } catch (error: any) {
    console.error("Error creating habit:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
