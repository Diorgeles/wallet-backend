import { IsNotEmpty, IsEmail, IsString, IsEnum, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  identification: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  type: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  phone: string;
}
