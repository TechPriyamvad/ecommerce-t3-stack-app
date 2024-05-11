import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function signup(name: string, email: string,verification_code:string){
    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                verification_code
            }
        });
        return newUser;
    } catch (error) {
        console.error('Error creating user: ',error);
        throw new Error("Failed to create user");
    }
}
export async function findUserByEmailInDatabase(email: string){
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        return user;
    } catch (error) {
        console.error('Error finding user by email: ',error);
        throw new Error("Failed to find user by email");
    }
}