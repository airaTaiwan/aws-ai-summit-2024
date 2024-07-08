<script setup lang="ts">
withDefaults(defineProps<{
  disabled?: boolean
  loading?: boolean
}>(), {
  disabled: true,
  loading: false,
})
</script>

<template>
  <button :disabled flex="~ justify-center items-center gap-x-4" class="btn">
    <div position="absolute inset-0" z1 class="bg-[rgb(1,130,203)] bg-op-20" />
    <div v-if="loading" i-svg-spinners-90-ring-with-bg text-3xl />
    <p z2>
      搜尋
    </p>
  </button>
</template>
