import { prisma } from "../prisma/client";

export class ActivityService {
    static async log(userId: string, action: string, metadata: any = {}) {
        try {
            return await prisma.activityLog.create({
                data: {
                    user_id: userId,
                    action,
                    metadata,
                },
            });
        } catch (error) {
            console.error("Failed to log activity:", error);
        }
    }

    static async getUserHistory(userId: string) {
        return await prisma.activityLog.findMany({
            where: { user_id: userId },
            orderBy: { created_at: "desc" },
            take: 50,
        });
    }
}
