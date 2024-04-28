import { query } from "@/libs/db";

export async function GET() {
  const res = await query("SELECT * FROM category");
  return Response.json(res.rows);
}
