import { TRPCError } from "@trpc/server";
import { generateFakeCategories } from "~/utils/fakerDataGenerator";


export async function seedCategories(categoryCount:number){
    try {
        const fakeCategoriesData = generateFakeCategories(categoryCount);
        // const categories = await prisma.category.createMany({
        //     data: fakeCategoriesData
        // });
        console.log(fakeCategoriesData);
        return fakeCategoriesData;
    } catch (error) {
        console.error('Error seeding categories: ',error);
        throw new TRPCError({message:'Error seeding categories',code:'INTERNAL_SERVER_ERROR'});   
    }
}