import { IsString, Length } from 'class-validator';

export class CreateMessage {
  public text: string;

  @IsString()
  public receiver: string;

  @IsString()
  @Length(2, 20, {
    groups: ['User', 'ChatGroup'],
  })
  public conversationType: string;

  @Length(0, 20, {
    groups: ['text', 'image', 'file', 'notification'],
  })
  public type: string;

  public message: string;

  public images: string[];

  public files: string[];
}
