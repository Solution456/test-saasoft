<script setup lang="ts">
import { ElButton } from 'element-plus'

import Flex from '@/shared/utility/Flex.vue'
import Text from '@/shared/utility/Text.vue'
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
    <ElButton type="primary"> + </ElButton>
  </Flex>
</template>
