import express from "express";
import cors from "cors";
import helmet from "helmet";
import { ENV } from "./config/env";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
import routes from "./routes";

app.use("/api/v1", routes);

// Health Check
app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "OK", env: ENV.NODE_ENV });
});

// Global Error Handler Placeholder
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

export default app;
