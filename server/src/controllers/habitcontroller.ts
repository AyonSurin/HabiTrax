import { Request, Response } from "express";
import Habit from "../models/Habit";
import * as mongoose from "mongoose";

export const addHabit = async (req: Request, res: Response) => {
  try {
    const { name, description, start_date, target_days } = req.body;
    const user_id = req.body.uid;

    // Validate required fields
    if (!name || !start_date || !target_days || target_days.length === 0) {
      return res.status(400).json({
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

export const getHabits = async (req: Request, res: Response) => {
  try {
    const user_id = req.body.uid;
    const userHabits = await Habit.find(
      { user_id: user_id },
      { name: 1, description: 1 }
    );
    res.status(201).json(userHabits);
  } catch (error: any) {
    console.error("Error fetching user's habits\n Error:\n", error);
    res.status(500).send("Server error");
  }
};

export const editHabit = async (req: Request, res: Response) => {
  const habitId = req.params.id;
  console.log("Reached here, habit id = ", habitId);

  const { name, description, target_days } = req.body;

  try {
    const updateFields: { [key: string]: string } = {};

    if (name) {
      updateFields.name = name;
    }
    if (description) {
      updateFields.description = description;
    }

    if (target_days) {
      updateFields.target_days = target_days;
    }

    if (Object.keys(updateFields).length === 0) {
      return res
        .status(400)
        .json({ message: "No valid fields provided for update" });
    }

    const result = await Habit.updateOne(
      { _id: habitId },
      { $set: updateFields }
    );

    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "Habit not found or no changes made" });
    }

    const habit = await Habit.findOne(
      { _id: habitId },
      { _id: 1, habit_id: 1, name: 1, description: 1, target_days: 1 }
    );
    return res
      .status(200)
      .json({ message: "Habit updated successfully", habit: habit });
  } catch (error: any) {
    console.error("Error occurred during editing habit: \n", error);
    return res
      .status(500)
      .json({ message: "An error occurred while updating the habit" });
  }
};
export const getHabit = async (req: Request, res: Response) => {
  const habitId = req.params.id;

  try {
    const habit = await Habit.findOne(
      { _id: habitId },
      { _id: 0, habit_id: 1, name: 1, description: 1, target_days: 1 }
    );

    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    return res.status(200).json(habit);
  } catch (error: any) {
    console.error("Error occurred while fetching habit\n", error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching the habit" });
  }
};
