import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class AuthController {
    static async register(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ error: "Missing required fields" });
            }

            const result = await AuthService.register(name, email, password);
            res.status(201).json(result);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: "Missing required fields" });
            }

            const result = await AuthService.login(email, password);
            res.status(200).json(result);
        } catch (error: any) {
            res.status(401).json({ error: error.message });
        }
    }

    static async getProfile(req: Request, res: Response) {
        try {
            // @ts-ignore - userId attached by middleware
            const userId = req.user?.userId;
            const user = await AuthService.getProfile(userId);
            res.status(200).json(user);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }
}
