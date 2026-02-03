<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElOption,
  ElSelect
} from 'element-plus'

import { ACCOUNT_TYPE_OPTIONS } from '../../constants/account-type-options'
import {
  transformTagsFromString,
  transformTagsToString
} from '../../helpers/transform-tags'
import type { Account } from '../../types'
import {
  ACCOUNT_RECORD_TYPE,
  type AccountRecordType
} from '../../types/constants'
import { getAccountFormItemRules } from '../validation/account-form-item.rules'

interface Emit {
  deleteItem: [id: string | number]
}

const emit = defineEmits<Emit>()

const props = defineProps<{
  model: Account
}>()

const tags = defineModel('tags')
const type = defineModel<AccountRecordType>('type')
const login = defineModel<string>('login')
const password = defineModel<string | null>('password')

const localTags = ref(transformTagsToString(props.model.tags))

const rules = reactive(getAccountFormItemRules())

const isLdap = computed(() => type.value === ACCOUNT_RECORD_TYPE.Ldap)

function onChangeTags(value: string) {
  tags.value = transformTagsFromString(value)
}

function onChangeType(value: string) {
  if (value === ACCOUNT_RECORD_TYPE.Ldap) {
    password.value = null
  }
}
</script>

<template>
  <ElForm
    :inline="true"
    :model="model"
    :rules="rules"
    class="accounts-form-item"
  >
    <ElFormItem
      prop="tags"
      style="width: 200px; flex-shrink: 0"
    >
      <ElInput
        v-model="localTags"
        placeholder="Метки"
        @change="onChangeTags"
      />
    </ElFormItem>
    <ElFormItem
      prop="type"
      style="width: 150px; flex-shrink: 0"
    >
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
    <ElFormItem
      prop="login"
      :style="{ width: isLdap ? '100%' : '200px' }"
    >
      <ElInput
        v-model="login"
        placeholder="Логин"
      />
    </ElFormItem>
    <ElFormItem
      v-if="!isLdap"
      prop="password"
      :style="{ width: '200px' }"
    >
      <ElInput
        v-model="password"
        type="password"
        show-password
        placeholder="Пароль"
      />
    </ElFormItem>
    <ElFormItem>
      <ElButton
        type="primary"
        @click="emit('deleteItem', model.id)"
      >
        del
      </ElButton>
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
