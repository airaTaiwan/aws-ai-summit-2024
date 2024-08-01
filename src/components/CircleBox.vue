<script setup lang="ts">
import type { Data } from '~/types'

withDefaults(defineProps<{
  checked?: boolean
  position: Data['position']
  delay: number
}>(), {
  checked: false,
})
</script>

<template>
  <div
    flex="~ col items-center gap-y-4"
    class="balloon"
    :class="position === 'center' ? 'justify-center' : position === 'top' ? 'justify-start' : 'justify-end'"
  >
    <CirclePassSvg v-if="checked" :delay />
    <CircleSvg v-else />
    <Text p="x-8" flex="~ items-center" text="center #093370 2xl" bg="op-80 white" pos-relative h14.5 whitespace-nowrap rounded-2 font-bold>
      <slot />
    </Text>
  </div>
</template>
