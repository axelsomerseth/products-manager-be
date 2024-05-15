import express, { Express } from "express";
import cors from "cors";
import indexRouter from "./routes/index";
import authRouter from "./routes/auth";

const app: Express = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRouter);
app.use("/auth", authRouter);
// app.use("/products", );

export { app };
