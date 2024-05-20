import { TRPCError } from "@trpc/server";
import {
  fetchAllCategoriesFromDatabase,
  fetchCategoriesFromDatabase,
} from "../repository/category";
import {
  createUserCategoriesInDatabase,
  fetchUserCategoriesFromDatabase,
  updateUserCategorySelectionInDatabase,
} from "../repository/userCategory";
import { use } from "react";

interface UserCategory {
  user_id: number | undefined;
  name: string | null;
  category_id: number | undefined;
  is_category_selected: boolean | undefined;
  createdAt: Date | null | undefined;
  updateAt: Date | null | undefined;
  isDeleted: boolean | undefined;
}

export const createUserCategories = async (user_id: number) => {
  try {
    const categories = await fetchCategoriesFromDatabase();
    // console.log("categories: ", categories);
    const userCategories = [];
    for (const category of categories) {
      if (user_id === undefined) {
        throw new Error("user_id is required");
      }
      userCategories.push({ user_id, category_id: category.id });
    }
    console.log("userCategories: ", userCategories);
    await createUserCategoriesInDatabase(userCategories);
    return { status: 200, message: "User categories created successfully" };
  } catch (error) {
    console.error((error as { message: string }).message);
    throw error;
  }
};

export const fetchUserCategories = async (
  page: number,
  user_id: string,
): Promise<UserCategory[]> => {
  try {
    console.log("fetching user categories");
    const userIdNUmber = Number(user_id);
    console.log("user_id", userIdNUmber);
    const updatedUserCategories = [];
    const userCategories = await fetchUserCategoriesFromDatabase(
      page,
      userIdNUmber,
    );
    const categories = await fetchAllCategoriesFromDatabase(page);
    if (categories !== undefined && userCategories !== undefined) {
      for (let idx = 0; idx < userCategories.length; idx++) {
        const updatedUserCategory = {
          name: categories[idx]?.name ?? "",
          user_id: userCategories[idx]?.user_id ?? 0,
          category_id: userCategories[idx]?.category_id ?? 0,
          is_category_selected:
            userCategories[idx]?.is_category_selected ?? false,
          createdAt: userCategories[idx]?.createdAt ?? null,
          updateAt: userCategories[idx]?.updateAt ?? null,
          isDeleted: userCategories[idx]?.isDeleted ?? false,
        };
        updatedUserCategories.push(updatedUserCategory);
      }
    } else {
      throw new TRPCError({
        message: "Failed to fetch user categories",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
    // console.log("userCategories: ", userCategories);
    // console.log("categories: ", categories);
    console.log("userCategories: ", updatedUserCategories);
    return updatedUserCategories;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw error;
  }
};

export const updateUserCategorySelection = async (input: {
  user_id: number;
  category_id: number;
  is_category_selected: boolean;
}) => {
  try {
    const { user_id, category_id, is_category_selected } = input;
    const updatedUserCategory = await updateUserCategorySelectionInDatabase(
      user_id,
      category_id,
      is_category_selected,
    );
    return updatedUserCategory;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw error;
  }
};
