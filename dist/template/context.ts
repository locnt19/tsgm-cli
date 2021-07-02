import { getConnection } from "./database/Provider";
import { Context } from "./models/ContextModel";

/**
 * @description holds context for Apollo Server
 */

export const context = async (): Promise<Context> => {
  const dbConnect = await getConnection();

  return { dbConnect };
};
