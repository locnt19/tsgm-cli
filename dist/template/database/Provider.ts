import { Connection, createConnection } from "mongoose";

/**
 * @description holds database connection provider
 */

// connection uri
const uri: string = process.env.MONGO_DB_PATH as string;

// mongoose connection
let conn: Connection | null = null;

/**
 * creates database connection
 * @returns mongodb connection
 */
export async function getConnection(): Promise<Connection> {
  if (conn == null) {
    conn = await createConnection(uri, {
      bufferCommands: false,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  }

  return conn;
}
