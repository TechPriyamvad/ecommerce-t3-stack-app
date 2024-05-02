import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function signup(name: string, email: string){
    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email
            }
        });
        return newUser;
    } catch (error) {
        console.error('Error creating user: ',error);
        throw new Error("Failed to create user");
    }
}