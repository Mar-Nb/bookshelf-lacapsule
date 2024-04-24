import { getConnection } from "@/libs/connection";

let connection = getConnection();

export async function GET() {
  const res = await connection.query(
    `SELECT * FROM "${process.env.PG_SCHEMA}"."book" ORDER BY sold DESC LIMIT 1`,
  );
  return Response.json(res.rows[0]);
}
