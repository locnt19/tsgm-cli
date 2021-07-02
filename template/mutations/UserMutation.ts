import {
  createUser,
  deleteUser,
  updateUser
} from "../controllers/UserController";
import { Context } from "../models/ContextModel";
import { User } from "../models/UserModel";

/**
 * @description holds user mutations
 */

export const UserMutation = {
  createUser: {
    resolve: async (
      parent: unknown,
      args: { input: User },
      context: Context,
      info: unknown
    ) => {
      return await createUser(context.dbConnect, args.input);
    }
  },
  updateUser: {
    resolve: async (
      parent: unknown,
      args: { input: User },
      context: Context,
      info: unknown
    ) => {
      return await updateUser(context.dbConnect, args.input);
    }
  },
  deleteUser: {
    resolve: async (
      parent: unknown,
      args: User,
      context: Context,
      info: unknown
    ) => {
      return await deleteUser(context.dbConnect, args.id);
    }
  }
};
