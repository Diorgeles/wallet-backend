import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';

export abstract class BaseEntity {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @CreateDateColumn()
  createdAt?: string;

  @ApiResponseProperty()
  @UpdateDateColumn()
  updatedAt?: string;
}
