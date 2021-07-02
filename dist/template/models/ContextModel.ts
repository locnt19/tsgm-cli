import { Connection } from "mongoose";

export interface Context {
  dbConnect: Connection;
}
