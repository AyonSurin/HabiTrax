import { Router } from "express";
import authenticate from "../middlewares/authMiddleware";
import { completeTask, getStatus} from "../controllers/progress";

const router = Router();

// router.patch("/:id/complete/", authenticate, completeTask);
router.patch("/:id/complete/", authenticate,completeTask);

router.get("/:id/status/", authenticate, getStatus);


export default router;