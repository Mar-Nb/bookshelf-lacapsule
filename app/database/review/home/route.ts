import { getConnection } from "@/libs/connection";

let connection = getConnection();

export async function GET() {
  const res = await connection.query(
    `SELECT * FROM "${process.env.PG_SCHEMA}"."review" ORDER BY stars DESC LIMIT 3`,
  );

  const rows = res.rows.map((v) => ({
    name: v.name,
    stars: v.stars,
    content: v.content,
    book: v.book,
    date: v.__created_time,
  }));
  return Response.json(rows);
}
