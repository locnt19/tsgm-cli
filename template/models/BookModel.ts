import {
  Document,
  Schema,
  SchemaDefinition,
  SchemaTypes,
  Model,
  Connection
} from "mongoose";

/**
 * @description holds book model
 */

/**
 * Book interface
 */
export interface Book extends Document {
  id: string;
  name: string;
  description: string;
  transform: () => Book;
}

/**
 * book schema
 */
const schema: SchemaDefinition = {
  name: { type: SchemaTypes.String, required: true, unique: true },
  description: { type: SchemaTypes.String, required: true }
};

// book collection name
const collectionName: string = "book";

const bookSchema: Schema = new Schema(schema);

/**
 * transforms book object,
 * changes _id to id
 */
bookSchema.methods.transform = function (): Book {
  const { _id, ...data } = this.toObject<Book>();

  data.id = _id;

  return data as Book;
};

/**
 * creates book model
 * @param conn database connection
 * @returns book model
 */
const BookModel = (conn: Connection): Model<Book> =>
  conn.model<Book>(collectionName, bookSchema);

export default BookModel;
