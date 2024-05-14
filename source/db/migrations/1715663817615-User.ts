import { MigrationInterface, QueryRunner } from "typeorm";
import { runUserSeeds } from "../seeds/user";

export class User1715663817615 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "firstName" varchar(50) NOT NULL,
        "lastName" varchar(50) NOT NULL,
        "email" varchar NOT NULL,
        "password" varchar NOT NULL,
        CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")
      )`
    );

    await runUserSeeds(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
