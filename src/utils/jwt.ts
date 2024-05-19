import { TRPCClientError } from "@trpc/client";
import { sign, verify } from "jsonwebtoken";
import { type User } from "~/server/api/schema/User";

function generateToken(user: User): string {
  try {
    const payload = {
      id: user.id,
      email: user.email,
    };

    const secret = process.env.JWT_SECRET_KEY;
    // console.log(secret);

    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }
    const options = {
      expiresIn: "1h",
    };

    return sign(payload, secret, options);
  } catch (error: unknown) {
    console.error((error as { message: string }).message);
    throw error;
  }
}

function verifyToken(token: string): void {
  try {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret) {
      throw new TRPCClientError("JWT_SECRET is not defined");
    }
    const decodedToken = verify(token, secret);

    // check token expiry
    if (typeof decodedToken === "object" && decodedToken.exp) {
      const expirationTime = decodedToken.exp * 1000;
      if (Date.now() >= expirationTime) {
        throw new TRPCClientError("Token has expired");
      }
    }
  } catch (error: unknown) {
    console.error((error as { message: string }).message);
    throw error;
  }
}

export { generateToken, verifyToken };
