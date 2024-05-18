import { query } from "@/functions/db";

export async function GET() {
  const res = await query("SELECT id, title, description FROM category");
  return Response.json(res.rows);
}
