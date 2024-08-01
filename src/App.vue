<script setup lang="ts">
import ky from './lib/ky'
import type { Payload } from './types'

const { VITE_API_CAMERAS } = import.meta.env

const { width, height } = useWindowSize()

const paddingX = ref(0)
const paddingY = ref(0)

watchEffect(() => {
  const rW = width.value / 1920
  const rH = height.value / 1080
  zoomRatio.value = Math.min(rW, rH)

  paddingX.value = width.value - (1920 * zoomRatio.value)
  paddingY.value = height.value - (1080 * zoomRatio.value)
})

onBeforeMount(async () => {
  const { payload }: { payload: Payload } = await ky.get(VITE_API_CAMERAS).json()

  for (const [name, _] of Object.entries(payload)) {
    initialData.value.set(name, {
      name,
      timestamp: 0,
      position: 'center',
    })
  }

  data.value = new Map(initialData.value)
})
</script>

<template>
  <main flex="~ col justify-center items-center" h-full w-full font-sans>
    <div
      h-full w-full
      p="x-10 y-22"
      flex="~ col justify-center items-center"
      :style="{
        zoom: zoomRatio,
      }"
    >
      <img
        src="./images/aira-logo.png"
        position="fixed top-20 left-20" ha w-51
      >

      <RouterView v-slot="{ Component, route }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </div>
  </main>
</template>
