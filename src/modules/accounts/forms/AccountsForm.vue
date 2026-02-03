<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useAccountStore } from '../store/account.store'

import AccountFormItem from './item/AccountFormItem.vue'

import Flex from '@/shared/utility/Flex.vue'
import Text from '@/shared/utility/Text.vue'

const store = useAccountStore()

const { state } = storeToRefs(store)
</script>

<template>
  <Flex
    class="accounts-form"
    direction="column"
    gap="12px"
  >
    <Flex
      class="accounts-form-header"
      align="center"
      gap="32px"
    >
      <Text
        style="width: 200px"
        center
      >
        Метки
      </Text>
      <Text
        style="width: 150px"
        center
      >
        Тип записи
      </Text>
      <Text
        style="width: 200px"
        center
      >
        Логин
      </Text>
      <Text
        style="width: 200px"
        center
      >
        Пароль
      </Text>
    </Flex>
    <div class="accounts-form-body">
      <Flex
        v-for="acc of state"
        :key="acc.id"
        align="center"
        gap="12px"
        class="accounts-form-body-row"
      >
        <AccountFormItem
          v-model:tags="acc.tags"
          v-model:type="acc.type"
          v-model:login="acc.login"
          v-model:password="acc.password"
          :model="acc"
          @delete-item="store.removeAccountItem(acc.id)"
        />
      </Flex>
    </div>
  </Flex>
</template>
