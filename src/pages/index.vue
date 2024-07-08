<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useDevicesList, useUserMedia } from '@vueuse/core'
import * as faceapi from 'face-api.js'

import { loadImage } from '~/utils'

const isPersonOnCamera = ref(false)

const currentCamera = ref<string>()
const { videoInputs: cameras } = useDevicesList({
  onUpdated() {
    if (!cameras.value.find(i => i.deviceId === currentCamera.value))
      currentCamera.value = cameras.value[0]?.deviceId
  },
  requestPermissions: true,
})

const video = ref<HTMLVideoElement>()
const { enabled, stream } = useUserMedia({
  constraints: { video: { deviceId: currentCamera.value } },
})

async function detectFaceAndGetHeadBox(img: HTMLImageElement): Promise<boolean> {
  const detection = await faceapi.detectSingleFace(
    img,
    new faceapi.TinyFaceDetectorOptions({ scoreThreshold: 0.1 }),
  )

  return new Promise((resolve) => {
    let box = null
    if (detection) {
      const rangeRatio = 2
      let headWidthToHunt = (detection.box.width < detection.box.height ? detection.box.width : detection.box.height) * rangeRatio
      let headX = detection.box.x - detection.box.width / 2
      let headY = detection.box.y - detection.box.height / 1.2
      if (headX < 0)
        headX = 0
      if (headY < 0)
        headY = 0
      while (headWidthToHunt + headX > img.width || headWidthToHunt + headY > img.height)
        headWidthToHunt -= 1

      box = {
        x: headX,
        y: headY,
        width: headWidthToHunt,
        height: headWidthToHunt,
      }
    }

    if (box == null || (box.width < 200 || box.height < 200))
      resolve(false)
    else resolve(true)
  })
}

async function checkFace() {
  if (video.value) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')!
    canvas.width = video.value.videoWidth
    canvas.height = video.value.videoHeight
    context.drawImage(video.value, 0, 0, canvas.width, canvas.height)
    const dataURL = canvas.toDataURL('image/png')

    if (dataURL) {
      const img = await loadImage(dataURL)
      isPersonOnCamera.value = await detectFaceAndGetHeadBox(img)

      return dataURL
    }
  }
}

useIntervalFn(checkFace, 3000, { immediate: true })

watchEffect(() => {
  if (video.value)
    video.value.srcObject = stream.value!
})

onBeforeMount(() => {
  faceapi.nets.tinyFaceDetector.loadFromUri('/models')
})

onMounted(async () => {
  enabled.value = true
})
</script>

<template>
  <section h-full flex="~ col justify-center items-center gap-y-24">
    <div class="h140 w140 of-hidden rounded-5xl">
      <Transition name="fade" mode="out-in">
        <video v-if="stream" ref="video" class="h-full w-full object-cover" autoplay muted />
        <EmptyCameraBox v-else />
      </Transition>
    </div>
    <SearchButton :disabled="!isPersonOnCamera" />
  </section>
</template>
