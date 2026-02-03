<script setup lang="ts">
import { computed } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElOption,
  ElSelect
} from 'element-plus'

import { ACCOUNT_TYPE_OPTIONS } from '../../constants/account-type-options'
import type { Account } from '../../types'
import { ACCOUNT_RECORD_TYPE } from '../../types/constants'

defineProps<{
  model: Account
}>()

const tags = defineModel('tags')
const type = defineModel('type')
const login = defineModel('login')
const password = defineModel('password')

const isLdap = computed(() => type.value === ACCOUNT_RECORD_TYPE.Ldap)

function onChangeType(value: string) {
  if (value === ACCOUNT_RECORD_TYPE.Ldap) {
    password.value = ''
  }
}
</script>

<template>
  <ElForm
    :inline="true"
    :model="model"
    class="accounts-form-item"
  >
    <ElFormItem style="width: 200px; flex-shrink: 0">
      <ElInput
        v-model="tags"
        placeholder="Метки"
      />
    </ElFormItem>
    <ElFormItem style="width: 150px; flex-shrink: 0">
      <ElSelect
        v-model="type"
        placeholder="Тип записи"
        @change="onChangeType"
      >
        <ElOption
          v-for="item in ACCOUNT_TYPE_OPTIONS"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </ElSelect>
    </ElFormItem>
    <ElFormItem :style="{ width: isLdap ? '100%' : '200px' }">
      <ElInput
        v-model="login"
        placeholder="Логин"
      />
    </ElFormItem>
    <ElFormItem
      v-if="!isLdap"
      :style="{ width: '200px' }"
    >
      <ElInput
        v-model="password"
        placeholder="Пароль"
      />
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary"> del </ElButton>
    </ElFormItem>
  </ElForm>
</template>

<style scoped lang="scss">
.accounts-form-item {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
}
</style>
