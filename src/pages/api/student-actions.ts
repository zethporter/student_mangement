import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { getAuth } from "@clerk/nextjs/server";

import type { NextApiRequest, NextApiResponse } from "next";
import {
  selectStudentSchema,
  insertStudentSchema,
  students,
} from "~/db/schema";
import TempStudentArray from "~/temp/tempStudents";

// process.env.TURSO_DB_URL
// process.env.TURSO_DB_AUTH_TOKEN

type ResponseData = {
  message?: string;
  data?: any;
  error?: string;
};

export default async function studentActions(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const { method, body } = req;
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const connection = connect({
    host: process.env["DATABASE_HOST"],
    username: process.env["DATABASE_USERNAME"],
    password: process.env["DATABASE_PASSWORD"],
  });
  const db = drizzle(connection);

  switch (method) {
    case "GET":
      if (process.env.NODE_ENV === "development") {
        res.status(200).json({ data: TempStudentArray });
      } else {
        try {
          const result = await db.select(body.query).from(students);
          res.status(200).json({ data: result });
        } catch {
          res.status(500).json({ message: "someting went wrong..." });
        }
      }
      break;
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
      break;
    // case "PATCH":
    // case "DELETE":
    default:
      res.status(405).end(`${method} method not allowed`);
  }
}
