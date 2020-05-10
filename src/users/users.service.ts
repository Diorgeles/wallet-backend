import { Injectable, Logger } from '@nestjs/common';
import { User } from 'entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }

  async findByEmail(email: string): Promise<User> {
    Logger.log(`Looking for user ${email}`);
    return this.repo.findOneOrFail({ email });
  }
}
