<script setup lang="ts">
const { width } = useWindowSize()

watchEffect(() => {
  document.body.style.zoom = `${width.value / 1920}`
})
</script>

<template>
  <main flex="~ col items-center" p="x-10 t-10 b-20" h6xl font-sans md:h-full>
    <h1 font-bold font-roboto flex="~ items-end gap-x-8" class="text-[92px] leading-[112.33px]">
      AWS AI Summit <span font-300 class="text-[112px] leading-[135.41px]">2024</span>
    </h1>

    <img position="fixed bottom-xl left-3xl" class="max-w-13.5%" src="./images/logo.png">

    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
</template>
