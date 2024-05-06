import { seedCategories } from "../repository/faker";

export async function generateCategoriesData(categoryCount:number){
    console.log('categoryCount: ',categoryCount);
    const categories = seedCategories(categoryCount);
    return categories;
}