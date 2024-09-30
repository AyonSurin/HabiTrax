import { Router } from "express";
import { addHabit, getHabits } from "../controllers/habitcontroller";
import authenticate from "../middlewares/authMiddleware";

const router = Router();

router.post("/addhabit", authenticate, addHabit);
router.get("/gethabits", authenticate, getHabits);

export default router;
