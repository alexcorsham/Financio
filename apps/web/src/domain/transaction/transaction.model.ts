

import { Account } from "../account"

export class Transaction {

id: string

amount: number

type: string

date: string

dateCreated: string

dateDeleted: string

dateUpdated: string

accountId: string

account?: Account

}
