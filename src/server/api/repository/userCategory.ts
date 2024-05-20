import { PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { PAGE_SIZE } from "constants/serverConstants";

const prisma = new PrismaClient();
interface UserCategoryCreate {
  user_id: number;
  category_id: number;
}

interface UserCategoryFetch {
  user_id: number;
  category_id: number;
  is_category_selected: boolean;
  createdAt: Date | null;
  updateAt: Date | null;
  isDeleted: boolean;
}

export const createUserCategoriesInDatabase = async (
  userCategories: UserCategoryCreate[],
) => {
  try {
    const userCategory = await prisma.user_categories.createMany({
      data: userCategories,
    });
    return userCategory;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw new TRPCError({
      message: "Failed to create user category",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
};
export const fetchUserCategoriesFromDatabase = async (
  page: number,
  user_id: number,
): Promise<UserCategoryFetch[]> => {
  try {
    const pageSize = PAGE_SIZE;
    const skip = (page - 1) * pageSize;
    const userCategories = await prisma.user_categories.findMany({
      skip: skip,
      take: pageSize,
      where: { user_id },
    });
    return userCategories;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw new TRPCError({
      message: "Failed to fetch user categories",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
};

export const updateUserCategorySelectionInDatabase = async (
  user_id: number,
  category_id: number,
  is_category_selected: boolean,
) => {
  try {
    const updatedUserCategory = await prisma.user_categories.update({
      where: { user_id_category_id: { user_id, category_id } },
      data: { is_category_selected },
    });
    return updatedUserCategory;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw new TRPCError({
      message: "Failed to update user selected category",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
};
