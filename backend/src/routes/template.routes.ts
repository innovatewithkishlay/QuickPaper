import { Router } from "express";
import { TemplateController } from "../controllers/template.controller";

const router = Router();

router.get("/", TemplateController.getAll);
router.get("/:id", TemplateController.getById);

export default router;
