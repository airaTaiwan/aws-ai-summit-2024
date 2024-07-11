<script setup lang="ts">
const props = withDefaults(defineProps<{
  is?: string
  originX?: 'left' | 'center' | 'right'
  originY?: 'top' | 'center' | 'bottom'
}>(), {
  is: 'p',
  originX: 'center',
  originY: 'center',
})

const style = computed(() => isDemonSafari.value
  ? {
      scale: `${zoomRatio.value}`,
      transformOrigin: `${props.originX} ${props.originY}`,
    }
  : null)
</script>

<template>
  <component
    :is="is"
    :style
  >
    <slot />
  </component>
</template>
