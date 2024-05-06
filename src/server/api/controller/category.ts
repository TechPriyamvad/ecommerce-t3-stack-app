import { generateCategoriesData } from "../service/faker";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { FAKER_CATEGORY_COUNT } from "constants/serverConstants";

// Hit this api endpoint to generate list of duplicate categories
// Hit this api endpoint only once
// Before hitting this api endpoint delete category table if it exists
export const categoryRouter = createTRPCRouter({
  generateCategories: publicProcedure.query(()=> generateCategoriesData(FAKER_CATEGORY_COUNT)),
  getAllCategories: publicProcedure.query(()=>getAllCategories());
});