<script setup lang="ts">
import { SMenu, SFooter, SWebPreview } from '~/shared/ui/layout'
import { SDashboard } from '~/shared/ui'

import branding from '~/shared/assets/branding.svg'
import printLayoutDesign from '~/shared/assets/printLayoutDesign.svg'
import backend from '~/shared/assets/backend.svg'
import frontend from '~/shared/assets/frontend.svg'
import mobileApps from '~/shared/assets/mobileApps.svg'
import uiInteractions from '~/shared/assets/uiInteractions.svg'

import build from '~/shared/assets/build.svg'
import design from '~/shared/assets/des.svg'
import search from '~/shared/assets/search.svg'
import support from '~/shared/assets/support.svg'

import adobeCreative from '~/shared/assets/adobeCreative.svg'
import angular from '~/shared/assets/angular.svg'
import vue from '~/shared/assets/vue.svg'
import figma from '~/shared/assets/figma.svg'
import flutter from '~/shared/assets/flutter.svg'
import ionic from '~/shared/assets/ionic.svg'
import nodeJs from '~/shared/assets/nodeJs.svg'
import react from '~/shared/assets/react.svg'
import reactNative from '~/shared/assets/reactNative.svg'

import webPreview from '~/shared/assets/webPreview.png'
import phoneWebPreview from '~/shared/assets/phoneWebPreview.png'
import STriangle from '../../shared/ui/STriangle/STriangle.vue'

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

const itemsToolchain = [
  {
    title: 'React',
    image: react,
  },
  {
    title: 'Vue',
    image: vue,
  },
  {
    title: 'React Native',
    image: reactNative,
  },
  {
    title: 'Angular',
    image: angular,
  },
  {
    title: 'Figma',
    image: figma,
  },
  {
    title: 'Adobe Creative Suite',
    image: adobeCreative,
  },
  {
    title: 'Flutter',
    image: flutter,
  },
  {
    title: 'Node.js',
    image: nodeJs,
  },
  {
    title: 'Ionic',
    image: ionic,
  },
]

const itemsWhatWeDo = [
  { title: 'Research', image: search },
  { title: 'Design', image: design },
  { title: 'Build', image: build },
  { title: 'Support', image: support },
]
</script>

<template>
  <div class="bg-[#e7e7e7]">
    <SMenu />
    <div
      class="bg-right-bottom bg-no-repeat lg:bg-[url('~/shared/assets/bgWorkPageHeader.svg')]"
    >
      <div class="px-6 pt-12 pb-32 mx-auto max-w-[1200px] lg:px-12 lg:pt-0">
        <div class="mx-auto w-full md:w-10/12">
          <h1
            class="mx-auto text-3xl font-bold text-center text-blueSky sm:w-9/12 lg:text-4xl"
          >
            That’s how we work and what we do. And a bit of our favorite
            projects and the impact they've made.
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
              <img
                class="self-center w-[50px] lg:w-[80px]"
                :src="image"
                alt=""
              />
              <p
                class="self-center mt-4 text-xl text-center text-white md:mt-0 md:ml-6 md:text-left lg:text-2xl lg:font-semibold"
              >
                {{ title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SDashboard />
  <div class="bg-[#e7e7e7]">
    <div class="py-24 px-6 mx-auto max-w-[1200px] lg:px-0">
      <div class="mb-6 lg:mb-14">
        <p class="text-4xl text-center text-blueSky">What we do?</p>
      </div>
      <div class="flex flex-wrap justify-around">
        <div
          v-for="{ title, image } in itemsWhatWeDo"
          :key="title"
          class="flex justify-center mt-6 w-[230px] lg:mt-0"
        >
          <div class="self-center w-[40px] md:w-auto">
            <img class="md:w-[80%]" :src="image" :alt="image" />
          </div>
          <p
            class="self-center ml-6 w-[85px] text-2xl font-bold text-blueSky md:w-auto md:text-3xl"
          >
            {{ title }}
          </p>
        </div>
      </div>
      <div>
        <p class="mt-16 text-4xl text-center text-blueSky">
          What do we have in our toolchain?
        </p>
      </div>
      <div class="flex flex-row-reverse flex-wrap justify-center">
        <div
          v-for="{ title, image } in itemsToolchain"
          :key="title"
          class="mt-12 w-[120px] text-center sm:w-[170px] md:w-[230px]"
        >
          <img class="mx-auto max-h-[70px]" :src="image" :alt="title" />
          <p class="mt-6 text-2xl">{{ title }}</p>
        </div>
      </div>
    </div>
  </div>
  <STriangle>
    <SWebPreview
      :first-image="webPreview"
      :second-image="phoneWebPreview"
      title="MMO.cat selling website"
      text="We provided full-stack development service for end-to-end websites of MMO.cat team"
    />
  </STriangle>

  <SFooter />
</template>
