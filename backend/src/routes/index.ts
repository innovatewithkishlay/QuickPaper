import { Router } from "express";
import authRoutes from "./auth.routes";
import templateRoutes from "./template.routes";
import documentRoutes from "./document.routes";
import activityRoutes from "./activity.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/templates", templateRoutes);
router.use("/documents", documentRoutes);
router.use("/activity", activityRoutes);

export default router;
