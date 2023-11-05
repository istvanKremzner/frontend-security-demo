import type { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

interface IResponse {
  comments: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  if (req.method === "GET") {
    const { rows } = await sql`
      SELECT * FROM Comments
  `;

    res.status(200).json({ comments: rows.map((r) => r.comment) });
  }
}
