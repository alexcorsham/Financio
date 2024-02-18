

import { User } from "../user"

import { Transaction } from "../transaction"

import { AccountBalance } from "../accountBalance"

export class Account {

id: string

name: string

dateCreated: string

dateDeleted: string

dateUpdated: string

userId: string

user?: User

transactions?: Transaction[]

accountBalances?: AccountBalance[]

}
