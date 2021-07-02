import { getAllBooks, getBook } from "../controllers/BookController";
import { Book } from "../models/BookModel";
import { Context } from "../models/ContextModel";

/**
 * @description holds book queries
 */

export const BookQuery = {
  books: {
    resolve: async (
      parent: unknown,
      args: Book,
      context: Context,
      info: unknown
    ) => {
      return await getAllBooks(context.dbConnect);
    }
  },
  book: {
    resolve: async (
      parent: unknown,
      args: Book,
      context: Context,
      info: unknown
    ) => {
      return await getBook(context.dbConnect, args.id);
    }
  }
};
