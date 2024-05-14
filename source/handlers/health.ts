import { RequestHandler, Request, Response } from "express";

const healthCheck: RequestHandler = (req: Request, res: Response) => {
  res.status(200);
  res.json({
    status: "UP",
    uptime: process.uptime(),
    checks: {
      sqlite: "N/A",
      heapSpaceFree:
        process.memoryUsage().heapTotal - process.memoryUsage().heapUsed,
    },
  });
};

export { healthCheck };
