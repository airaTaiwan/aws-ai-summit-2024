<script setup lang="ts">
defineProps<{
  delay: number
}>()
</script>

<template>
  <div pos-relative>
    <svg width="188" height="188" viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_339_236)">
        <path d="M64 4H20C11.1634 4 4 11.1634 4 20V61V121V168C4 176.837 11.1634 184 20 184H64H124H168C176.837 184 184 176.837 184 168V121V61V20C184 11.1634 176.837 4 168 4H124H64Z" fill="white" fill-opacity="0.2" />
        <path d="M64 4H20C11.1634 4 4 11.1634 4 20V61V121V168C4 176.837 11.1634 184 20 184H64H124H168C176.837 184 184 176.837 184 168V121V61V20C184 11.1634 176.837 4 168 4H124H64Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <path d="M4 146V168C4 176.836 11.1634 184 20 184H64H124H168C176.837 184 184 176.837 184 168V121V56.5L4 146Z" fill="white" fill-opacity="0.1" />
      <path d="M168 184H124H64H20C11.1635 184 4 176.837 4 168V121V56.5C4 46.2033 7.5 10.5 7.5 10.5L20 4.5L168 184Z" fill="white" fill-opacity="0.1" />
      <path d="M64 4H20C11.1634 4 4 11.1634 4 20V61M4 121V168C4 176.837 11.1634 184 20 184H64M124 184H168C176.837 184 184 176.837 184 168V121M184 61V20C184 11.1634 176.837 4 168 4H124" stroke="white" stroke-width="8" stroke-linejoin="round" />
      <defs>
        <filter id="filter0_b_339_236" x="-17" y="-17" width="222" height="222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_339_236" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_339_236" result="shape" />
        </filter>
      </defs>
    </svg>

    <svg pos-absolute stroke-dasharray="[200, 200]" class="left-1/2 top-1/2 -translate-1/2" width="112" height="82" viewBox="0 0 112 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="checkmark"
        :style="{
          animationDelay: `${delay}ms`,
        }"
        d="M6 43.4648L37.7308 76L106 6" stroke="#ff9900" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<style scoped>
 @keyframes draw {
  to {
    stroke-dasharray: 200, 200;
    stroke-dashoffset: 0;
  }
}

.checkmark {
  stroke-dasharray: 200, 200;
  stroke-dashoffset: 200;
  animation-name: draw;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}
</style>
