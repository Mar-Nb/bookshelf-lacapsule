import { getConnection } from "@/libs/connection";

let connection = getConnection();

export async function GET() {
  const res = await connection.query(
    `SELECT * FROM "${process.env.PG_SCHEMA}"."category" LIMIT 2`,
  );
  const rows = res.rows.map((v) => ({
    title: v.title,
    description: v.description,
  }));
  return Response.json(rows);
}
