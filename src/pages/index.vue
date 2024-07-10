<script setup lang="ts">
import type { SearchPayload } from '~/types'

const router = useRouter()
const { videoEl, stream, personData, checkFace } = useCamera()

const isSearching = ref(false)

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

    const response = await fetch('http://192.168.10.100:8084/api/users/check-in-points', {
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
</script>

<template>
  <section pos-relative h-full w-full flex="~ col items-center">
    <Transition name="fade-slide" mode="out-in">
      <h1 v-if="!personData" position="absolute top-0" text="15 center nowrap" flex="~ items-end gap-x-8" font="roboto bold" class="left-1/2 -translate-x-1/2">
        快來看看你收集到幾個
        <br>
        會場攝影機？
      </h1>
    </Transition>

    <div pos-relative mxa h-full w-full text-center>
      <div mxa of-hidden rounded-15 transition-all duration-600 ease :class="personData ? 'h160 w120 mt0 mb65' : 'h140 w140 mt60 mb0'">
        <CameraBox v-show="personData" :src="personData" />

        <Transition v-show="!personData" name="fade" mode="out-in">
          <video v-if="stream" ref="videoEl" class="h-full w-full object-cover" autoplay muted />
          <EmptyCameraBox v-else />
        </Transition>
      </div>

      <div v-if="personData" position="absolute top-0 left-0" w-full class="top-179" animate-slide-in-up animate-duration-300>
        <h2 mb9 text-8 font-500>
          請點選下方按鈕進行 AI 人臉辨識
        </h2>

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
