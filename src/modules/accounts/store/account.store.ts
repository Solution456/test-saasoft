import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Account } from '../types'
import { createEmptyAccount } from '../utils/create-account'

export const useAccountStore = defineStore(
  'account',
  () => {
    const state = ref<Account[]>([])

    function createAccountItem() {
      state.value.push(createEmptyAccount())
    }

    function removeAccountItem(id: string | number) {
      state.value.splice(
        state.value.findIndex((item) => item.id === id),
        1
      )
    }

    return {
      state,
      createAccountItem,
      removeAccountItem
    }
  },
  {
    persist: true
  }
)
