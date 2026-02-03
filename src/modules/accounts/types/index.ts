import type { AccountRecordType } from './constants'

export interface AccountTag {
  text: string
}
export interface Account {
  id: number | string
  tags: AccountTag[]
  login: string
  password?: string | null
  type: AccountRecordType
}
