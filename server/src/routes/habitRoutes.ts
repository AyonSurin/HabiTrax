import { Router } from "express";
import { addHabit } from "../controllers/habitcontroller";

const router = Router();

// Protected route, requires Firebase authentication
router.post("/addhabit", addHabit);

export default router;
