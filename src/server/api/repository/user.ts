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
export async function verifyUserInDatabase(email:string,verification_code:string){
    try {
        const user = await prisma.user.findUnique({
            where:{
                email,
                verification_code
            }
        })
        return user;
    } catch (error) {
        console.error('Error verifying user: ',error);
        throw new Error("Failed to verify user");
    }
}
export async function updateVerifiedUserInDatabase(email:string){
    try {
        const updatedUser = await prisma.user.update({
            where:{
                email
            },
            data:{
                isVerified:true,
                verification_code:null
            }
        });
        return updatedUser;
    } catch (error) {
        console.error('Error updating user: ',error);
        throw new Error("Failed to update user");
    }
}