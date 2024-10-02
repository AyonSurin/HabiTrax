// redux/habitsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Habit {
  _id: string;
  name: string;
  description: string;
}

interface HabitsState {
  habits: Habit[];
}

const initialState: HabitsState = {
  habits: [],
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    setHabits: (state, action: PayloadAction<Habit[]>) => {
      state.habits = action.payload;
    },
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload);
    },
    editHabit: (state, action: PayloadAction<Habit>) => {
      const index = state.habits.findIndex(
        (habit) => habit._id === action.payload._id
      );
      if (index !== -1) {
        state.habits[index] = action.payload; // Update the specific habit
      }
    },
    deleteHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter(
        (habit) => habit._id !== action.payload
      );
    },
  },
});

export const { setHabits, addHabit, editHabit, deleteHabit } =
  habitsSlice.actions;
export default habitsSlice.reducer;
