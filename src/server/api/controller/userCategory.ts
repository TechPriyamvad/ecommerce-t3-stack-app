import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { createUserCategories, fetchUserCategories, updateUserCategorySelection } from "../service/userCategory";
import { isUserAuthenticated } from "../middleware/userAuthentication";

export const userCategoryRouter = createTRPCRouter({
    createUserCategories: publicProcedure.input(z.object({
        user_id: z.number(),
    })).mutation(async ({ input }) => await createUserCategories(input.user_id)),
    fetchUserCategories: publicProcedure.input(z.object({
        page:z.number(),
        user_id:z.string()
    })).use(isUserAuthenticated).mutation(async ({input})=>await fetchUserCategories(input.page ?? 1,input.user_id)),
    updateUserCategorySelection:publicProcedure.input(z.object({
        user_id:z.number(),
        category_id:z.number(),
        is_category_selected:z.boolean()
    })).mutation(async ({input})=>await updateUserCategorySelection(input))
});