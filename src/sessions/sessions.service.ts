import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Session } from 'entities/session.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SessionsService extends TypeOrmCrudService<Session> {
  constructor(@InjectRepository(Session) repo) {
    super(repo);
  }

  public get findOneOrFail(): Repository<Session>['findOneOrFail'] {
    return this.repo.findOneOrFail.bind(this.repo);
  }

  public get save(): Repository<Session>['save'] {
    return this.repo.save.bind(this.repo);
  }

  public get delete(): Repository<Session>['delete'] {
    return this.repo.delete.bind(this.repo);
  }
}
