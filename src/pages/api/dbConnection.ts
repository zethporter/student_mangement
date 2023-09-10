import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
 
const client = createClient({ url: "libsql://drivers-ed-zethporter.turso.io", authToken: process.env.TURSO_DB_AUTH_TOKEN });
 
const db = drizzle(client);
 
// const result = await db.select().from(users).all()


