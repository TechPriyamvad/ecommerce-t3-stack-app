import { generateVerificationCode } from "~/utils/generateVerificationCode";
import {
  signup,
  findUserByEmailInDatabase,
  verifyUserInDatabase,
  updateVerifiedUserInDatabase,
} from "../repository/user";
import { sendVerificationEmailUsingSendgrid } from "~/utils/sendMailUsingSendgrid";

export async function createAccount(input: { name: string; email: string }) {
  try {
    const { name, email } = input;
    const verification_code = generateVerificationCode();
    const sendgridResponse = await sendVerificationEmailUsingSendgrid(
      email,
      verification_code,
    );
    if (sendgridResponse[0].statusCode === 202) {
      const newUser = await signup(name, email, verification_code);
      return {
        message: `User ${newUser.name} created successfully with email ${newUser.email}`,
      };
    } else {
      throw new Error("Failed to send verification email");
    }
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

export async function verifyUser(input: {
  email: string;
  verification_code: string;
}) {
  try {
    const { email, verification_code } = input;
    console.log(email, verification_code);
    const user = await verifyUserInDatabase(email, verification_code);
    if (!user) {
      throw new Error("Invalid verification code");
    }
    const updatedUser = await updateVerifiedUserInDatabase(email);
    console.log("User verified and updated:", updatedUser);
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(input: { email: string }) {
  try {
    const { email } = input;
    const updatedUser = await updateVerifiedUserInDatabase(email);
    return updatedUser;
  } catch (error) {
    throw error;
  }
}
