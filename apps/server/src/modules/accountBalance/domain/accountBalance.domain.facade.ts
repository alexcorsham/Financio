import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { AccountBalance } from './accountBalance.model'

import { Account } from '../../account/domain'

@Injectable()
export class AccountBalanceDomainFacade {
  constructor(
    @InjectRepository(AccountBalance)
    private repository: Repository<AccountBalance>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<AccountBalance>,
  ): Promise<AccountBalance> {
    return this.repository.save(values)
  }

  async update(
    item: AccountBalance,
    values: Partial<AccountBalance>,
  ): Promise<AccountBalance> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: AccountBalance): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<AccountBalance> = {},
  ): Promise<AccountBalance[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<AccountBalance> = {},
  ): Promise<AccountBalance> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

async findManyByAccount(
    account: Account,
    queryOptions: RequestHelper.QueryOptions<AccountBalance> = {},
  ): Promise<AccountBalance[]> {
    if (!account) {
      this.databaseHelper.invalidQueryWhere('account')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        accountId: account.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
