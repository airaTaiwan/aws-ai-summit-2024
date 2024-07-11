<script setup lang="ts">
withDefaults(defineProps<{
  disabled?: boolean
  loading?: boolean
}>(), {
  disabled: false,
  loading: false,
})
</script>

<template>
  <button
    :disabled flex="~ justify-center items-center gap-x-4" hover="filter-brightness-150"
    class="group btn"
  >
    <div position="absolute inset-0" z1 class="bg-[rgb(1,130,203)] bg-op-20 group-hover:bg-op-40" />
    <Text z2 flex="~ items-center gap-3">
      <slot v-if="loading" name="loading">
        <div i-svg-spinners-90-ring-with-bg text-3xl />
      </slot>
      <slot />
    </Text>
  </button>
</template>
