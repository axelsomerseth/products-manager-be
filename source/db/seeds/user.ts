import { QueryRunner } from "typeorm";

export const runUserSeeds = async (queryRunner: QueryRunner) => {
  await queryRunner.query(
    `INSERT INTO user (firstName, lastName, email, password)
    VALUES ("John", "Doe", "johndoe@example.com", "password");`
  );
};
