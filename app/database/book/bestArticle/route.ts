import { query } from "@/libs/db";

export async function GET() {
  const res = await query("SELECT title, price, description FROM book ORDER BY sold DESC LIMIT 1");
  const rows = res.rows.map((b) => ({ title: b.title, price: Number(b.price), description: b.description }));
  return Response.json(rows[0]);
}
