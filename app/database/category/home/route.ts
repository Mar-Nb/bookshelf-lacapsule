import { query } from "@/libs/db";

export async function GET() {
  const res = await query("SELECT * FROM category LIMIT 2");
  const rows = res.rows.map((v) => ({
    title: v.title,
    description: v.description,
  }));
  return Response.json(rows);
}
