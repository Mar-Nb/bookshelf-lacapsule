import { query } from "@/libs/db";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const payload = await req.json();
  const alreadyInCart = await query(
    `SELECT book, copy FROM cart WHERE book = '${payload.book}'`,
  );

  if (!alreadyInCart.rowCount) {
    await query(
      `INSERT INTO cart (book, copy) VALUES ('${payload.book}', ${payload.copy})`,
    );
    return Response.json({ text: "Added to cart" });
  }

  const oldCopyNumber = alreadyInCart.rows[0].copy;
  const inCartBook = alreadyInCart.rows[0].book;
  await query(
    `UPDATE cart SET copy = ${oldCopyNumber} + 1 WHERE book = '${inCartBook}'`,
  );
  return Response.json({ text: "Update copy number in cart" });
}

export async function GET() {
  const res = await query(
    "SELECT cart.id, book, copy, title, price, description FROM cart LEFT JOIN book ON cart.book = book.id",
  );
  return Response.json(res.rows);
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await query(`DELETE FROM cart WHERE id = '${id}'`);
  return Response.json({ text: "Successfully deleted" });
}
