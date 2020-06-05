import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Account } from 'entities/account.entity';
import { JwtAuthGuard } from 'auth/guards/jwtAuth.guard';
import { AccountService } from './account.service';
import { CreateAccountDTO } from './dto/CreateAccount.dto';
import { UpdateAccountDTO } from './dto/UpdateAccount.dto';

@ApiTags('accounts')
@ApiBearerAuth()
@Crud({
  model: { type: Account },
  routes: { exclude: ['createManyBase', 'replaceOneBase'] },
  dto: {
    create: CreateAccountDTO,
    update: UpdateAccountDTO,
  },
})
@UseGuards(JwtAuthGuard)
@Controller('accounts')
export class AccountController implements CrudController<Account> {
  constructor(public readonly service: AccountService) {}
}
