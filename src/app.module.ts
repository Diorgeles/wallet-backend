import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntryController } from './entry/entry.controller';
import { EntryModule } from './entry/entry.module';
import { EntryService } from './entry/entry.service';

@Module({
  imports: [EntryModule],
  controllers: [AppController, EntryController],
  providers: [AppService, EntryService],
})
export class AppModule {}
