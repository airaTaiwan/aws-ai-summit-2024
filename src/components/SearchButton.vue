<script setup lang="ts">
withDefaults(defineProps<{
  disabled?: boolean
}>(), {
  disabled: true,
})
</script>

<template>
  <button :disabled class="btn">
    <div position="absolute inset-0" z1 class="bg-[rgb(1,130,203)] bg-op-20" />
    <p z2>
      搜尋
    </p>
  </button>
</template>
