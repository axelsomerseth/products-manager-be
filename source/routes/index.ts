import express, { Router } from "express";
import { healthCheck } from "../handlers/health";

const router: Router = express.Router();

router.get("/health", healthCheck);

export default router;
