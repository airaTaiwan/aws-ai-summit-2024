<script setup lang="ts">
defineProps<{
  src: string
  loading: boolean
}>()
</script>

<template>
  <div class="scan-container" style="position: relative; height: 100%; width: 100%;">
    <img :src="src" class="face-image" style="height: 100%; width: 100%; object-fit: cover; transform: scaleX(-1);">
    <div class="line" />
    <div class="line reverse" />
  </div>
</template>

<style scoped>
.scan-container {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}

.face-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1); /* 镜像图像 */
}

.line {
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 2px);
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 255, 51, 0) 20%, #03a9f4 150%);
  border-top: none;
  border-bottom: 2px solid #03a9f4;
  animation: scan-down 2s forwards;
}

.line.reverse {
  background: linear-gradient(0deg, rgba(0, 255, 51, 0) 20%, #03a9f4 150%);
  border-top: 2px solid #03a9f4;
  border-bottom: none;
  opacity: 0;
  animation: scan-up 2s forwards;
  animation-delay: 1s;
}

@keyframes scan-down {
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

@keyframes scan-up {
  0% {
    transform: translateY(100%);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
