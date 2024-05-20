import { PrismaClient } from "@prisma/client";
import { TRPCError } from "@trpc/server";

const prisma = new PrismaClient();

export async function signup(name: string, email: string,verification_code:string,password:string){
    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                verification_code,
                password,
            }
        });
        return newUser;
    } catch (error) {
        console.error((error as { message: string }).message);
        throw new TRPCError({message:"Failed to create user",code:'INTERNAL_SERVER_ERROR'});
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
        console.error((error as { message: string }).message);
        throw new TRPCError({message:"Failed to find user by email",code:'INTERNAL_SERVER_ERROR'});
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
        console.error((error as { message: string }).message);
        throw new TRPCError({message:"Failed to verify user",code:'INTERNAL_SERVER_ERROR'});
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
        throw new TRPCError({message:"Failed to update user",code:'INTERNAL_SERVER_ERROR'});
    }
}