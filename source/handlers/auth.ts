import { RequestHandler, Request, Response } from "express";
import { hash } from "bcrypt";
import { addUser } from "../repository/user";
import { User } from "../db/entities/User";

const signUp: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await hash(password, 10);
    const user = new User(firstName, lastName, email, hashedPassword);
    const saved = await addUser(user);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

const logIn: RequestHandler = async (req: Request, res: Response) => {
  const credentials = req.body;

  res.status(200);
  res.json({
    credentials,
  });
};

const recoverPassword: RequestHandler = async (req: Request, res: Response) => {
  const credentials = req.body;

  res.status(200);
  res.json({
    credentials,
  });
};

export { signUp, logIn, recoverPassword };
