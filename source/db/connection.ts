import { DataSource, DataSourceOptions } from "typeorm";

// Entities

// Migrations

// Seeds

const options: DataSourceOptions = {
  type: "sqlite",
  database: process.env.DATABASE_NAME as string,
  synchronize: false,
  entities: ["./build/entities/*.js"],
  migrations: ["./build/migrations/*.js"],
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
