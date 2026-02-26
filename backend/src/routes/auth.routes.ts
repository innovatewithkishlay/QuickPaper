import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { activityLogger } from "../middlewares/activity.middleware";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", activityLogger("LOGIN"), AuthController.login);
router.get("/me", authenticate, AuthController.getProfile);

export default router;
