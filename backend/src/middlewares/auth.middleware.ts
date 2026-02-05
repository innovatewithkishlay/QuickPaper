import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/token";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    const payload = verifyToken(token);

    if (!payload) {
        return res.status(401).json({ error: "Invalid token" });
    }

    // @ts-ignore
    req.user = payload;
    next();
}
