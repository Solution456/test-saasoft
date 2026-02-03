import type { Account } from '../types'
import { ACCOUNT_RECORD_TYPE } from '../types/constants'

export function createEmptyAccount(): Account {
  const uuid = crypto.randomUUID()
  return {
    id: uuid,
    tags: [
      {
        text: ''
      }
    ],
    login: '',
    password: null,
    type: ACCOUNT_RECORD_TYPE.Local
  }
}
