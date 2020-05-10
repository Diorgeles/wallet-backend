import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsDecimal,
  IsEnum,
  IsNumber,
} from 'class-validator';
import { PAYMENT_STATUS, ENTRY_TYPE } from 'utils/enum';

export class UpdateEntryDTO {
  @ApiPropertyOptional()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  amount: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(PAYMENT_STATUS)
  paymentStatus: PAYMENT_STATUS;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(ENTRY_TYPE)
  entryType: ENTRY_TYPE;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
