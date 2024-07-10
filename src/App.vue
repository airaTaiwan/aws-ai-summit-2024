<script setup lang="ts">
import type { Payload } from './types'

const { width } = useWindowSize()

watchEffect(() => {
  document.body.style.zoom = `${width.value / 1920}`
})

onBeforeMount(async () => {
  const response = await fetch('http://192.168.10.100:8084/api/cameras', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  const { payload }: { payload: Payload[] } = await response.json()

  for (const idx in payload) {
    const { cameraId, name } = payload[idx]

    data.value.set(cameraId, {
      name,
      timestamp: 0,
      position: Number(idx) % 2 === 0 ? 'top' : 'bottom',
    })
  }
})
</script>

<template>
  <main flex="~ col justify-center items-center" p="x-10 t-22 b-20" h6xl font-sans md:h-full>
    <img position="fixed bottom-7 left-5xl" ha class="w-[157px]" src="./images/logo.png">
    <img position="fixed top-20 left-20" ha w-105 src="./images/aws-logo.png">

    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
</template>
