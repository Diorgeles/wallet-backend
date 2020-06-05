import { Entity, Column, ManyToOne } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity('accounts')
export class Account extends BaseEntity {
  @ApiResponseProperty()
  @Column({ nullable: true })
  description: string;

  @ApiResponseProperty()
  @Column({ nullable: true, type: 'decimal' })
  initialBalance: number;

  @ManyToOne(type => User, { cascade: true })
  user: User;

  @ApiResponseProperty()
  @Column({ nullable: true })
  userId: number;
}
