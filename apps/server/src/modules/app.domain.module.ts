import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { AccountDomainModule } from './account/domain'

import { TransactionDomainModule } from './transaction/domain'

import { AccountBalanceDomainModule } from './accountBalance/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

AccountDomainModule,

TransactionDomainModule,

AccountBalanceDomainModule,

],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
