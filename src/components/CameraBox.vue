<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <img :src h-full w-full object-cover style="transform: scaleX(-1);">
</template>
