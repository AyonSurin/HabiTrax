// src/routes/habitRoutes.ts
import { Router } from "express";
import { getHabits } from "../controllers/habitcontroller";
import { authenticateUser } from "../middlewares/authMiddleware";

const router = Router();

// Protected route, requires Firebase authentication
router.get("/habits", authenticateUser, getHabits);

export default router;
