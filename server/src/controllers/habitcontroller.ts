// import { Request, Response } from "express";
// // import Habit from '../models/habitModel';

// export const createHabit = async (req: Request, res: Response) => {
//   try {
//     const { habit_name, habit_startDate } = req.body;
//     const newHabit = new Habit({
//       habit_name,
//       habit_startDate,
//       userId: req.user?.uid,
//     });
//     await newHabit.save();
//     res.status(201).json(newHabit);
//   } catch (err) {
//     res.status(500).json({ message: "Error creating habit" });
//   }
// };
