<script setup lang="ts">
defineProps<{
  android?: boolean
  imgSecond: string
  logo: string
  img: string
  background?: boolean
}>()
</script>
<template>
  <div
    :class="[background ? 'bg-gray-200 xl:bg-transparent' : '']"
    class="py-24"
  >
    <div class="grid grid-cols-11 px-6 mx-auto max-w-[1200px]">
      <div
        class="col-start-1 col-end-13 self-center mb-6 md:order-2 md:col-start-6 md:col-end-7 md:mb-0"
      >
        <img
          class="mx-auto w-[80px] sm:w-[100px] md:w-full"
          :src="logo"
          alt="img"
        />
        <p class="mt-6 text-3xl text-center text-[#575195]">
          {{ android ? 'Android' : 'iOS' }}
        </p>
      </div>
      <div
        class="col-start-1 col-end-6 max-h-[684px] md:order-1 md:col-start-2 md:col-end-5"
      >
        <img class="h-full" :src="img" alt="img" />
      </div>

      <div
        class="col-start-7 col-end-12 max-h-[684px] md:order-3 md:col-start-8 md:col-end-11"
      >
        <img class="h-full" :src="imgSecond" alt="img" />
      </div>
    </div>
  </div>
</template>

})
