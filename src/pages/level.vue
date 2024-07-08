<script setup lang="ts">
const router = useRouter()
const { videoEl, isPersonOnCamera, checkFace } = useCamera()

useIntervalFn(async () => {
  await checkFace()

  if (!isPersonOnCamera.value)
    router.push('/')
}, 20000)

const checkList = computed(() => Array.from(data.value.values()).filter(({ timestamp }) => timestamp !== 0))

function calculateDelay(id: string, timestamp: number) {
  if (timestamp === 0)
    return 0

  const targetIdx = checkList.value.findIndex(({ name }) => name === id)

  return targetIdx * 500
}
</script>

<template>
  <section pos-relative h-full w-full flex="~ col justify-start items-center gap-y-6">
    <h2 pt6 class="text-[68px] title font-bold leading-[98.46px]">
      再去攤位晃晃，跟我們鏡頭互動吧
    </h2>

    <div flex="~ justify-center items-center wrap gap-y-[34px]" w-full flex-1 px-70>
      <template v-for="[key, { name, position, timestamp }] in data" :key>
        <CircleBox class="min-w-[232px] w25%" :position style="height: calc(50% - 17px);" :delay="calculateDelay(key, timestamp)" :checked="timestamp !== 0">
          {{ name }}
        </CircleBox>
      </template>
    </div>

    <template v-if="checkList.length === data.size">
      <RouterLink v-slot="{ navigate }" custom to="/">
        <button flex="~ justify-center items-center" pr4 position="absolute top-2 left-2" hover="shadow-2xl" class="btn w-50!" @click="navigate">
          <div i-material-symbols:chevron-left-rounded class="text-[1.2em]" />
          返回
        </button>
      </RouterLink>
    </template>

    <video v-show="false" ref="videoEl" autoplay muted />
  </section>
</template>
