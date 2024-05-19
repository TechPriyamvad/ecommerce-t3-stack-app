import { generateVerificationCode } from "~/utils/generateVerificationCode";
import {
  signup,
  findUserByEmailInDatabase,
  verifyUserInDatabase,
  updateVerifiedUserInDatabase,
} from "../repository/user";
import { sendVerificationEmailUsingSendgrid } from "~/utils/sendMailUsingSendgrid";
import { hashPassword, verifyPassword } from "~/utils/hashPassword";
import { generateToken } from "~/utils/jwt";
import { TRPCClientError } from "@trpc/client";

export async function createAccount(input: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const { name, email, password } = input;
    const verification_code = generateVerificationCode();
    const sendgridResponse = await sendVerificationEmailUsingSendgrid(
      email,
      verification_code,
    );
    if (sendgridResponse[0].statusCode === 202) {
      const hashedPassword = await hashPassword(password);
      const newUser = await signup(
        name,
        email,
        verification_code,
        hashedPassword,
      );
      return {
        message: `User ${newUser.name} created successfully with email ${newUser.email}`,
      };
    } else {
      throw new Error("Failed to send verification email");
    }
  } catch (error) {
    console.error((error as { message: string }).message);
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
    console.error((error as { message: string }).message);
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
      throw new TRPCClientError("Invalid verification code");
    }
    const updatedUser = await updateVerifiedUserInDatabase(email);
    console.log("User verified and updated:", updatedUser);
    return updatedUser;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw error;
  }
}

export async function updateUser(input: { email: string }) {
  try {
    const { email } = input;
    const updatedUser = await updateVerifiedUserInDatabase(email);
    return updatedUser;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw error;
  }
}
export async function loginUser(input: { email: string; password: string }) {
  try {
    const { email, password } = input;
    const user = await findUserByEmailInDatabase(email);
    if (!user) {
      return { status: 404, message: "No user exists with this email" };
    }
    
    if (!user.password) {
      return { status: 500, message: "User has no password" };
    }
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return { status: 401, message: "Invalid password" };
    }
    console.log(isPasswordValid);
    
    const isVerified = user.isVerified;
    if (!isVerified) {
      return { status: 401, message: "User email is not verified" };
    }
    console.log(isVerified);
    
    const token = generateToken(user);
    console.log(token);
    console.log(user);
    return { status: 200, message: "Login successful", token, user };
  } catch (error) {
    if (typeof error === "object" && error !== null)
      return { status: 500, message: (error as { message: string }).message };
    else return { status: 500, message: "Internal server error" };
  }
}
