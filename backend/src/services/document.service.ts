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

    static async update(userId: string, id: string, data: { title?: string, contentData?: any, isArchived?: boolean, tags?: string[] }) {
        const existing = await prisma.document.findFirst({ where: { id, user_id: userId } });
        if (!existing) throw new Error("Document not found");

        return prisma.document.update({
            where: { id },
            data: {
                title: data.title,
                content_data: data.contentData,
                is_archived: data.isArchived,
                tags: data.tags,
                versions: data.contentData ? {
                    create: {
                        content_data: data.contentData,
                        metadata: {
                            updated_at: new Date().toISOString()
                        }
                    },
                } : undefined,
            },
        });
    }

    static async archive(userId: string, id: string) {
        return this.update(userId, id, { isArchived: true });
    }

    static async unarchive(userId: string, id: string) {
        return this.update(userId, id, { isArchived: false });
    }

    static async getVersions(userId: string, id: string) {
        const document = await prisma.document.findFirst({
            where: { id, user_id: userId },
            include: { versions: { orderBy: { created_at: "desc" } } }
        });
        if (!document) throw new Error("Document not found");
        return document.versions;
    }

    static async restoreVersion(userId: string, id: string, versionId: string) {
        const version = await prisma.documentVersion.findFirst({
            where: { id: versionId, document_id: id }
        });
        if (!version) throw new Error("Version not found");

        return this.update(userId, id, {
            contentData: version.content_data
        });
    }

    static async delete(userId: string, id: string) {
        const existing = await prisma.document.findFirst({ where: { id, user_id: userId } });
        if (!existing) throw new Error("Document not found");

        await prisma.documentVersion.deleteMany({ where: { document_id: id } });
        return prisma.document.delete({ where: { id } });
    }
}
