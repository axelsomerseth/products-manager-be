import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 5000;

const greeting: string = "Hello, World!";

app.get("/", (req: Request, res: Response) => {
  res.send(greeting);
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
