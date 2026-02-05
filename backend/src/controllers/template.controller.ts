import { Request, Response } from "express";
import { TemplateService } from "../services/template.service";

export class TemplateController {
    static async getAll(req: Request, res: Response) {
        try {
            const templates = await TemplateService.getAll();
            res.status(200).json(templates);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const template = await TemplateService.getById(id);
            res.status(200).json(template);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }
}
