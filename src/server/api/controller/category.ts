import { z } from "zod";
import { fetchAllCategories } from "../service/category";
import { generateCategoriesData } from "../service/faker";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { FAKER_CATEGORY_COUNT } from "constants/serverConstants";

// Hit the api endpoint to generate list of duplicate categories
// Hit the api endpoint only once
// Before hitting the api endpoint delete category table if it exists
export const categoryRouter = createTRPCRouter({
  generateCategories: publicProcedure.query(()=> generateCategoriesData(FAKER_CATEGORY_COUNT)),
  fetchCategories: publicProcedure.input(z.object({
    page: z.number(),
  })).query(async ({input})=> await fetchAllCategories(input.page ?? 1))
});