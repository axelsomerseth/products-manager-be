import dotenv from "dotenv";
dotenv.config();

import { DataSource, DataSourceOptions } from "typeorm";

// Entities
import { User } from "./entities/User";
import { Product } from "./entities/Product";

// Migrations
import { User1715663817615 } from "./migrations/1715663817615-User";
import { Product1715663845069 } from "./migrations/1715663845069-Product";

// Seeds

const options: DataSourceOptions = {
  type: "sqlite",
  database: process.env.DATABASE_NAME as string,
  synchronize: false,
  entities: [User, Product],
  migrations: [User1715663817615, Product1715663845069],
  logging: process.env.MODE === "development",
};

const AppDataSource = new DataSource(options);

const connectDatabase = async () => {
  try {
    const connection: DataSource = await AppDataSource.initialize();
    if (connection.isInitialized) {
      console.log("Database connected.");
    }
  } catch (error) {
    console.log("Unable to connect to the database.");
    console.log(error);
  } finally {
    console.log("__________");
  }
};

export { connectDatabase, AppDataSource };
