import { query } from "@/functions/db";

export async function GET() {
  const res = await query(
    "SELECT review.id, review.name, review.stars, review.content, book.title, book.price, book.sold, book.description, book.category FROM review INNER JOIN book ON review.book = book.id ORDER BY stars DESC LIMIT 3",
  );

  const rows = res.rows.map((v) => ({
    id: v.id,
    name: v.name,
    stars: Number(v.stars),
    content: v.content,
    book: {
      title: v.title,
      price: Number(v.price),
      sold: Number(v.sold),
      description: v.description,
      category: v.category,
    },
  }));

  return Response.json(rows);
}
