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

import { User } from '../../../modules/user/domain'

import { Transaction } from '../../../modules/transaction/domain'

import { AccountBalance } from '../../../modules/accountBalance/domain'

@Entity()
export class Account {

@PrimaryGeneratedColumn('uuid')

id: string

@Column({})

name: string

@Column({})

userId: string

@ManyToOne(
  () => User,
  parent => parent.accounts,
  )
  @JoinColumn({ name: 'userId' })

user?: User

@OneToMany(
  () => Transaction,
  child => child.account,
  )

transactions?: Transaction[]

@OneToMany(
  () => AccountBalance,
  child => child.account,
  )

accountBalances?: AccountBalance[]

@CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
