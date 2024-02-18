export namespace AccountBalanceApplicationEvent {
  export namespace AccountBalanceCreated {
    export const key = 'accountBalance.application.accountBalance.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
