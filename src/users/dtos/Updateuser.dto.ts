import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsEmail,
  IsBoolean,
  IsEnum,
  IsNumberString,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  isAdmin?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  identification: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @IsNumberString()
  phone: string;
}
