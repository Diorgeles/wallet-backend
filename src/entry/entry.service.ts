import { Injectable } from '@nestjs/common';
import { EntryDto } from './dto/entry.dto';

@Injectable()
export class EntryService {
  private readonly entries: EntryDto[] = [
    { amount: 10, description: 'Subway1', status: true, type: 1 },
    { amount: 20, description: 'Subway2', status: true, type: 1 },
    { amount: 30, description: 'Subway3', status: true, type: 1 },
    { amount: 40, description: 'Subway4', status: true, type: 1 },
  ];

  getAllExpenses(): EntryDto[] {
    return this.entries;
  }

  getAllRecipes(): EntryDto[] {
    return this.entries;
  }
}
