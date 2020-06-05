import { Account } from 'entities/account.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAccountDTO implements Partial<Account> {
  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  initialBalance: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
