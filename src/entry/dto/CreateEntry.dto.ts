import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import { ENTRY_TYPE, PAYMENT_STATUS } from 'utils/enum';

export class CreateEntryDTO {
  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(PAYMENT_STATUS)
  paymentStatus: PAYMENT_STATUS;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ENTRY_TYPE)
  entryType: ENTRY_TYPE;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
