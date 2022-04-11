<script setup lang="ts">
import WebPreview from '~/shared/assets/webPreview.png'
import PhoneWebPreview from '~/shared/assets/phoneWebPreview.png'
import { SButton } from '~/shared/ui'

defineProps<{
  firstImage: string
  secondImage: string
  title: string
  text: string
}>()
</script>
<template>
  <div
    class="py-24 px-6 mx-auto max-w-[1200px] lg:grid lg:grid-cols-12 lg:px-12"
  >
    <div
      class="flex flex-col justify-between self-center sm:flex-row lg:col-start-1 lg:col-end-8"
    >
      <div class="mb-8 sm:mr-5 sm:mb-0 sm:w-3/4 lg:mr-10">
        <img :src="firstImage" />
      </div>
      <div class="mx-auto w-10/12 sm:w-1/4">
        <img class="mx-auto" :src="secondImage" />
      </div>
    </div>
    <div
      class="mt-12 text-center lg:col-start-9 lg:col-end-12 lg:mt-0 lg:text-left"
    >
      <p class="text-4xl text-blueSky">{{ title }}</p>
      <p class="my-12 text-xl text-[#3B4649]">
        {{ text }}
      </p>
      <SButton>See case study</SButton>
    </div>
  </div>
</template>
