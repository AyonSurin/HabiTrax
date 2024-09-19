import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  habit_name: { type: String, required: true },
  habit_startDate: { type: Date, required: true },
  userId: { type: String, required: true },
});

const Habit = mongoose.model("Habit", habitSchema);
export default Habit;
