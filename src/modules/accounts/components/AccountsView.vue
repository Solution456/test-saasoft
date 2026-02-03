<script setup lang="ts">
import { ElAlert } from 'element-plus'

import AccountsForm from '../forms/AccountsForm.vue'

import AccountsHead from './AccountsHead.vue'

import Flex from '@/shared/utility/Flex.vue'
</script>

<template>
  <Flex
    direction="column"
    gap="1rem"
    class="accounts"
  >
    <AccountsHead />
    <ElAlert
      title="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"
      type="primary"
      show-icon
      :closable="false"
    />
    <AccountsForm />
  </Flex>
</template>

<style scoped lang="scss">
.accounts {
  max-width: 1000px;
  width: 100%;
}
</style>
