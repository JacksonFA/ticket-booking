import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateEventRequest {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
