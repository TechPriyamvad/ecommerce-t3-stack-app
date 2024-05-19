import { seedCategories } from "../repository/faker";

export async function generateCategoriesData(categoryCount:number){
    try {
        console.log('categoryCount: ',categoryCount);
        const categories = seedCategories(categoryCount);
        return categories;
    } catch (error) {
        console.error((error as { message: string }).message);
        throw error;
    }
}