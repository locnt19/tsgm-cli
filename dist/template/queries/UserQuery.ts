import { getAllUsers, getUser } from "../controllers/UserController";
import { Context } from "../models/ContextModel";
import { User } from "../models/UserModel";

/**
 * @description holds user queries
 */

export const UserQuery = {
  users: {
    resolve: async (
      parent: unknown,
      args: User,
      context: Context,
      info: unknown
    ) => {
      return await getAllUsers(context.dbConnect);
    }
  },
  user: {
    resolve: async (
      parent: unknown,
      args: User,
      context: Context,
      info: unknown
    ) => {
      return await getUser(context.dbConnect, args.id);
    }
  }
};
