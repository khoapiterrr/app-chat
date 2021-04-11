export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  birthday?: Date | undefined;
  genderL: string;
}
