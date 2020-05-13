import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { EntryService } from './entry.service';
import { Entry } from 'entities/entry.entity';
import { CreateEntryDTO } from './dto/CreateEntry.dto';
import { UpdateEntryDTO } from './dto/UpdateEntry.dto';
import { JwtAuthGuard } from 'auth/guards/jwtAuth.guard';

@ApiTags('entries')
@ApiBearerAuth()
@Crud({
  model: { type: Entry },
  routes: { exclude: ['createManyBase', 'replaceOneBase'] },
  dto: {
    create: CreateEntryDTO,
    update: UpdateEntryDTO,
  },
})
@UseGuards(JwtAuthGuard)
@Controller('entries')
export class EntryController implements CrudController<Entry> {
  constructor(public readonly service: EntryService) {}
}
