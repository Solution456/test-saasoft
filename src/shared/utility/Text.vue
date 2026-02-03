<script setup lang="ts">
import { computed } from 'vue'

type TextSize =
  | 'extra-large'
  | 'large'
  | 'medium'
  | 'base'
  | 'small'
  | 'extra-small'
type TextAs = 'span' | 'p' | 'h1' | 'h2' | 'h3'
type TextWeight = 'bold' | 'regular' | 'medium'

const props = withDefaults(
  defineProps<{
    as?: TextAs
    size?: TextSize
    weight?: TextWeight
    color?: string
    center?: boolean
  }>(),
  {
    as: 'p',
    size: 'base',
    weight: 'regular'
  }
)

const classes = computed(() => {
  return {
    [`text-${props.weight}-${props.size}`]: ['span', 'p'].includes(props.as),
    'text-center': props.center
  }
})

const styles = computed(() => {
  return {
    '--color-text': props.color || 'var(--el-text-color-primary)'
  }
})
</script>

<template>
  <component
    :is="as"
    class="text"
    :class="classes"
    :style="styles"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.text {
  color: var(--color-text);

  &-center {
    text-align: center;
  }

  &-bold-extra-large {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.4;
  }

  &-regular-small {
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
  }

  &-regular-base {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.57;
  }

  &-regular-medium {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.57;
  }

  &-medium-base {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.57;
  }

  &-medium-extra-large {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }

  &-bold-base {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.57;
  }

  &-bold-medium {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  &-extra-large {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.4;
  }
}
</style>
