import {
  Document,
  Schema,
  SchemaDefinition,
  SchemaTypes,
  Model,
  Connection
} from "mongoose";

/**
 * @description holds user model
 */

/**
 * User interface
 */
export interface User extends Document {
  id: string;
  name: string;
  password: string;
  email: string;
  transform: () => User;
}

/**
 * user schema
 */
const schema: SchemaDefinition = {
  name: { type: SchemaTypes.String, required: true, unique: true },
  password: { type: SchemaTypes.String, required: true },
  email: { type: SchemaTypes.String, required: true }
};

// user collection name
const collectionName: string = "user";

const userSchema: Schema = new Schema(schema);

/**
 * transforms user object, removes password and
 * changes _id to id
 */
userSchema.methods.transform = function (): User {
  const { _id, password, ...data } = this.toObject<User>();

  data.id = _id;

  return data as User;
};

/**
 * creates user model
 * @param conn database connection
 * @returns user model
 */
const UserModel = (conn: Connection): Model<User> =>
  conn.model<User>(collectionName, userSchema);

export default UserModel;
