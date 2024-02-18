import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { AccountBalanceDomainFacade } from './accountBalance.domain.facade'
import { AccountBalance } from './accountBalance.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountBalance]),
    DatabaseHelperModule,
  ],
  providers: [
    AccountBalanceDomainFacade,
    AccountBalanceDomainFacade,
  ],
  exports: [AccountBalanceDomainFacade],
})
export class AccountBalanceDomainModule {}
