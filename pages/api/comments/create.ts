import { Comment } from "./../../../components/comment.component";
import type { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

interface IBody {
  comment: string;
}

interface IResponse {
  comments: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  if (req.method === "POST") {
    const { comment } = JSON.parse(req.body) as IBody;

    await sql`
      INSERT INTO Comments (comment)
      VALUES (${comment})
    `;

    const { rows } = await sql`
     SELECT * FROM Comments
    `;

    res.status(200).json({ comments: rows.map((r) => r.comment) });
  }
}
