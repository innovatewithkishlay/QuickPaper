import { Router } from "express";
import { DocumentController } from "../controllers/document.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.use(authenticate); // All routes protected

router.post("/", DocumentController.create);
router.get("/", DocumentController.getAll);
router.get("/:id", DocumentController.getById);
router.put("/:id", DocumentController.update);
router.delete("/:id", DocumentController.delete);

export default router;
