import dotenv from 'dotenv';
import knex from 'knex';

dotenv.config();

export abstract class BaseDatabase {
  protected connection = knex({
    client: 'mysql2',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      port: Number(process.env.DATABASE_PORT),
      multipleStatements: true,
    },
    pool: {
      min: 2,
      max: 30,
    },
  });
}
