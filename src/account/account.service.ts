import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Account } from 'entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountService extends TypeOrmCrudService<Account> {
  constructor(@InjectRepository(Account) repo) {
    super(repo);
  }
}
