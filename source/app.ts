import express, { Express } from "express";
import cors from "cors";
import indexRouter from "./routes/index";

const app: Express = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRouter);

export { app };
