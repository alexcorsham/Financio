import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationAccountSubscriber } from './subscribers/notification.account.subscriber'

import { NotificationTransactionSubscriber } from './subscribers/notification.transaction.subscriber'

import { NotificationAccountBalanceSubscriber } from './subscribers/notification.accountBalance.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [

NotificationAccountSubscriber,

NotificationTransactionSubscriber,

NotificationAccountBalanceSubscriber,

],
  exports: [],
})
export class NotificationInfrastructureModule {}
