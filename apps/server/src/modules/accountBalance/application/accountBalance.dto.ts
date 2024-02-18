import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class AccountBalanceCreateDto {

@IsNumber()

@IsNotEmpty()
  balance: number

@IsString()

@IsNotEmpty()
  balanceDate: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

@IsString()

@IsOptional()
  accountId?: string

}

export class AccountBalanceUpdateDto {

@IsNumber()

@IsOptional()
  balance?: number

@IsString()

@IsOptional()
  balanceDate?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  dateUpdated?: string

@IsString()

@IsOptional()
  accountId?: string

}
