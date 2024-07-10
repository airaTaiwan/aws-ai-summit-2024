<script setup lang="ts">
const router = useRouter()

const checkList = computed(() => Array.from(data.value.values()).filter(({ timestamp }) => timestamp !== 0))
const isPass = computed(() => checkList.value.length === data.value.size)

const balloonInitDelay = ref(0)

function calculateDelay(targetName: string) {
  const targetIdx = checkList.value.findIndex(({ name }) => name === targetName)

  if (targetIdx === checkList.value.length - 1)
    balloonInitDelay.value = targetIdx * 500 + 50

  return targetIdx * 500
}

function goBack() {
  isVisited.value = false
  router.push('/')
}

onBeforeMount(() => {
  if (!isVisited.value)
    router.push('/')
})
</script>

<template>
  <section pos-relative h-full w-full flex="~ col justify-start items-center gap-y-6">
    <h2 font-bold text="15 center" class="mb-[5.625rem]">
      <template v-if="isPass">
        恭喜您集點成功！
        <br>
        請諮詢攤位工作人員領取小禮物
      </template>
      <template v-else>
        很遺憾您的集點尚未成功
        <br>
        再去其他攤位逛逛吧！
      </template>
    </h2>

    <div flex="~ justify-center items-center wrap gap-y-[34px]" w-full flex-1 px-70>
      <template v-for="[key, { name, position, timestamp }] in data" :key>
        <CircleBox
          class="min-w-[232px] w25%"
          style="height: calc(50% - 17px);"
          :style="{
            animationDelay: `${position === 'top' ? 1500 + balloonInitDelay : 0 + balloonInitDelay}ms`,
          }"
          :position
          :delay="calculateDelay(name)"
          :checked="timestamp !== 0"
        >
          {{ name }}
        </CircleBox>
      </template>
    </div>

    <Button position="fixed bottom-12 right-20" @click="goBack">
      <span pr4 flex="~ justify-center items-center">
        <div i-material-symbols:chevron-left-rounded class="text-[1.2em]" />
        返回
      </span>
    </Button>
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
