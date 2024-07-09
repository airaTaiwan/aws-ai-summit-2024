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
    :style="{
      animationDelay: `${delay}ms`,
    }"
    flex="~ col items-center gap-y-4" class="balloon" :class="position === 'top' ? 'justify-start' : 'justify-end'"
  >
    <CirclePassSvg v-if="checked" :delay />
    <CircleSvg v-else />
    <div bg="op-80 white" p="y-[10px] x-8" text="center #df178d 2xl" font-bold class="rounded-[32px]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
 @keyframes balloon {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.balloon {
  animation-name: balloon;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
