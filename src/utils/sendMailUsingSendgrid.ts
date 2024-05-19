import sgMail from "@sendgrid/mail";
import { TRPCClientError } from "@trpc/client";
const apiKey = process.env.SENDGRID_API_KEY;

export async function sendVerificationEmailUsingSendgrid(
  email: string,
  verification_code: string,
){
  try {
    if (!apiKey) {
      throw new TRPCClientError("SENDGRID_API_KEY is not set");
    }
    sgMail.setApiKey(apiKey);
    const msg = {
      to: email,
      from: "priyamvad032@gmail.com",
      subject: "Email Verification Code",
      html: `<strong>Your verification code is: ${verification_code}</strong>`,
    };
    const sendgridResponse = await sgMail.send(msg);
    // console.log('sendgrid');   
    return sendgridResponse;
  } catch (error) {
    console.error((error as { message: string }).message);
    throw error;
  }
}
