import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { AccountBalance } from './accountBalance.model'

export class AccountBalanceApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<AccountBalance>,
  ): Promise<AccountBalance[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/accountBalances${buildOptions}`)
  }

  static findOne(
    accountBalanceId: string,
    queryOptions?: ApiHelper.QueryOptions<AccountBalance>,
  ): Promise<AccountBalance> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/accountBalances/${accountBalanceId}${buildOptions}`,
    )
  }

  static createOne(
    accountBalance: Partial<AccountBalance>,
  ): Promise<AccountBalance> {
    return HttpService.api.post(`/v1/accountBalances`, accountBalance)
  }

  static updateOne(
    accountBalanceId: string,
    values: Partial<AccountBalance>,
  ): Promise<AccountBalance> {
    return HttpService.api.patch(
      `/v1/accountBalances/${accountBalanceId}`,
      values,
    )
  }

  static deleteOne(accountBalanceId: string): Promise<void> {
    return HttpService.api.delete(`/v1/accountBalances/${accountBalanceId}`)
  }

static findManyByAccountId(
    accountId: string,
    queryOptions?: ApiHelper.QueryOptions<AccountBalance>,
  ): Promise<AccountBalance[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/accounts/account/${accountId}/accountBalances${buildOptions}`,
    )
  }

  static createOneByAccountId(
    accountId: string,
    values: Partial<AccountBalance>,
  ): Promise<AccountBalance> {
    return HttpService.api.post(
      `/v1/accounts/account/${accountId}/accountBalances`,
      values,
    )
  }

}
