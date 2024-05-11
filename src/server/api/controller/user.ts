// procedures/signupProcedure.ts
import { createAccount, findUserByEmail } from "../service/user";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { signupRequestSchema } from "~/server/api/schema/signup";
import {z} from 'zod';

export const signupRouter = createTRPCRouter({
  signUp: publicProcedure.input(signupRequestSchema).mutation(({input})=>createAccount(input)),
  findUserByEmail:publicProcedure.input(z.object({
    email:z.string().email()
  })).query(async ({input})=>await findUserByEmail(input)),
});
