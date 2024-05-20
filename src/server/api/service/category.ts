import { log } from "console";
import {
  fetchAllCategoriesFromDatabase,
  updateCategorySelectionInDatabase,
} from "~/server/api/repository/category";
interface Category {
  id: number;
  name: string;
  createdAt: Date;
  updateAt: Date;
  isDeleted: boolean;
  isSelected: boolean;
}
export async function fetchAllCategories(page: number): Promise<Category[]> {
  try {
    log('fetching categories');
    const categories = (await fetchAllCategoriesFromDatabase(page)) as Category[];
    // console.log('categories: ',categories?.result?.data);
    return categories;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw error;    
  }
}
export async function updateCategorySelectionService(input: {
  id: number;
  isSelected: boolean;
}) {
  try {
    const { id, isSelected } = input;
    const updatedCategory = await updateCategorySelectionInDatabase(
      id,
      isSelected,
    );
    return updatedCategory;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw error;
  }
}
