import { Router } from "express";
import {
  addHabit,
  getHabits,
  getHabit,
  editHabit,
  removeHabit,
} from "../controllers/habitcontroller";
import authenticate from "../middlewares/authMiddleware";

const router = Router();

router.post("/addhabit", authenticate, addHabit);
router.get("/", authenticate, getHabits);
router.patch("/editHabit/:id", authenticate, editHabit);
router.get("/getHabit/:id", authenticate, getHabit);
router.delete("/removehabit/:id", authenticate, removeHabit);

export default router;
