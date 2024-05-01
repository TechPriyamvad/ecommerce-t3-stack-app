// Request schema for signup
import {z} from 'zod';
export const signupRequestSchema = z.object({
    name: z.string(),
    email:z.string().email(),
    password:z.string().min(8),
});