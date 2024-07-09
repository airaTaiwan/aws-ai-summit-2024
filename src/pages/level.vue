<script setup lang="ts">
import type { Data } from '~/types'

const router = useRouter()
const { videoEl, isPersonOnCamera, checkFace } = useCamera()

useIntervalFn(async () => {
  await checkFace()

  if (!isPersonOnCamera.value)
    router.push('/')
}, 20000)

const checkList = computed(() => Array.from(data.value.values()).filter(({ timestamp }) => timestamp !== 0))
const isPass = computed(() => checkList.value.length === data.value.size)

function calculateDelay(id: string, position: Data['position'], timestamp: number) {
  if (timestamp === 0)
    return position === 'bottom' ? 0 : 500

  const targetIdx = checkList.value.findIndex(({ name }) => name === id)

  return targetIdx * 500 + (position === 'bottom' ? 0 : 500)
}
</script>

<template>
  <section pos-relative h-full w-full flex="~ col justify-start items-center gap-y-6">
    <h2 pt6 class="text-[68px] title font-bold leading-[98.46px]">
      {{ isPass ? '冒險成功，獲得小禮物' : '再去攤位晃晃，跟我們鏡頭互動吧' }}
    </h2>

    <div flex="~ justify-center items-center wrap gap-y-[34px]" w-full flex-1 px-70>
      <template v-for="[key, { name, position, timestamp }] in data" :key>
        <CircleBox
          class="min-w-[232px] w25%"
          style="height: calc(50% - 17px);"
          :style="{
            animationDelay: `${position === 'top' ? 1500 : 0}ms`,
          }"
          :position
          :delay="calculateDelay(key, position, timestamp)"
          :checked="timestamp !== 0"
        >
          {{ name }}
        </CircleBox>
      </template>
    </div>

    <RouterLink v-slot="{ navigate }" custom to="/">
      <button flex="~ justify-center items-center" pr4 position="absolute top-2 left-2" hover="shadow-2xl" class="btn w-50!" @click="navigate">
        <div i-material-symbols:chevron-left-rounded class="text-[1.2em]" />
        返回
      </button>
    </RouterLink>

    <video v-show="false" ref="videoEl" autoplay muted />
  </section>
</template>

<style scoped>
 @keyframes balloon {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.balloon {
  animation-name: balloon;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
