<script setup lang="ts">
import * as faceapi from 'face-api.js'
import type { SearchPayload } from '~/types'

import ky from '~/lib/ky'

const controller = new AbortController()
const { signal } = controller

const { VITE_CHECK_POINTS } = import.meta.env

const router = useRouter()

const isSearching = ref(false)
const isInit = ref(false)

const {
  videoEl,
  isAnimationActive,
  start,
  stop,
  stream,
  personData,
  checkFace,
} = useCamera(isInit)

const rect = computed(() => personData.value && !isAnimationActive.value
  ? ({
      width: 480,
      height: 640,
    })
  : ({
      width: 560,
      height: 560,
    }))

const { pause, resume } = useIntervalFn(async () => {
  const status = await checkFace()

  if (status)
    pause()
}, 2000, { immediate: true })

const visibility = useDocumentVisibility()

watch([visibility], ([newvisibility]) => {
  if (newvisibility === 'visible') {
    start()
    resume()
  }
  else {
    stop()
    pause()
  }
})

async function search() {
  isSearching.value = true

  try {
    const body = {
      photo: personData.value.replace(/^data:image\/[a-zA-Z]+;base64,/, ''),
    }

    const { payload = {} }: { payload: Record<string, SearchPayload> } = await ky.post(VITE_CHECK_POINTS, { json: body, signal }).json()

    for (const [key, value] of Object.entries(payload)) {
      if (value == null)
        continue

      const { timestamp } = value
      const oldData = data.value.get(key)

      if (oldData)
        data.value.set(key, { ...oldData, timestamp })
    }

    isSearching.value = false
    isVisited.value = true
    router.push('./level')
  }
  catch (error: any) {
    if (error.name === 'AbortError')
      isSearching.value = false
  }
}

function handleBack() {
  if (isSearching.value)
    controller.abort()
  else
    remake()
}

function remake() {
  personData.value = ''
  resume()
}

onMounted(async () => {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
  isInit.value = true
})
</script>

<template>
  <section h-max w-full flex="~ col items-center">
    <div
      pos-relative mxa h-full w-full flex="~ justify-center"
    >
      <Transition name="fade-slide" mode="out-in">
        <Text
          is="h1"
          v-if="!personData || isAnimationActive"
          origin-x="left"
          position="absolute bottom-100%"
          flex="~ items-end gap-x-8"
          font="roboto bold"
          text="15 center"
          class="left-1/2 -translate-x-1/2"
          mb8 whitespace-pre
        >
          快來看看你收集到幾個
          <br>
          會場攝影機？
        </Text>
      </Transition>

      <div
        h-full w-full of-hidden rounded-15 transition-all duration-600 ease
        style="transform: translateZ(0);"
        :style="{
          width: `${rect.width}px`,
          height: `${rect.height}px`,
        }"
      >
        <CameraScanBox v-show="personData && isAnimationActive" :src="personData" :loading="isAnimationActive" />

        <CameraBox v-show="personData && !isAnimationActive" :src="personData" />

        <Transition v-show="!personData" name="fade" mode="out-in">
          <video v-if="stream" ref="videoEl" class="h-full w-full object-cover" autoplay muted style="transform: scaleX(-1);" />
          <EmptyCameraBox v-else />
        </Transition>
      </div>

      <div v-if="personData && !isAnimationActive" position="absolute top-100%" flex="~ col items-center" mt4 w-full animate-slide-in-up animate-duration-300>
        <Text
          is="h2"
          mb4 text-8 font-500
        >
          請點選下方按鈕進行 AI 人臉辨識
        </Text>

        <div flex="~ justify-center items-center gap-4" w-full>
          <Button @click="handleBack">
            返回
          </Button>
          <Button :loading="isSearching" @click="search">
            搜尋
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
