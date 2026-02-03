import { ACCOUNT_RECORD_TYPE } from '../types/constants'

export const ACCOUNT_TYPE_OPTIONS = [
  {
    label: 'Локальная',
    value: ACCOUNT_RECORD_TYPE.Local
  },
  {
    label: 'LDAP',
    value: ACCOUNT_RECORD_TYPE.Ldap
  }
]
