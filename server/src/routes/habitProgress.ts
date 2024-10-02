import { Router } from "express";
import authenticate from "../middlewares/authMiddleware";
import { completeTask } from "../controllers/progress";

const router = Router();

router.post("/complete/", authenticate, completeTask);

export default router;