import mongoose, { Schema, Document } from "mongoose";

interface IHabit extends Document {
  habit_id: string;
  user_id: string; // Reference to the User
  name: string;
  description: string;
  start_date: Date;
  target_days: string[]; // Number of days per week the user wants to complete this habit
}

const HabitSchema: Schema = new Schema(
  {
    habit_id: { type: String, required: true, unique: true },
    user_id: { type: String, required: true, ref: "User" }, // Foreign Key
    name: { type: String, required: true },
    description: { type: String },
    start_date: { type: Date, required: true }, // New field for the start date
    target_days: { type: [String], required: true }, // Days of the week (e.g., ["Monday", "Wednesday"])
  },
  { timestamps: true }
);

const Habit = mongoose.model<IHabit>("Habit", HabitSchema);

export default Habit;
