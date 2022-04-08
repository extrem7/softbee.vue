<script setup lang="ts">
defineProps<{
  android: boolean
  imgSecond: string
  logo: string
  img: string
}>()
</script>
<template>
  <div class="container grid grid-cols-11 mx-auto">
    <div class="col-start-2 col-end-5 max-h-[684px]">
      <img class="h-full" :src="img" alt="img" />
    </div>
    <div class="col-start-6 col-end-7 self-center">
      <img class="w-full" :src="logo" alt="img" />
      <p class="mt-6 text-3xl text-center text-[#575195]">
        {{ android ? 'Android' : 'iOS' }}
      </p>
    </div>
    <div class="col-start-8 col-end-11 max-h-[684px]">
      <img class="h-full" :src="imgSecond" alt="img" />
    </div>
  </div>
</template>

})
