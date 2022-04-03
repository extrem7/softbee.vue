<script setup lang="ts">
import Phone from '~/shared/assets/phone.png'
import PhoneMenu from '~/shared/assets/phonemenu.png'
import { SButton } from '.'
</script>
<template>
  <div
    class="flex flex-col-reverse px-10 mx-auto max-w-[1200px] md:grid md:grid-cols-12"
  >
    <div
      class="col-start-1 col-end-5 self-center mt-12 text-center md:mt-0 md:max-w-[370px] md:text-left"
    >
      <p class="text-4xl text-[#104065]">
        They really help to fight COVID-19 in US
      </p>
      <p class="my-12 text-xl text-[#3B4649]">
        With GapNurse, facilities know they’re covered during critical moments
        and unexpected absences without breaking your budget.
      </p>
      <SButton class="text-xl md:text-2xl">See case study</SButton>
    </div>
    <div
      class="flex justify-between md:col-start-5 md:col-end-13 md:self-center md:ml-12 lg:col-start-6 lg:col-end-13"
    >
      <div class="flex items-end w-[48%]">
        <img :src="Phone" class="mr-36" />
      </div>
      <div class="self-end w-[42%]">
        <img :src="PhoneMenu" class="#" />
      </div>
    </div>
  </div>
</template>
