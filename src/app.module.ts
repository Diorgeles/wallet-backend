import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntryModule } from './entry/entry.module';
import { AuthModule } from './auth/auth.module';
import { SessionsModule } from 'sessions/sessions.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    EntryModule,
    AuthModule,
    SessionsModule,
    AccountModule,
  ],
})
export class AppModule {}
