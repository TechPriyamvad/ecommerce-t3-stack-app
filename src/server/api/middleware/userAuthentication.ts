import type { PrismaClient } from "@prisma/client";
import type { DefaultArgs } from "@prisma/client/runtime/library";
import { TRPCClientError } from "@trpc/client";
import type {
  MiddlewareResult,
} from "@trpc/server/unstable-core-do-not-import";
import type { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "~/utils/jwt";

interface Context {
  db: PrismaClient<{ log: ("query" | "warn" | "error")[] }, never, DefaultArgs>;
  req: NextApiRequest;
  res: NextApiResponse;
}
export const isUserAuthenticated = async ({
  ctx,
  next,
}: {
  ctx: Context;
  next: (token: object) => Promise<MiddlewareResult<object>>;
}): Promise<MiddlewareResult<object>> => {
  console.log("ctx: ", ctx?.req?.headers?.authorization);
  const token = ctx?.req?.headers?.authorization;
  try {
    if (!token) {
      throw new TRPCClientError("Authorization header token is missing");
    }
    verifyToken(token);
  } catch (error) {
    console.error(
      "Error in user authentication middleware: ",
      (error as { message: string }).message,
    );
    throw error;
  }
  return next({ token });
};
