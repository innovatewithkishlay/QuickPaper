import { Request, Response } from "express";
import { ActivityService } from "../services/activity.service";

export class ActivityController {
    static async getMyHistory(req: Request, res: Response) {
        try {
            // @ts-ignore
            const userId = req.user?.userId;
            const history = await ActivityService.getUserHistory(userId);
            res.status(200).json(history);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
