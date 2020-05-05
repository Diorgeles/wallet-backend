import { IsInt, IsString, IsBoolean, IsDecimal } from 'class-validator';

export class EntryDto {
  @IsString()
  readonly description: string;

  @IsDecimal()
  readonly amount: number;

  @IsBoolean()
  readonly status: boolean;

  @IsInt()
  readonly type: number;
}
