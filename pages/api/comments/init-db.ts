export const runtime = "edge";

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

const initialComments = [
  "Best article ever! 😍",
  "Js ftw 🌚",
  "Nice job ChatGpt 🫡",
];

export default async function GET(request: Request) {
  try {
    initialComments.forEach(async (comment) => {
      await sql`
      INSERT INTO Comments (comment)
      VALUES (${comment})
      `;
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
