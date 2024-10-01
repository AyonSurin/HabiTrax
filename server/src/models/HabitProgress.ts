import mongoose, { Schema, Document } from "mongoose";

interface IProgressData {
  date: Date;
  status: "complete" | "incomplete";
}

interface IHabitProgress extends Document {
  habit_id: string; // Reference to the Habit
  user_id: string; // Reference to the User
  week_data?: IProgressData[];
  month_data?: IProgressData[];
  year_data?: IProgressData[];
}

const ProgressDataSchema: Schema = new Schema({
  date: { type: Date, required: true },
  status: { type: String, enum: ["complete", "incomplete"], required: true },
});

const HabitProgressSchema: Schema = new Schema({
  habit_id: { type: String, required: true, ref: "Habit" }, // Foreign Key
  user_id: { type: String, required: true, ref: "User" }, // Foreign Key
  week_data: { type: [ProgressDataSchema], default: [] }, // Week-based data
  month_data: { type: [ProgressDataSchema], default: [] }, // Month-based data
  year_data: { type: [ProgressDataSchema], default: [] }, // Year-based data
});

const HabitProgress = mongoose.model<IHabitProgress>(
  "HabitProgress",
  HabitProgressSchema
);

export default HabitProgress;
