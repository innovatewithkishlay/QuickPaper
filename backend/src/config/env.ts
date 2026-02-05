import dotenv from "dotenv";
import path from "path";

// Load .env from root of backend
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const ENV = {
    PORT: process.env.PORT || 5000,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET || "default_secret",
    NODE_ENV: process.env.NODE_ENV || "development",
};
