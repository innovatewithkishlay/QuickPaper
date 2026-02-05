import { Router } from "express";
import authRoutes from "./auth.routes";
import templateRoutes from "./template.routes";
import documentRoutes from "./document.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/templates", templateRoutes);
router.use("/documents", documentRoutes);

export default router;
