import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { AccountApi } from './account/account.api'

import { TransactionApi } from './transaction/transaction.api'

import { AccountBalanceApi } from './accountBalance/accountBalance.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}
  
  export class User extends UserApi {}
  
  export class Notification extends NotificationApi {}
  
  export class Account extends AccountApi {}
  
  export class Transaction extends TransactionApi {}
  
  export class AccountBalance extends AccountBalanceApi {}
  
}
