<script setup lang="ts">
import Phone from '~/shared/assets/phone.png'
import PhoneMenu from '~/shared/assets/phonemenu.png'
import { SButton } from '.'
</script>
<template>
  <div
    class="py-24 bg-[#dadada] bg-right-top bg-no-repeat"
    style="background-image: url(src/shared/assets/bord.svg)"
  >
    <div class="container grid grid-cols-12 mx-auto">
      <div class="col-start-1 col-end-5 self-center max-w-[370px]">
        <p class="text-4xl text-[#104065]">
          They really help to fight COVID-19 in US
        </p>
        <p class="my-12 text-xl text-[#3B4649]">
          With GapNurse, facilities know they’re covered during critical moments
          and unexpected absences without breaking your budget.
        </p>
        <SButton>See case study</SButton>
      </div>
      <div class="flex col-start-6 col-end-12 justify-between">
        <div class="flex items-end w-[48%]">
          <img :src="Phone" class="mr-36" />
        </div>
        <div class="self-end w-[42%]">
          <img :src="PhoneMenu" class="#" />
        </div>
      </div>
    </div>
  </div>
</template>
