import { generateVerificationCode } from "~/utils/generateVerificationCode";
import { signup, findUserByEmailInDatabase } from "../repository/user";
import { sendVerificationEmailUsingSendgrid } from "~/utils/sendMailUsingSendgrid";

export async function createAccount(input: { name: string; email: string }) {
  try {
    const { name, email } = input;
    const verification_code = generateVerificationCode();
    await sendVerificationEmailUsingSendgrid(email,verification_code);
    const newUser = await signup(name, email,verification_code);
    return {
      message: `User ${newUser.name} created successfully with email ${newUser.email}`,
    };
  } catch (error) {
    throw error;
  }
}
export async function findUserByEmail(input: { email: string }) {
  try {
    const { email } = input;
    const user = await findUserByEmailInDatabase(email);
    console.log(user);
    return user;
  } catch (error) {
    throw error;
  }
}
