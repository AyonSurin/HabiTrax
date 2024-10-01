import { Router } from "express";
import {
  addHabit,
  getHabits,
  getHabit,
  editHabit,
} from "../controllers/habitcontroller";
import authenticate from "../middlewares/authMiddleware";

const router = Router();

router.post("/addhabit", authenticate, addHabit);
router.get("/habits", authenticate, getHabits);
router.patch("/editHabit/:id", authenticate, editHabit);
router.get("/getHabit/:id", authenticate, getHabit);
// router.get("/getHabit/:id", getHabit);

export default router;
