import { Router } from "express";
import authRoutes from "./auth.routes";
import templateRoutes from "./template.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/templates", templateRoutes);

export default router;
