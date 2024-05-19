import { PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";
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
        throw new TRPCError({message:'Error seeding categories',code:'INTERNAL_SERVER_ERROR'});   
    }
}