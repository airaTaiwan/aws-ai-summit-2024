<script setup lang="ts">
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
    const data = {
      photo: personData.value.replace(/^data:image\/[a-zA-Z]+;base64,/, ''),
    }

    const response = await fetch('http://192.168.10.100:8084/api/users/check-in-points', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const result = await response.json()
    console.log(result)
  }
  finally {
    isSearching.value = false
    router.push('./level')
  }
}

function remake() {
  personData.value = ''
  resume()
}
</script>

<template>
  <section h-full flex="~ col justify-center items-center gap-y-13">
    <div class="of-hidden transition-all duration-700 rounded-5xl" :class="personData ? 'h160 w120' : 'h140 w140'">
      <Transition name="fade-fast" mode="out-in">
        <CameraBox v-if="personData" :src="personData" />

        <template v-else>
          <Transition name="fade" mode="out-in">
            <video v-if="stream" ref="videoEl" class="h-full w-full object-cover" autoplay muted />
            <EmptyCameraBox v-else />
          </Transition>
        </template>
      </Transition>
    </div>

    <div w-full flex="~ items-center gap-4" transition-opacity duration-300 :class="personData ? 'op100' : 'op0'">
      <Button @click="remake">
        返回
      </Button>
      <Button :loading="isSearching" @click="search">
        搜尋
      </Button>
    </div>
  </section>
</template>
