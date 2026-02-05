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
            const { title, contentData } = req.body;
            const doc = await DocumentService.update(userId, id, title, contentData);
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
