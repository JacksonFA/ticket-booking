import { TicketKind } from '@prisma/client';
import { IsArray, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class ReserveSpotRequest {
  @IsArray()
  @IsNotEmpty()
  spots: string[]; //['A1', 'A2']

  @IsEnum(TicketKind)
  @IsNotEmpty()
  ticket_kind: TicketKind;

  @IsString()
  email: string;
}
