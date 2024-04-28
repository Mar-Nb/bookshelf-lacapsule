import { query } from "@/libs/db";

export async function GET() {
  const res = await query(
    "SELECT * FROM review INNER JOIN book ON review.book = book.id ORDER BY stars DESC LIMIT 3",
  );
  const rows = res.rows.map((v) => ({
    id: v.id,
    name: v.name,
    stars: v.stars,
    content: v.content,
    book: {
      title: v.title,
      price: v.price,
      sold: v.sold,
      description: v.description,
      category: v.category,
    },
  }));
  return Response.json(rows);
}
