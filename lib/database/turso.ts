import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import env from "../env";

const connection = createClient({
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(connection);
