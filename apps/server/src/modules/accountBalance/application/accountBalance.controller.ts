import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  AccountBalance,
  AccountBalanceDomainFacade,
} from '@server/modules/accountBalance/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { AccountBalanceApplicationEvent } from './accountBalance.application.event'
import {
  AccountBalanceCreateDto,
  AccountBalanceUpdateDto,
} from './accountBalance.dto'

@Controller('/v1/accountBalances')
export class AccountBalanceController {
  constructor(
    private eventService: EventService,
    private accountBalanceDomainFacade: AccountBalanceDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.accountBalanceDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: AccountBalanceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.accountBalanceDomainFacade.create(body)

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

  @Get('/:accountBalanceId')
  async findOne(
    @Param('accountBalanceId') accountBalanceId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.accountBalanceDomainFacade.findOneByIdOrFail(
        accountBalanceId,
        queryOptions,
      )

    return item
  }

  @Patch('/:accountBalanceId')
  async update(
    @Param('accountBalanceId') accountBalanceId: string,
    @Body() body: AccountBalanceUpdateDto,
  ) {
    const item =
      await this.accountBalanceDomainFacade.findOneByIdOrFail(
        accountBalanceId,
      )

    const itemUpdated = await this.accountBalanceDomainFacade.update(
      item,
      body as Partial<AccountBalance>,
    )
    return itemUpdated
  }

  @Delete('/:accountBalanceId')
  async delete(@Param('accountBalanceId') accountBalanceId: string) {
    const item =
      await this.accountBalanceDomainFacade.findOneByIdOrFail(
        accountBalanceId,
      )

    await this.accountBalanceDomainFacade.delete(item)

    return item
  }
}
