export const runtime = "edge";

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export default async function GET(request: Request) {
  try {
    const result = await sql`DELETE FROM Comments`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
