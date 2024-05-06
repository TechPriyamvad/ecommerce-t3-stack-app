import { PrismaClient } from "@prisma/client";
import { generateFakeCategories } from "~/utils/fakerDataGenerator";

const prisma = new PrismaClient();

export async function seedCategories(categoryCount:number){
    try {
        const fakeCategoriesData = generateFakeCategories(categoryCount);
        const categories = await prisma.category.createMany({
            data: fakeCategoriesData
        });
        return categories;
    } catch (error) {
        console.error('Error seeding categories: ',error);
        throw new Error("Failed to seed categories");    
    }
}