import { IsEmail, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  public userId: string;

  @IsString()
  public contactId: string;
}
