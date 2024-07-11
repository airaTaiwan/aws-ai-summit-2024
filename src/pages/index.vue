<script setup lang="ts">
import * as faceapi from 'face-api.js'
import type { SearchPayload } from '~/types'

const { VITE_API_BASE_URL, VITE_CHECK_POINTS } = import.meta.env

const router = useRouter()

const isSearching = ref(false)
const isInit = ref(false)

const { videoEl, stream, personData, checkFace } = useCamera(isInit)

const rect = computed(() => personData.value
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
}, 1000, { immediate: true })

async function search() {
  isSearching.value = true

  try {
    const body = {
      photo: personData.value.replace(/^data:image\/[a-zA-Z]+;base64,/, ''),
    }

    const response = await fetch(`${VITE_API_BASE_URL}${VITE_CHECK_POINTS}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const result = await response.json()
    const payload: Record<string, SearchPayload> = result?.payload ?? {}

    for (const [key, value] of Object.entries(payload)) {
      if (value == null)
        continue

      const { timestamp } = value
      const oldData = data.value.get(key)

      if (oldData)
        data.value.set(key, { ...oldData, timestamp })
    }
  }
  finally {
    isSearching.value = false
    isVisited.value = true
    router.push('./level')
  }
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
          v-if="!personData"
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
        <CameraBox v-show="personData" :src="personData" />

        <Transition v-show="!personData" name="fade" mode="out-in">
          <video v-if="stream" ref="videoEl" class="h-full w-full object-cover" autoplay muted style="transform: scaleX(-1);" />
          <EmptyCameraBox v-else />
        </Transition>
      </div>

      <div v-if="personData" position="absolute top-100%" flex="~ col items-center" mt4 w-full animate-slide-in-up animate-duration-300>
        <Text
          is="h2"
          mb4 text-8 font-500
        >
          請點選下方按鈕進行 AI 人臉辨識
        </Text>

        <div flex="~ justify-center items-center gap-4" w-full>
          <Button @click="remake">
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
