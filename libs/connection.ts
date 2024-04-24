import { Pool } from "pg";

let connection: Pool | null = null;

function connect(): Pool {
  if (connection) {
    return connection;
  }

  connection = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.PG_DATABASE,
  });

  return connection;
}

export const getConnection = (): Pool => {
  if (!connection) {
    connection = connect();
  }

  return connection;
};
