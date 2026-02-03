<script setup lang="ts">
import { ElButton } from 'element-plus'

import Flex from '@/shared/utility/Flex.vue'
import Text from '@/shared/utility/Text.vue'

interface Emit {
  createAccount: []
}

const emit = defineEmits<Emit>()
</script>

<template>
  <Flex
    align="center"
    gap="1rem"
  >
    <Text
      size="large"
      weight="bold"
    >
      Учетные записи
    </Text>
    <ElButton
      type="primary"
      @click="emit('createAccount')"
    >
      +
    </ElButton>
  </Flex>
</template>
