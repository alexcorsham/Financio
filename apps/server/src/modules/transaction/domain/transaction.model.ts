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
export class Transaction {

@PrimaryGeneratedColumn('uuid')

id: string

@ColumnNumeric({"type":"numeric"})

amount: number

@Column({})

type: string

@Column({})

date: string

@Column({})

accountId: string

@ManyToOne(
  () => Account,
  parent => parent.transactions,
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
