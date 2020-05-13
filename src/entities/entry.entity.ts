import { Entity, Column, ManyToOne } from 'typeorm';
import { ApiResponseProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';
import { ENTRY_TYPE, PAYMENT_STATUS } from 'utils/enum';
import { User } from './user.entity';

@Entity('entries')
export class Entry extends BaseEntity {
  @ApiResponseProperty()
  @Column({ nullable: true })
  description: string;

  @ApiResponseProperty()
  @Column({ nullable: true, type: 'decimal' })
  amount: number;

  @ApiResponseProperty()
  @Column({ default: PAYMENT_STATUS['Nao Pago'] })
  paymentStatus: PAYMENT_STATUS;

  @ApiResponseProperty()
  @Column({ default: ENTRY_TYPE.Receita })
  entryType: ENTRY_TYPE;

  @ManyToOne(type => User, { cascade: true })
  user: User;

  @ApiResponseProperty()
  @Column({ nullable: true })
  userId: number;
}
