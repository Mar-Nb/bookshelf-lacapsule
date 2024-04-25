import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function query(sql: string, params?: any[]) {
  return await pool.query(sql, params);
}
