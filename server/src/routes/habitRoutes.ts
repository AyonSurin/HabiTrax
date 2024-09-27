import { Router } from "express";
import { addHabit, getHabits } from "../controllers/habitcontroller";
import authenticate from "../middlewares/authMiddleware";

const router = Router();

// Protected route, requires Firebase authentication
router.post("/addhabit", authenticate, addHabit);
router.get("/gethabits", authenticate, getHabits);
// router.post("/gethabits", authenticate, getHabits)

export default router;
