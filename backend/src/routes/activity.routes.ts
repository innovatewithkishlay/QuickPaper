import { Router } from "express";
import { ActivityController } from "../controllers/activity.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authenticate, ActivityController.getMyHistory);

export default router;
