import { prisma } from "../prisma/client";

export class DocumentService {
    static async create(userId: string, templateId: string, title: string, contentData: any) {
        return prisma.document.create({
            data: {
                user_id: userId,
                template_id: templateId,
                title,
                content_data: contentData,
                versions: {
                    create: {
                        content_data: contentData,
                    },
                },
            },
            include: { template: true },
        });
    }

    static async getAll(userId: string) {
        return prisma.document.findMany({
            where: { user_id: userId },
            orderBy: { updated_at: "desc" },
            include: { template: { select: { title: true, category: true } } },
        });
    }

    static async getById(userId: string, id: string) {
        const document = await prisma.document.findFirst({
            where: { id, user_id: userId },
            include: { template: true },
        });
        if (!document) throw new Error("Document not found");
        return document;
    }

    static async update(userId: string, id: string, title: string, contentData: any) {
        // Check ownership
        const existing = await prisma.document.findFirst({ where: { id, user_id: userId } });
        if (!existing) throw new Error("Document not found");

        const updated = await prisma.document.update({
            where: { id },
            data: {
                title,
                content_data: contentData,
                versions: {
                    create: {
                        content_data: contentData,
                    },
                },
            },
        });
        return updated;
    }

    static async delete(userId: string, id: string) {
        const existing = await prisma.document.findFirst({ where: { id, user_id: userId } });
        if (!existing) throw new Error("Document not found");

        // Deleting document will cascade delete versions if configured, or we delete manually.
        // Prisma cascading relation on delete is default? Let's assume schema handles it or we delete versions first.
        // Schema defines: versions DocumentVersion[]. No onDelete cascade specified in schema previously?
        // Let's rely on Prisma client to delete relations if setup, but usually need `onDelete: Cascade` in schema.
        // I'll update schema later if needed, but for now strict deletion:
        // Actually, I should check schema. "onDelete: Cascade" wasn't explicitly added.
        // I will delete versions first manually to be safe.

        await prisma.documentVersion.deleteMany({ where: { document_id: id } });
        return prisma.document.delete({ where: { id } });
    }
}
