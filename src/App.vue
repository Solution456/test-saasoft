<script setup lang="ts">
import { ElContainer, ElMain } from 'element-plus'

import AccountsView from './modules/accounts/components/AccountsView.vue'
</script>

<template>
  <ElContainer class="h-screen container">
    <ElMain class="center">
      <AccountsView />
    </ElMain>
  </ElContainer>
</template>

<style scoped>
.h-screen {
  height: 100dvh;
}

.center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
