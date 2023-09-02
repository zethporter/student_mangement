import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

import type { NextApiRequest, NextApiResponse } from "next";
import {
  selectStudentSchema,
  insertStudentSchema,
  students,
} from "~/db/schema";

// process.env.TURSO_DB_URL
// process.env.TURSO_DB_AUTH_TOKEN

type ResponseData = {
  message?: string;
  data?: any;
};

export default async function studentActions(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method, body, headers } = req;

  const connection = connect({
    host: process.env["DATABASE_HOST"],
    username: process.env["DATABASE_USERNAME"],
    password: process.env["DATABASE_PASSWORD"],
  });
  const db = drizzle(connection);

  switch (method) {
    case "GET":
      const result = await db.select().from(students);
    case "POST":
      try {
        console.log(body);
        // const newStudent = body;
        const newStudent = await db.insert(students).values(body);
        res.status(200).json({ data: newStudent });
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message:
            "something went wrong figure out what the actual message is.",
        });
      }
    case "PATCH":
    case "DELETE":
    default:
      // res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
      res.status(405).end(`${method} method not allowed`);
  }
}