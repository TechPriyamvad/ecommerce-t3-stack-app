import { signup } from '../repository/user';

export async function createAccount(input: {name: string, email: string}){
    const { name, email} = input;
    const newUser = await signup(name,email);
    return {
      message: `User ${newUser.name} created successfully with email ${newUser.email}`,
    };
}