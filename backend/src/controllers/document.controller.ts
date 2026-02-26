import { Request, Response } from "express";
import { DocumentService } from "../services/document.service";

export class DocumentController {
    static async create(req: Request, res: Response) {
        try {
            // @ts-ignore
            const userId = req.user?.userId;
            const { templateId, title, contentData } = req.body;
            const doc = await DocumentService.create(userId, templateId, title, contentData);
            res.status(201).json(doc);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            // @ts-ignore
            const userId = req.user?.userId;
            const docs = await DocumentService.getAll(userId);
            res.status(200).json(docs);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            // @ts-ignore
            const userId = req.user?.userId;
            const { id } = req.params;
            const doc = await DocumentService.getById(userId, id);
            res.status(200).json(doc);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            // @ts-ignore
            const userId = req.user?.userId;
            const { id } = req.params;
            const { title, contentData, isArchived, tags } = req.body;
            const doc = await DocumentService.update(userId, id, { title, contentData, isArchived, tags });
            res.status(200).json(doc);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async archive(req: Request, res: Response) {
        try {
            // @ts-ignore
            const userId = req.user?.userId;
            const { id } = req.params;
            const doc = await DocumentService.archive(userId, id);
            res.status(200).json(doc);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async unarchive(req: Request, res: Response) {
        try {
            // @ts-ignore
            const userId = req.user?.userId;
            const { id } = req.params;
            const doc = await DocumentService.unarchive(userId, id);
            res.status(200).json(doc);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getVersions(req: Request, res: Response) {
        try {
            // @ts-ignore
            const userId = req.user?.userId;
            const { id } = req.params;
            const versions = await DocumentService.getVersions(userId, id);
            res.status(200).json(versions);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async restoreVersion(req: Request, res: Response) {
        try {
            // @ts-ignore
            const userId = req.user?.userId;
            const { id, versionId } = req.params;
            const doc = await DocumentService.restoreVersion(userId, id, versionId);
            res.status(200).json(doc);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            // @ts-ignore
            const userId = req.user?.userId;
            const { id } = req.params;
            await DocumentService.delete(userId, id);
            res.status(200).json({ message: "Document deleted" });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
