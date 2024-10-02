import { Request, Response } from "express";
import HabitCompletion from "../models/HabitCompletion";

export const completeTask = async (req: Request, res: Response) => {
  try {
    const { habit_id, date_completed } = req.body;
    const user_id = req.body.uid;
    let habitCompletion = await HabitCompletion.findOne({
      _id: habit_id,
      user_id,
      date_completed: new Date(date_completed).setHours(0, 0, 0, 0),
    });

    if (habitCompletion) {
      habitCompletion.status = "complete";
    } else {
      habitCompletion = new HabitCompletion({
        habit_completion_id: `${habit_id}-${user_id}-${date_completed}`,
        habit_id,
        user_id,
        date_completed: new Date(date_completed).setHours(0, 0, 0, 0),
        status: "complete",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Task marked as complete!" });
  } catch (error) {
    console.error("Error completing task:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
