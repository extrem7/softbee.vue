<script setup lang="ts">
import { SMenu, SFooter } from '~/shared/ui/layout'
import branding from '~/shared/assets/branding.svg'
import printLayoutDesign from '~/shared/assets/printLayoutDesign.svg'
import backend from '~/shared/assets/backend.svg'
import frontend from '~/shared/assets/frontend.svg'
import mobileApps from '~/shared/assets/mobileApps.svg'
import uiInteractions from '~/shared/assets/uiInteractions.svg'

const items = [
  {
    title: 'Branding',
    image: branding,
  },
  {
    title: 'Print Layout Design',
    image: printLayoutDesign,
  },
  {
    title: 'UI & interactions',
    image: uiInteractions,
  },
  {
    title: 'Front-end',
    image: frontend,
  },
  {
    title: 'Back-end',
    image: backend,
  },
  {
    title: 'Mobile Apps',
    image: mobileApps,
  },
]
</script>

<template>
  <SMenu />
  <div class="py-24 px-6 mx-auto max-w-[1200px] lg:px-12">
    <div class="mx-auto w-full md:w-10/12">
      <h1
        class="mx-auto text-3xl font-bold text-center text-blueSky sm:w-9/12 lg:text-4xl"
      >
        That’s how we work and what we do. And a bit of our favorite projects
        and the impact they've made.
      </h1>
      <div
        class="grid grid-cols-12 py-3 px-2 mx-auto mt-12 bg-blueSky rounded-[20px] md:px-12 md:mt-24 md:rounded-[40px] lg:px-24"
      >
        <div
          v-for="({ title, image }, index) in items"
          :key="title"
          :class="[
            index % 2
              ? 'md:col-start-8 col-start-7  col-end-13'
              : 'col-start-1 col-end-7 md:col-start-2 md:col-end-7',
          ]"
          class="flex flex-col py-3 text-blueSky md:flex-row md:py-6"
        >
          <img class="self-center w-[50px] lg:w-[80px]" :src="image" alt="" />
          <p
            class="self-center mt-4 text-xl text-center text-white md:mt-0 md:ml-6 md:text-left lg:text-2xl lg:font-semibold"
          >
            {{ title }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <SFooter />
</template>
