import { PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { PAGE_SIZE } from "constants/serverConstants";

const prisma = new PrismaClient();
/**
    if we are importing a dependency like prisma in Nodejs(for database connections and querying) in multiple repositories.
    Do I need to use singleton pattern there
 */

interface Category {
  id: number;
  name: string;
  createdAt: Date | null;
  updateAt: Date | null;
  isDeleted: boolean;
  isSelected: boolean;
}

export async function fetchAllCategoriesFromDatabase(
  page: number,
): Promise<Category[]> {
  try {
    const pageSize = PAGE_SIZE;
    const skip = (page - 1) * pageSize;
    const categories = await prisma.category.findMany({
      skip: skip,
      take: PAGE_SIZE,
    });

    return categories;
  } catch (error) {
    console.error("Error seeding categories: ", error);
    throw new TRPCError({message:"Error seeding categories",code:'INTERNAL_SERVER_ERROR'});
  }
}

export async function updateCategorySelectionInDatabase(
  id: number,
  isSelected: boolean,
) {
  try {
    const updatedCategory = await prisma.category.update({
      where: { id },
      data: { isSelected },
    });
    return updatedCategory;
  } catch (error) {
    console.error("Error updating category selection: ", error);
    throw new TRPCError({message:"Failed to update category selection",code:'INTERNAL_SERVER_ERROR'});
  }
}

export async function fetchCategoriesFromDatabase() {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    console.error("Error fetching categories: ", error);
    throw new TRPCError({message:"Failed to fetch categories",code:'INTERNAL_SERVER_ERROR'});
  }
}
