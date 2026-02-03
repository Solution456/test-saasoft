import type { AccountRecordType } from './constants'

export interface Account {
  id: number | string
  tags: string[]
  login: string
  password?: string
  type: AccountRecordType
}
