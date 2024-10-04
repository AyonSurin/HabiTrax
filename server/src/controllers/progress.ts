import { Request, Response } from "express";
import HabitCompletion from "../models/HabitCompletion";
import HabitProgress from "../models/HabitProgress";

const getDateRanges = (date: Date) => {
  const week_start = new Date(date);
  week_start.setDate(date.getDate() - date.getDay());
  const week_end = new Date(week_start);
  week_end.setDate(week_start.getDate() + 6);

  const month_start = new Date(date.getFullYear(), date.getMonth(), 1);
  const month_end = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const year_start = new Date(date.getFullYear(), 0, 1);
  const year_end = new Date(date.getFullYear(), 11, 31);

  return { week_start, week_end, month_start, month_end, year_start, year_end };
};

const updateProgressPeriod = (
  progressPeriod: any,
  completionDate: Date,
  dateRanges: any
) => {
  if (
    completionDate >= dateRanges.period_start &&
    completionDate <= dateRanges.period_end
  ) {
    const existingEntry = progressPeriod.progress_data.find(
      (entry: any) =>
        entry.date.getDate() === completionDate.getDate() &&
        entry.date.getMonth() === completionDate.getMonth() &&
        entry.date.getFullYear() === completionDate.getFullYear()
    );

    if (existingEntry) {
      existingEntry.status = "complete";
    } else {
      progressPeriod.progress_data.push({
        date: completionDate,
        status: "complete",
      });
    }

    progressPeriod.completed_days = progressPeriod.progress_data.filter(
      (entry: any) => entry.status === "complete"
    ).length;

    progressPeriod.period_start = dateRanges.period_start;
    progressPeriod.period_end = dateRanges.period_end;
  }
};

export const completeTask = async (req: Request, res: Response) => {
  try {
    const habit_id = req.params.id;
    const { date_completed } = req.body;
    const user_id = req.body.uid;

    const completionDate = new Date(date_completed);
    completionDate.setHours(0, 0, 0, 0);

    const yesterday = new Date(completionDate);
    yesterday.setDate(yesterday.getDate() - 1);

    const dateRanges = getDateRanges(completionDate);

    // Find or create HabitCompletion
    let habitCompletion = await HabitCompletion.findOneAndUpdate(
      { habit_id, user_id, date_completed: completionDate },
      { status: "complete" },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    // Find or create HabitProgress
    let habitProgress = await HabitProgress.findOne({ habit_id, user_id });

    if (!habitProgress) {
      habitProgress = new HabitProgress({
        habit_id,
        user_id,
        week_progress: {
          period_start: dateRanges.week_start,
          period_end: dateRanges.week_end,
        },
        month_progress: {
          period_start: dateRanges.month_start,
          period_end: dateRanges.month_end,
        },
        year_progress: {
          period_start: dateRanges.year_start,
          period_end: dateRanges.year_end,
        },
      });
    }

    // Update streak
    const yesterdayProgress = habitProgress.week_progress.progress_data.find(
      (entry: any) =>
        entry.date.getDate() === yesterday.getDate() &&
        entry.date.getMonth() === yesterday.getMonth() &&
        entry.date.getFullYear() === yesterday.getFullYear() &&
        entry.status === "complete"
    );

    if (yesterdayProgress) {
      habitProgress.current_streak += 1;
    } else {
      habitProgress.current_streak = 1;
      habitProgress.streak_start_date = completionDate;
    }

    // Update progress periods
    updateProgressPeriod(habitProgress.week_progress, completionDate, {
      period_start: dateRanges.week_start,
      period_end: dateRanges.week_end,
    });
    updateProgressPeriod(habitProgress.month_progress, completionDate, {
      period_start: dateRanges.month_start,
      period_end: dateRanges.month_end,
    });
    updateProgressPeriod(habitProgress.year_progress, completionDate, {
      period_start: dateRanges.year_start,
      period_end: dateRanges.year_end,
    });

    // Save updates
    await habitProgress.save();

    res.status(200).json({
      success: true,
      message: "Task marked as complete!",
      habitCompletion,
      streak: habitProgress.current_streak,
    });
  } catch (error) {
    console.error("Error completing task:", error);
    res.status(500).json({
      success: false,
      message: "Server error while completing task.",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
// export const getStatus = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const user_id = req.body.uid;
//     const date = new Date().setHours(0, 0, 0, 0);

//     // Fetch the habit completion status
//     const habitCompletion = await HabitCompletion.findOne({
//       habit_id: id,
//       user_id,
//       date_completed: date,
//     });

//     // Fetch the habit progress data to check the streak
//     const habitProgress = await HabitProgress.findOne({
//       habit_id: id,
//       user_id,
//     });

//     // Determine if the task is completed today
//     const completedToday =
//       habitCompletion && habitCompletion.status === "complete";

//     // Calculate the streak
//     let streak = 0;
//     if (habitProgress && habitProgress.month_progress) {
//       for (let i = habitProgress.month_progress.length - 1; i >= 0; i--) {
//         const progressEntry = habitProgress.month_progress[i];
//         if (progressEntry.status === "complete") {
//           streak++;
//         } else {
//           break; // Stop counting if we hit an incomplete day
//         }
//       }
//     }

//     res.status(200).json({
//       completed: completedToday,
//       streak: streak,
//     });
//   } catch (error) {
//     console.error("Error fetching completion status:", error);
//     res.status(500).json({ success: false, message: "Server error." });
//   }
// };
