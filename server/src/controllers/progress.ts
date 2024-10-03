import { Request, Response } from "express";
import HabitCompletion from "../models/HabitCompletion";
import HabitProgress from "../models/HabitProgress";

export const completeTask = async (req: Request, res: Response) => {
  try {
    const habit_id = req.params.id;
    const { date_completed } = req.body;
    const user_id = req.body.uid;

    const today = new Date(date_completed).setHours(0, 0, 0, 0);

    let habitCompletion = await HabitCompletion.findOne({
      habit_id,
      user_id,
      date_completed: today,
    });

    if (habitCompletion) {
      if (habitCompletion.status === "complete") {
        return res.status(200).json({
          success: true,
          message: "Task already marked as complete!",
          habitCompletion,
        });
      } else {
        habitCompletion.status = "complete";
        await habitCompletion.save();
      }
    } else {
      habitCompletion = new HabitCompletion({
        habit_completion_id: `${habit_id}-${user_id}-${today}`,
        habit_id,
        user_id,
        date_completed: today,
        status: "complete",
      });
      await habitCompletion.save();
    }

    const habitProgress = await HabitProgress.findOne({ habit_id, user_id });

    // Calculate the current streak
    let streak = 0;
    let lastCompletedDate: Date | null = null;

    // Check if habitProgress exists
    if (habitProgress) {
      lastCompletedDate = habitProgress.month_data?.length
        ? habitProgress.month_data[habitProgress.month_data.length - 1].date
        : null;

      if (lastCompletedDate) {
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = (today - lastCompletedDate.getTime()) / oneDay;

        // Ensure month_data exists before filtering
        const completedCount =
          habitProgress.month_data?.filter(
            (entry) => entry.status === "complete"
          ).length || 0;

        if (diffDays === 1) {
          streak = completedCount + 1;
        } else if (diffDays > 1) {
          streak = 1; // Reset the streak if it's more than 1 day
        } else {
          streak = completedCount; // If completed today
        }
      } else {
        streak = 1; // First completion
      }

      // Update the month_data
      habitProgress.month_data = habitProgress.month_data || []; // Ensure month_data is an array
      habitProgress.month_data.push({
        date: new Date(date_completed),
        status: "complete",
      });
      await habitProgress.save();
    } else {
      // If no HabitProgress, create one
      const newHabitProgress = new HabitProgress({
        habit_id,
        user_id,
        month_data: [{ date: new Date(date_completed), status: "complete" }],
      });
      await newHabitProgress.save();
      streak = 1; // First completion
    }

    res.status(200).json({
      success: true,
      message: "Task marked as complete!",
      habitCompletion,
      streak, // Send the updated streak count
    });
  } catch (error) {
    console.error("Error completing task:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

export const getStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user_id = req.body.uid;
    const date = new Date().setHours(0, 0, 0, 0);

    // Fetch the habit completion status
    const habitCompletion = await HabitCompletion.findOne({
      habit_id: id,
      user_id,
      date_completed: date,
    });

    // Fetch the habit progress data to check the streak
    const habitProgress = await HabitProgress.findOne({
      habit_id: id,
      user_id,
    });

    // Determine if the task is completed today
    const completedToday =
      habitCompletion && habitCompletion.status === "complete";

    // Calculate the streak
    let streak = 0;
    if (habitProgress && habitProgress.month_data) {
      for (let i = habitProgress.month_data.length - 1; i >= 0; i--) {
        const progressEntry = habitProgress.month_data[i];
        if (progressEntry.status === "complete") {
          streak++;
        } else {
          break; // Stop counting if we hit an incomplete day
        }
      }
    }

    res.status(200).json({
      completed: completedToday,
      streak: streak,
    });
  } catch (error) {
    console.error("Error fetching completion status:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
