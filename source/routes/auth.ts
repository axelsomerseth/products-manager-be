import express, { Router } from "express";
import { signUp, logIn, recoverPassword } from "../handlers/auth";

const router: Router = express.Router();

router.post("/signup", signUp);

router.post("/login", logIn);

router.post("/recover", recoverPassword);

export default router;
