import { fetchAllCategoriesFromDatabase } from "~/server/api/repository/category";
interface Category {
    id: number;
    name: string;
    createdAt: Date;
    updateAt: Date;
    isDeleted: boolean;
    isSelected: boolean;
}
export async function fetchAllCategories(page:number):Promise<Category[]>{
    const categories = await fetchAllCategoriesFromDatabase(page) as Category[];
    // console.log('categories: ',categories?.result?.data);
    return categories;
}