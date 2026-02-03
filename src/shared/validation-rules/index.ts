import type { FormItemRule } from 'element-plus'

export const formRequiredString = (): FormItemRule => ({
  required: true,
  message: 'Пожалуйста, заполните поле',
  trigger: 'blur'
})

export const formMinString = (min: number): FormItemRule => ({
  min,
  message: `Минимум ${min} символов`,
  trigger: 'blur'
})

export const formMaxString = (max: number): FormItemRule => ({
  max,
  message: `Максимум ${max} символов`,
  trigger: 'blur'
})
