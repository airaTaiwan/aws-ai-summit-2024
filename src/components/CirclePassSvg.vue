<script setup lang="ts">
defineProps<{
  delay: number
}>()
</script>

<template>
  <div pos-relative>
    <svg width="180" height="180" viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_3_16" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="188" height="188">
        <circle cx="94" cy="94" r="90" fill="#D9D9D9" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      </mask>
      <g mask="url(#mask0_3_16)">
        <g filter="url(#filter0_b_3_16)">
          <circle cx="94" cy="94" r="90" fill="url(#paint0_linear_3_16)" fill-opacity="0.9" />
          <circle cx="94" cy="94" r="90" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <path d="M195 133C120.2 82.6 26.5 67.6667 -11 66.5L-1 179L113 204C129.333 200.167 168.6 180.6 195 133Z" fill="url(#paint1_linear_3_16)" />
        <path d="M105.5 196.5C49.3418 144.329 67.9977 131.991 181 124.47C110.865 119.588 55.4709 119.354 -9.00003 127.029C-14.0001 149 -34.2939 171.969 0.499945 191.5L105.5 196.5Z" fill="url(#paint2_linear_3_16)" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M93.7736 85.8634C134.387 80.3145 165.523 79.9886 207 82.5127C161.786 85.1436 135.044 89.8284 140.715 103.329C124.929 96.365 109.086 90.5998 93.7736 85.8634Z" fill="url(#paint3_linear_3_16)" />
      </g>
      <circle cx="94" cy="94" r="90" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      <defs>
        <filter id="filter0_b_3_16" x="-20" y="-20" width="228" height="228" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3_16" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3_16" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_3_16" x1="57.5" y1="29.5" x2="134" y2="165.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.3" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_3_16" x1="-26.5" y1="46.5" x2="168.5" y2="149.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_3_16" x1="32.4784" y1="125.332" x2="63.0276" y2="224.802" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint3_linear_3_16" x1="132.948" y1="82.8883" x2="144.832" y2="127.146" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>

    <svg pos-absolute stroke-dasharray="[200, 200]" class="left-1/2 top-1/2 -translate-1/2" width="112" height="82" viewBox="0 0 112 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="checkmark"
        :style="{
          animationDelay: `${delay}ms`,
        }"
        d="M6 43.4648L37.7308 76L106 6" stroke="#1B54A2" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"
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
