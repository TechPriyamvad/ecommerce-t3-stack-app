// procedures/signupProcedure.ts
import { createAccount } from "../service/user";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { signupRequestSchema } from "~/server/api/schema/signup";

export const signupRouter = createTRPCRouter({
  signUp: publicProcedure.input(signupRequestSchema).mutation(({input})=>createAccount(input))
});
