import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { AccountBalanceDomainFacade } from '@server/modules/accountBalance/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { AccountBalanceApplicationEvent } from './accountBalance.application.event'
import { AccountBalanceCreateDto } from './accountBalance.dto'

import { AccountDomainFacade } from '../../account/domain'

@Controller('/v1/accounts')
export class AccountBalanceByAccountController {
  constructor(
    
    private accountDomainFacade: AccountDomainFacade,
    
    private accountBalanceDomainFacade: AccountBalanceDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/account/:accountId/accountBalances')
  async findManyAccountId(
    @Param('accountId') accountId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const account =
      await this.accountDomainFacade.findOneByIdOrFail(
        accountId,
      )

    const items =
      await this.accountBalanceDomainFacade.findManyByAccount(
        account,
        queryOptions,
      )

    return items
  }

  @Post('/account/:accountId/accountBalances')
  async createByAccountId(
    @Param('accountId') accountId: string,
    @Body() body: AccountBalanceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, accountId }

    const item = await this.accountBalanceDomainFacade.create(valuesUpdated)

    await this.eventService.emit<AccountBalanceApplicationEvent.AccountBalanceCreated.Payload>(
      AccountBalanceApplicationEvent
        .AccountBalanceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
