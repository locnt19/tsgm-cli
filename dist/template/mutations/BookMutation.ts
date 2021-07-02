import {
  createBook,
  deleteBook,
  updateBook
} from "../controllers/BookController";
import { Book } from "../models/BookModel";
import { Context } from "../models/ContextModel";

/**
 * @description holds book mutations
 */

export const BookMutation = {
  createBook: {
    resolve: async (
      parent: unknown,
      args: { input: Book },
      context: Context,
      info: unknown
    ) => {
      return await createBook(context.dbConnect, args.input);
    }
  },
  updateBook: {
    resolve: async (
      parent: unknown,
      args: { input: Book },
      context: Context,
      info: unknown
    ) => {
      return await updateBook(context.dbConnect, args.input);
    }
  },
  deleteBook: {
    resolve: async (
      parent: unknown,
      args: Book,
      context: Context,
      info: unknown
    ) => {
      return await deleteBook(context.dbConnect, args.id);
    }
  }
};
