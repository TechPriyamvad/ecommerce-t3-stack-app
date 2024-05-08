import { PrismaClient } from "@prisma/client";
import { PAGE_SIZE } from "constants/serverConstants";

const prisma = new PrismaClient();

interface Category {
    id: number;
    name: string;
    createdAt: Date | null;
    updateAt: Date | null;
    isDeleted: boolean;
    isSelected: boolean;
}

export async function fetchAllCategoriesFromDatabase(page:number):Promise<Category[]>{
    try {
        const pageSize = PAGE_SIZE;
        const skip = (page - 1) * pageSize;
        const categories = await prisma.category.findMany({
            skip:skip,
            take:PAGE_SIZE
        });

        return categories;
    } catch (error) {
        console.error('Error seeding categories: ',error);
        throw new Error("Failed to seed categories");    
    }
}