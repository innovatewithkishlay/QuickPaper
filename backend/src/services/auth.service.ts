import { prisma } from "../prisma/client";
import { hashPassword, comparePassword } from "../utils/password";
import { generateToken } from "../utils/token";

export class AuthService {
    static async register(name: string, email: string, password: string) {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            throw new Error("User already exists");
        }

        const hashedPassword = await hashPassword(password);
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password_hash: hashedPassword,
            },
        });

        const token = generateToken({ userId: user.id, email: user.email });
        return { user: { id: user.id, name: user.name, email: user.email }, token };
    }

    static async login(email: string, password: string) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error("Invalid credentials");
        }

        const isValid = await comparePassword(password, user.password_hash);
        if (!isValid) {
            throw new Error("Invalid credentials");
        }

        const token = generateToken({ userId: user.id, email: user.email });
        return { user: { id: user.id, name: user.name, email: user.email }, token };
    }

    static async getProfile(userId: string) {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new Error("User not found");
        }
        return { id: user.id, name: user.name, email: user.email };
    }
}
