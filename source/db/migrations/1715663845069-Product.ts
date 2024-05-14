import { MigrationInterface, QueryRunner } from "typeorm";

export class Product1715663845069 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "handle" varchar(100) NOT NULL,
        "title" varchar(100) NOT NULL,
        "description" varchar(255) NOT NULL,
        "sku" varchar NOT NULL,
        "grams" float NOT NULL,
        "stock" integer NOT NULL,
        "price" float NOT NULL,
        "comparePrice" float NOT NULL,
        "barcode" varchar(13),
        "userId" integer,
        CONSTRAINT "UQ_db7355f7bd36c547c8a4f539e57" UNIQUE ("handle"),
        CONSTRAINT "UQ_34f6ca1cd897cc926bdcca1ca39" UNIQUE ("sku"),
        CONSTRAINT "FK_329b8ae12068b23da547d3b4798" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "product"`);
  }
}
