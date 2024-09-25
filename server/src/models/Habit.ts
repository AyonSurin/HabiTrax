import { Schema, model, Document } from "mongoose";

// Define the Habit interface
interface Habit {
  habitName: string;
  description: string;
  completion: Date[];
}

// Define the UserHabit interface extending Document
interface UserHabit extends Document {
  first_name: string;
  last_name: string;
  email: string;
  uid: string;
  habits: Habit[];
}

// Define the schema for Habit
const HabitSchema = new Schema<Habit>({
  habitName: { type: String, required: true },
  description: { type: String, required: true },
  completion: { type: [Date], default: [] }, // Array of dates when the habit was completed
});

// Define the schema for UserHabit
const UserHabitSchema = new Schema<UserHabit>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  uid: { type: String, required: true, unique: true },
  habits: { type: [HabitSchema], default: [] }, // Array of habits
});

// Create the model
const UserHabitModel = model<UserHabit>("UserHabit", UserHabitSchema);

export default UserHabitModel;
