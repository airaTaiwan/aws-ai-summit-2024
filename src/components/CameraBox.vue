<script setup lang="ts">
import CameraBoxImage from '../images/camera-box.png'

defineProps<{
  src: string
}>()
</script>

<template>
  <div pos-relative h-full w-full>
    <img :src h-full w-full object-cover p2 style="transform: scaleX(-1);">
    <img :src="CameraBoxImage" position="absolute inset-0" z1 h-full w-full object-cover>
  </div>
</template>
