import { RequestHandler, Request, Response } from "express";
import { AppDataSource } from "../db/connection";

const healthCheck: RequestHandler = (req: Request, res: Response) => {
  AppDataSource.isInitialized;

  res.status(200);
  res.json({
    status: "UP",
    uptime: process.uptime(),
    checks: {
      sqlite: AppDataSource.isInitialized ? "UP" : "DOWN",
      heapSpaceFree:
        process.memoryUsage().heapTotal - process.memoryUsage().heapUsed,
    },
  });
};

export { healthCheck };
