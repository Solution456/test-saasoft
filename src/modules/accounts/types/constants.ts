export const ACCOUNT_RECORD_TYPE = {
  Local: 'Local',
  Ldap: 'Ldap'
} as const

export type AccountRecordType =
  (typeof ACCOUNT_RECORD_TYPE)[keyof typeof ACCOUNT_RECORD_TYPE]
