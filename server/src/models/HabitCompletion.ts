import mongoose, { Schema, Document } from "mongoose";

interface IHabitCompletion extends Document {
  habit_completion_id: string;
  habit_id: string; // Reference to the Habit
  user_id: string; // Reference to the User
  date_completed: Date; // The specific date of completion
  status: "complete" | "incomplete"; // The status for the day
}

const HabitCompletionSchema: Schema = new Schema({
  habit_completion_id: { type: String, required: true, unique: true },
  habit_id: { type: String, required: true, ref: "Habit" }, // Foreign Key
  user_id: { type: String, required: true, ref: "User" }, // Foreign Key
  date_completed: { type: Date, required: true },
  status: { type: String, enum: ["complete", "incomplete"], required: true },
});

const HabitCompletion = mongoose.model<IHabitCompletion>(
  "HabitCompletion",
  HabitCompletionSchema
);

export default HabitCompletion;
