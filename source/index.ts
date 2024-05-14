import "reflect-metadata";

import { connectDatabase } from "./db/connection";
connectDatabase();

import http from "http";
import { app } from "./app";

const port = process.env.PORT as string;

const server = http.createServer(app);

server.on("error", (error: any) => {
  console.error(error);
  throw error;
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
