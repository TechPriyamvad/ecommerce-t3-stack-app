// procedures/signupProcedure.ts
import {
  createAccount,
  findUserByEmail,
  loginUser,
  updateUser,
  verifyUser,
} from "../service/user";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { signupRequestSchema } from "~/server/api/schema/signup";
import { z } from "zod";
import { loginRequestSchema } from "../schema/login";

export const userRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(signupRequestSchema)
    .mutation(async ({ input }) => await createAccount(input)),

  findUserByEmail: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .query(async ({ input }) => await findUserByEmail(input)),

  verifyUser: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        verification_code: z.string(),
      }),
    )
    .mutation(async ({ input }) => await verifyUser(input)),

  updateUser: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => await updateUser(input)),

  login: publicProcedure
    .input(loginRequestSchema)
    .mutation(async ({ input }) => await loginUser(input)),
});
