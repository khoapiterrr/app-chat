export interface User {
  _id?: string;
  email?: string;
  password?: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  role?: string | null;
  avatar?: string | null;
  loginAt?: Date | null;
  deleteFlag?: boolean | null;
  gender?: string | null;
  status?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  token?: string | null;
  facebookLink?: string | null;
  websiteLink?: string | null;
  twitterLink?: string | null;
  spotifyLink?: string | null;
  description?: string | null;
  country?: string | null;
  city?: string | null;
  province?: string | null;
}
