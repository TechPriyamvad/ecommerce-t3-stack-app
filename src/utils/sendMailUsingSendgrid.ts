import sgMail from "@sendgrid/mail";
const apiKey = process.env.SENDGRID_API_KEY;

export async function sendVerificationEmailUsingSendgrid(
  email: string,
  verification_code: string,
): Promise<void> {
  try {
    if (!apiKey) {
      throw new Error("SENDGRID_API_KEY is not set");
    }
    sgMail.setApiKey(apiKey);
    const msg = {
      to: email,
      from: "priyamvad032@gmail.com",
      subject: "Email Verification Code",
      html: `<strong>Your verification code is: ${verification_code}</strong>`,
    };
    await sgMail.send(msg);
  } catch (error) {
    throw error;
  }
}
