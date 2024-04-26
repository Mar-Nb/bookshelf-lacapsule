import { query } from "@/libs/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const category = decodeURI(
    req.nextUrl.searchParams.get("title") ?? "",
  ).toLowerCase();
  const searchedCategory = await query(
    `SELECT * FROM category WHERE LOWER(category.title) LIKE '${category}'`,
  );
  const id = searchedCategory.rows[0].id;
  const books = await query(`SELECT * FROM book WHERE category = '${id}'`);

  const json = {
    category: {
      title: searchedCategory.rows[0].title,
      description: searchedCategory.rows[0].description,
    },
    books: books.rows.map((v) => ({
      id: v.id,
      title: v.title,
      price: Number(v.price),
      description: v.description,
    })),
  };

  return Response.json(json);
}
