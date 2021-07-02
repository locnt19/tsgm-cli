import UserModel, { User } from "../models/UserModel";
import { ApolloError } from "apollo-server";
import { Connection } from "mongoose";

/**
 *
 * @description holds crud operations for the user entity
 */

/**
 * gets all users
 * @param connection database connection
 * @returns {User[]} user list
 */
export const getAllUsers = async (connection: Connection) => {
  let list: User[];

  try {
    list = await UserModel(connection).find();
    if (list != null && list.length > 0) {
      list = list.map(u => {
        return u.transform();
      });
    }
  } catch (error) {
    console.error("> getAllUsers error: ", error);
    throw new ApolloError("Error retrieving all users");
  }

  return list;
};

/**
 * gets user by id
 * @param connection database connection
 * @param id user id
 * @returns {User | null} user or null
 */
export const getUser = async (connection: Connection, id: string) => {
  let user: User | null;

  try {
    user = await UserModel(connection).findById(id);
    if (user != null) {
      user = user.transform();
    }
  } catch (error) {
    console.error("> getUser error: ", error);
    throw new ApolloError("Error retrieving user with id: " + id);
  }

  return user;
};

/**
 * creates user
 * @param connection database connection
 * @param args user
 * @returns {User} created user
 */
export const createUser = async (connection: Connection, args: User) => {
  let createdUser: User;

  try {
    createdUser = (await UserModel(connection).create(args)).transform();
  } catch (error) {
    console.error("> createUser error: ", error);
    throw new ApolloError("Error saving user with name: " + args.name);
  }

  return createdUser;
};

/**
 * deletes user
 * @param connection database connection
 * @param id user id
 * @returns {User | null} deleted user or null
 */
export const deleteUser = async (connection: Connection, id: string) => {
  let deletedUser: User | null;

  try {
    deletedUser = await UserModel(connection).findByIdAndRemove(id);
    if (deletedUser != null) {
      deletedUser = deletedUser.transform();
    }
  } catch (error) {
    console.error("> deleteUser error: ", error);
    throw new ApolloError("Error deleting user with id: " + id);
  }

  return deletedUser;
};

/**
 * updates user
 * @param connection database connection
 * @param args user
 * @returns {User | null} updated user or null
 */
export const updateUser = async (connection: Connection, args: User) => {
  // TODO: Update type of context
  let updatedUser: User | null;

  try {
    updatedUser = await UserModel(connection).findByIdAndUpdate(
      args.id,
      {
        name: args.name,
        email: args.email
      },
      { new: true }
    );

    if (updatedUser != null) {
      updatedUser = updatedUser.transform();
    }
  } catch (error) {
    console.error("> updateUser error: ", error);
    throw new ApolloError("Error updating user with id: " + args.id);
  }

  return updatedUser;
};
