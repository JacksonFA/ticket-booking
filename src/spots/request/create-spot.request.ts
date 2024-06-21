import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSpotRequest {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;
}
