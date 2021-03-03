export interface User {
  _id?: string;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  role?: string | null;
  avatar?: string | null;
  loginAt?: Date | null;
  gender?: string | null;
  status?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  token?: string | null;
}
