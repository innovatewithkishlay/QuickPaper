import { prisma } from "../prisma/client";

export class TemplateService {
    static async getAll() {
        return prisma.template.findMany({
            orderBy: { created_at: "desc" },
        });
    }

    static async getById(id: string) {
        const template = await prisma.template.findUnique({
            where: { id },
        });
        if (!template) throw new Error("Template not found");
        return template;
    }
}
