import { Request, Response, NextFunction } from "express";
import { ActivityService } from "../services/activity.service";

interface AuthenticatedRequest extends Request {
    user?: {
        userId: string;
    };
}

export const activityLogger = (action: string) => {
    return async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        const originalEnd = res.end;

        // @ts-ignore
        res.end = async function (chunk: any, encoding: string, cb?: () => void) {
            res.end = originalEnd;
            res.end(chunk, encoding, cb);

            // Log activity only if the request was successful
            if (res.statusCode >= 200 && res.statusCode < 300) {
                const userId = req.user?.userId;
                if (userId) {
                    await ActivityService.log(userId, action, {
                        method: req.method,
                        path: req.path,
                        params: req.params,
                    });
                }
            }
        };

        next();
    };
};
