import { query } from "@/functions/db";

export async function GET() {
  const res = await query(
    "SELECT id, title, price, description FROM book ORDER BY sold DESC LIMIT 1",
  );
  const rows = res.rows.map((b) => ({
    id: b.id,
    title: b.title,
    price: Number(b.price),
    description: b.description,
  }));
  return Response.json(rows[0]);
}
