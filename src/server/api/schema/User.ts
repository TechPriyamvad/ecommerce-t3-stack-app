export interface User {
  id: number;
  createdAt: Date;
  updateAt: Date | null;
  email: string;
  name: string | null;
  password: string | null;
  isDeleted: boolean;
  isVerified: boolean;
  verification_code: string | null;
}
