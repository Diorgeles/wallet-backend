import { Entity, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiResponseProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

@Entity('users')
export class User extends BaseEntity {
  @ApiResponseProperty()
  @Column({ type: 'varchar' })
  name?: string;

  @ApiResponseProperty()
  @Column({ unique: true, type: 'varchar' })
  email?: string;

  @Column({ default: false, type: 'boolean' })
  isAdmin?: boolean;

  @Column({ type: 'varchar' })
  password?: string;

  @Column({ nullable: true })
  identification: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  phone: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(
      this.password,
      process.env.SALT_ROUNDS || 10,
    );
  }
}
