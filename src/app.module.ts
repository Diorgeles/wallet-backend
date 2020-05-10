import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryModule } from './entry/entry.module';
import { AuthModule } from './auth/auth.module';
import { SessionsModule } from 'sessions/sessions.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EntryModule, AuthModule, SessionsModule],
})
export class AppModule {}
