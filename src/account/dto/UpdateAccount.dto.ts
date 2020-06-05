import { Account } from 'entities/account.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateAccountDTO implements Partial<Account> {
  @ApiPropertyOptional()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsNumber()
  initialBalance: number;

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
