import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AccountBalanceDomainModule } from '../domain'
import { AccountBalanceController } from './accountBalance.controller'

import { AccountDomainModule } from '../../../modules/account/domain'

import { AccountBalanceByAccountController } from './accountBalanceByAccount.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    AccountBalanceDomainModule,

AccountDomainModule,

],
  controllers: [
    AccountBalanceController,
    
    AccountBalanceByAccountController,
    
  ],
  providers: [],
})
export class AccountBalanceApplicationModule {}
