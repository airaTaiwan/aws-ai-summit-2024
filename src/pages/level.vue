<script setup lang="ts">
const router = useRouter()

const checkList = computed(() => Array.from(data.value.values()).filter(({ timestamp }) => timestamp !== 0))
const isPass = computed(() => checkList.value.length >= 3)

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
  <section pos-relative h-full w-full flex="~ col justify-start gap-y-[5.625rem]">
    <Text is="h2" font-bold text="15 center">
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
    </Text>

    <div flex="~ justify-center items-center wrap gap-y-20" w-full flex-1 px-70>
      <template v-for="[key, { name, position, timestamp }], index in data" :key>
        <CircleBox
          class="min-w-58 w33.33%"
          :style="{
            animationDelay: `${[1, 3, 4].includes(index) ? 1500 + balloonInitDelay : 0 + balloonInitDelay}ms`,
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
      <span flex="~ items-center">
        <div i-material-symbols:chevron-left-rounded text-5xl />
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
