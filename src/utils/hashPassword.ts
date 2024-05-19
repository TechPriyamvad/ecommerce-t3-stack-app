import { genSalt, hash, compare } from "bcrypt";

async function hashPassword(password: string): Promise<string> {
  try {
    const saltRounds = 10;
    const salt = await genSalt(saltRounds);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
  } catch (error: unknown) {
    console.error((error as { message: string }).message);
    throw error;
  }
}

async function verifyPassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  try {
    const isPasswordValid = await compare(password, hashedPassword);
    return isPasswordValid;
  } catch (error: unknown) {
    console.error((error as { message: string }).message);
    throw error;
  }
}

export { hashPassword, verifyPassword };
