import { Controller, Get } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryDto } from './dto/entry.dto';

@Controller('entry')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get('expenses')
  getAllExpenses(): EntryDto[] {
    return this.entryService.getAllExpenses();
  }

  @Get('recipes')
  getAllRecipes(): EntryDto[] {
    return this.entryService.getAllRecipes();
  }
}
