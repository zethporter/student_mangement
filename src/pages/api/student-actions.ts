import { drizzle } from "drizzle-orm/planetscale-serverless";
import { eq, lt, gte, ne } from "drizzle-orm";
import { connect } from "@planetscale/database";
import { getAuth } from "@clerk/nextjs/server";
import gradient from "gradient-string";

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
  if (process.env.NODE_ENV === "development") {
    console.log(gradient.teen(userId ?? ""));
  }

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
      try {
        const result = await db
          .select(body.query)
          .from(students)
          .where(eq(students.user_id, userId));
        res.status(200).json({ data: result });
      } catch {
        res.status(500).json({ message: "someting went wrong..." });
      }
      break;
    case "POST":
      try {
        const id = crypto.randomUUID();
        body["id"] = id;
        body["user_id"] = userId;

        const validatedBody = await insertStudentSchema.parseAsync(body);
        console.log(gradient.cristal.multiline(JSON.stringify(body)));
        console.log(gradient.fruit.multiline(JSON.stringify(validatedBody)));

        await db.insert(students).values(validatedBody);

        res.status(200).json({
          message: `Added ${validatedBody.first_name} ${validatedBody.last_name}`,
        });
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: JSON.stringify(e),
        });
      }
      break;
    // case "PATCH":
    // case "DELETE":
    default:
      res.status(405).end(`${method} method not allowed`);
  }
}
