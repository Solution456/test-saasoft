import type { FormRules } from 'element-plus'

import type { Account } from '../../types'

import { formMaxString, formRequiredString } from '@/shared/validation-rules'

export const getAccountFormItemRules = () =>
  ({
    login: [formRequiredString(), formMaxString(100)],
    password: [formRequiredString(), formMaxString(50)],
    tags: [formMaxString(50)]
  }) satisfies FormRules<Account>
