import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TransactionCreateDto {

@IsNumber()

@IsNotEmpty()
  amount: number

@IsString()

@IsNotEmpty()
  type: string

@IsString()

@IsNotEmpty()
  date: string

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

export class TransactionUpdateDto {

@IsNumber()

@IsOptional()
  amount?: number

@IsString()

@IsOptional()
  type?: string

@IsString()

@IsOptional()
  date?: string

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
