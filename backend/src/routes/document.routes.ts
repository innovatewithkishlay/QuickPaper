import { Router } from "express";
import { DocumentController } from "../controllers/document.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { activityLogger } from "../middlewares/activity.middleware";

const router = Router();

router.use(authenticate); // All routes protected

router.post("/", activityLogger("DOC_CREATED"), DocumentController.create);
router.get("/", DocumentController.getAll);
router.get("/:id", DocumentController.getById);
router.put("/:id", activityLogger("DOC_UPDATED"), DocumentController.update);
router.patch("/:id/archive", activityLogger("DOC_ARCHIVED"), DocumentController.archive);
router.patch("/:id/unarchive", activityLogger("DOC_UNARCHIVED"), DocumentController.unarchive);
router.get("/:id/versions", DocumentController.getVersions);
router.post("/:id/versions/:versionId/restore", activityLogger("DOC_RESTORED"), DocumentController.restoreVersion);
router.delete("/:id", activityLogger("DOC_DELETED"), DocumentController.delete);

export default router;
