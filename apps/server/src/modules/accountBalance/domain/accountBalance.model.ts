import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Account } from '../../../modules/account/domain'

@Entity()
export class AccountBalance {

@PrimaryGeneratedColumn('uuid')

id: string

@ColumnNumeric({"type":"numeric"})

balance: number

@Column({})

balanceDate: string

@Column({})

accountId: string

@ManyToOne(
  () => Account,
  parent => parent.accountBalances,
  )
  @JoinColumn({ name: 'accountId' })

account?: Account

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
