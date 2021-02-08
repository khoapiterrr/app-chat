import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public lastName: string;

  @IsString()
  public firstName: string;

  // @IsDate()
  // public birthDate: Date;

  // @IsString()
  // public gender: string;
}

export class LoginUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}

export class ForgotPasswordDto {
  @IsEmail()
  public email: string;
}

export class RestorePasswordDto {
  @IsEmail()
  public email: string;

  @IsString()
  public code: string;

  @IsString()
  public password: string;
}
