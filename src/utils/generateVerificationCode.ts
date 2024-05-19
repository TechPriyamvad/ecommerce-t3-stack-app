import crypto from 'crypto';

export function generateVerificationCode(){
    try {
        const codeLength = 8;
        const randomBytes = crypto.randomBytes(codeLength);
        const code = randomBytes.toString('hex').slice(0, codeLength);
        return code;   
    } catch (error) {
        console.error((error as { message: string }).message);
        throw error;
    }
}