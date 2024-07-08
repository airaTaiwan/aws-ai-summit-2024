<script setup lang="ts">
const router = useRouter()
const { videoEl, stream, isPersonOnCamera, personData, checkFace } = useCamera()

const isSearching = ref(false)

useIntervalFn(checkFace, 3000, { immediate: true })

async function search() {
  isSearching.value = true

  isSearching.value = false

  router.push('./level')
}
</script>

<template>
  <section h-full flex="~ col justify-center items-center gap-y-24">
    <div class="of-hidden transition-all duration-300 rounded-5xl" :class="isSearching ? 'h160 w120' : 'h140 w140'">
      <CameraBox v-if="isSearching" :src="personData" />

      <template v-else>
        <Transition name="fade" mode="out-in">
          <video v-if="stream" ref="videoEl" class="h-full w-full object-cover" autoplay muted />
          <EmptyCameraBox v-else />
        </Transition>
      </template>
    </div>
    <Button :disabled="!isPersonOnCamera" :loading="isSearching" @click="search" />
  </section>
</template>
