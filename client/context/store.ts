// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import habitsReducer from "./habitSlice";

export const store = configureStore({
  reducer: {
    habits: habitsReducer, // Add your reducers here
  },
});

// Export types for using in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hook to use dispatch with correct type
export const useAppDispatch = () => useDispatch<AppDispatch>();
