import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Account as AccountModel } from './account/account.model'

import { Transaction as TransactionModel } from './transaction/transaction.model'

import { AccountBalance as AccountBalanceModel } from './accountBalance/accountBalance.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  
  export class User extends UserModel {}
  
  export class Notification extends NotificationModel {}
  
  export class Account extends AccountModel {}
  
  export class Transaction extends TransactionModel {}
  
  export class AccountBalance extends AccountBalanceModel {}
  
}
