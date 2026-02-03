<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  fullHeight?: boolean
  direction?: 'row' | 'column'
  justify?: 'start' | 'center' | 'end'
  align?: 'start' | 'center' | 'end'
  wrap?: 'nowrap' | 'wrap'
  gap?: string
}>()

const classes = computed(() => ({
  'flex-full-height': props.fullHeight,
  [`flex-direction-${props.direction}`]: props.direction,
  [`flex-justify-${props.justify}`]: props.justify,
  [`flex-align-${props.align}`]: props.align,
  [`flex-wrap-${props.wrap}`]: props.wrap
}))
</script>

<template>
  <div
    class="flex"
    :class="classes"
    :style="{ gap: props.gap }"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;

  &-full-height {
    min-height: 100dvh;
    height: 100%;
  }

  &-direction-row {
    flex-direction: row;
  }

  &-direction-column {
    flex-direction: column;
  }

  &-justify-start {
    justify-content: flex-start;
  }

  &-justify-center {
    justify-content: center;
  }

  &-justify-end {
    justify-content: flex-end;
  }

  &-align-start {
    align-items: flex-start;
  }

  &-align-center {
    align-items: center;
  }

  &-align-end {
    align-items: flex-end;
  }

  &-wrap-nowrap {
    flex-wrap: nowrap;
  }

  &-wrap-wrap {
    flex-wrap: wrap;
  }
}
</style>
