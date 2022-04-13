<script setup lang="ts">
import {
  SMenu,
  SFooter,
  SHeaderMobileCase,
  SMobileCase,
} from '~/shared/ui/layout'

import { SDeclarationCircle, STriangle } from '~/shared/ui'

import phone from '~/shared/assets/phone.png'
import phonemenu from '~/shared/assets/phonemenu.png'
import logo from '~/shared/assets/logo.svg'
import lang from '~/shared/assets/lang.svg'
import tech from '~/shared/assets/tech.svg'
import time from '~/shared/assets/time.svg'

const items = [
  { title: 'Technologies', text: 'React, Vue', image: tech },
  { title: 'Language', text: 'Vue', image: lang },
  { title: 'Time', text: '25h', image: time },
]
</script>

<template>
  <SMenu />
  <SHeaderMobileCase />
  <div class="bg-[#575195] md:rounded-b-[100px]">
    <div
      class="flex flex-col justify-center items-center py-6 px-4 mx-auto max-w-[1200px] sm:flex-row"
    >
      <div
        v-for="({ title, image, text }, i) in items"
        :key="title"
        class="flex items-center"
        :class="{ 'mx-6 md:mx-12 sm:my-0 my-4': i % 2 }"
      >
        <img class="mr-5 w-[30px] md:w-[50px]" :src="image" alt="" />
        <div class="w-[125px] text-center sm:w-auto">
          <p class="text-xl text-white md:text-2xl">{{ title }}:</p>
          <p class="text-xl font-bold text-white md:text-2xl">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col py-24 mx-auto max-w-[1200px]">
    <img class="self-center w-[100px]" :src="logo" alt="" />
    <p class="mt-12 text-2xl text-center text-[#575195] md:text-4xl">
      GapNurse is a platform for cooperating nurses and healthcare facilities
      work together. GapNurse connects nursing professionals with healthcare
      facilities to fill hourly, short-term and permanent assignments.
    </p>
  </div>
  <SDeclarationCircle>
    <SMobileCase background :logo="logo" :img-second="phonemenu" :img="phone" />
  </SDeclarationCircle>
  <STriangle>
    <SMobileCase :logo="logo" :img-second="phonemenu" :img="phone" />
  </STriangle>
  <SDeclarationCircle>
    <SMobileCase background :logo="logo" :img-second="phonemenu" :img="phone" />
  </SDeclarationCircle>
  <STriangle rotate>
    <SMobileCase :logo="logo" :img-second="phonemenu" :img="phone" />
  </STriangle>
  <SFooter />
</template>
