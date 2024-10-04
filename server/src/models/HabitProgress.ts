import mongoose, { Schema, Document } from "mongoose";

// Define progress data for a given period (week, month, year)
interface IProgressData {
  date: Date;
  status: "complete" | "incomplete";
}

interface IHabitProgress extends Document {
  habit_id: string; // Reference to the Habit
  user_id: string; // Reference to the User
  week_progress: IPeriodProgress;
  month_progress: IPeriodProgress;
  year_progress: IPeriodProgress;
  current_streak: number; // The current streak length (in days)
  streak_start_date: Date | null; // The date when the current streak started
}

// Define progress for week, month, or year
interface IPeriodProgress {
  period_start: Date; // The start date of the period
  period_end: Date; // The end date of the period
  completed_days: number; // Total days completed in this period
  progress_data: IProgressData[]; // Array of date and status
}

// Define schemas
const ProgressDataSchema: Schema = new Schema({
  date: { type: Date, required: true },
  status: { type: String, enum: ["complete", "incomplete"], required: true },
});

const PeriodProgressSchema: Schema = new Schema({
  period_start: { type: Date, required: true }, // Start of week, month, or year
  period_end: { type: Date, required: true }, // End of week, month, or year
  completed_days: { type: Number, default: 0 }, // Count of completed days
  progress_data: { type: [ProgressDataSchema], default: [] }, // Daily data for the period
});

// Main habit progress schema
const HabitProgressSchema: Schema = new Schema({
  habit_id: { type: String, required: true, ref: "Habit" },
  user_id: { type: String, required: true, ref: "User" },
  week_progress: { type: PeriodProgressSchema, required: true }, // Weekly data
  month_progress: { type: PeriodProgressSchema, required: true }, // Monthly data
  year_progress: { type: PeriodProgressSchema, required: true }, // Yearly data
  current_streak: { type: Number, default: 0 }, // Streak length
  streak_start_date: { type: Date, default: null }, // Start of the current streak
});

const HabitProgress = mongoose.model<IHabitProgress>(
  "HabitProgress",
  HabitProgressSchema
);

export default HabitProgress;
