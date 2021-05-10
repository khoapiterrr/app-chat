import { IsString } from 'class-validator';

export class CreateContactDto {
  public userId: string;

  @IsString()
  public contactId: string;
}
