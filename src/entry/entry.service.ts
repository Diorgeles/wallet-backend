import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Entry } from 'entities/entry.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EntryService extends TypeOrmCrudService<Entry> {
  constructor(@InjectRepository(Entry) repo) {
    super(repo);
  }
}
