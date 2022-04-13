<script setup lang="ts">
import { SMenu, SFooter } from '~/shared/ui/layout'
import menuImage from '~/shared/assets/menuImage.svg'
import pcTable from '~/shared/assets/pcTable.svg'
import { SButton, SDashboard } from '~/shared/ui'
import code from '~/shared/assets/code.svg'
import gears from '~/shared/assets/gears.svg'
import build from '~/shared/assets/build.svg'
import design from '~/shared/assets/des.svg'
import search from '~/shared/assets/search.svg'
import support from '~/shared/assets/support.svg'
import { dispatch } from '~/shared/utils'

const openModal = () => {
  dispatch('modal/open')
}
</script>

<template>
  <div
    class="bg-right bg-no-repeat bg-none xl:bg-[url(src/shared/assets/menuBg.svg)]"
  >
    <SMenu />
    <div class="py-24 md:pt-0 md:pb-40">
      <div
        class="flex flex-col-reverse px-10 mx-auto max-w-[1200px] text-center md:grid md:grid-cols-12 md:text-left"
      >
        <div class="self-center mt-12 md:col-start-1 md:col-end-5 md:mt-0">
          <h1
            class="text-3xl font-bold text-center text-blueSky md:text-4xl md:text-left"
          >
            Your partners in new products creating
          </h1>
          <p class="mt-6 mb-12 text-2xl text-blueSky md:my-12">
            with a beer drinking afterwards. and staying at home =)
          </p>
          <SButton class="text-xl md:text-2xl" @click="openModal"
            >Let`s talk</SButton
          >
        </div>
        <div class="col-start-6 col-end-13 mx-auto">
          <img :src="menuImage" />
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-[#e7e7e7] bg-right-top bg-no-repeat xl:bg-[url('src/shared/assets/bord.svg')]"
  >
    <SDashboard />
  </div>
  <div class="py-24">
    <div
      class="flex flex-col order-last px-10 mx-auto max-w-[1200px] md:grid md:grid-cols-12"
    >
      <div
        class="self-center text-center md:col-start-8 md:col-end-13 md:text-left"
      >
        <h1 class="mt-12 text-4xl font-bold text-blueSky md:mt-0">
          We love taking products from vision to reality.
        </h1>
        <p class="my-12 text-xl text-blueSky">
          Somethings about how we work. We do all sorts of programming: Web,
          mobile, backend, desktop development. JS is our lovest language. Blala
          something more.
        </p>
        <p class="mb-12 text-xl text-blueSky">
          We are a team of passionated mobile and web developers who love what
          they do. Also we love being on the same page with our clients and to
          deliver real cases to users.
        </p>
        <SButton class="text-xl md:text-2xl" @click="openModal"
          >Meet our team 👊</SButton
        >
      </div>
      <div class="order-first col-start-1 col-end-8 self-center">
        <img class="mx-auto" :src="pcTable" />,
      </div>
    </div>
  </div>
  <div class="py-24">
    <div class="px-10 mx-auto max-w-[1200px]">
      <div
        class="p-6 mx-auto w-[100%] rounded-3xl shadow-2xl sm:w-[83.3%] lg:p-12"
      >
        <div class="mx-auto w-full sm:w-[80%]">
          <p
            class="mb-6 text-2xl font-bold text-center text-blueSky md:mb-12 lg:text-4xl"
          >
            Looking for a team willing to go the extra mile for you?
          </p>
        </div>
        <div class="flex justify-around">
          <div><img class="hidden lg:block" :src="gears" alt="" /></div>
          <div>
            <p
              class="text-2xl text-center text-blueSky md:text-left lg:text-4xl"
            >
              You're in the right place.
            </p>
          </div>
          <div><img class="hidden lg:block" :src="code" alt="" /></div>
        </div>
      </div>
      <div class="mt-24 text-blueSky">
        <div class="mb-6 lg:mb-14">
          <p class="text-4xl text-center">What we do?</p>
        </div>
        <div class="flex flex-wrap justify-around">
          <div class="flex justify-center mt-6 w-[230px] lg:mt-0">
            <div class="self-center">
              <img
                class="hidden sm:block sm:w-[70%] md:w-[80%]"
                :src="search"
                alt=""
              />
            </div>
            <p
              class="self-center text-xl ms:text-2xl font-bold text-blueSky sm:ml-6 md:text-3xl"
            >
              Research
            </p>
          </div>
          <div class="flex justify-center mt-6 w-[230px] lg:mt-0">
            <div class="self-center">
              <img
                class="hidden sm:block sm:w-[70%] md:w-[80%]"
                :src="design"
                alt=""
              />
            </div>
            <p
              class="self-center text-xl ms:text-2xl font-bold text-blueSky sm:ml-6 md:text-3xl"
            >
              Design
            </p>
          </div>
          <div class="flex justify-center mt-6 w-[230px] lg:mt-0">
            <div class="self-center">
              <img
                class="hidden sm:block sm:w-[70%] md:w-[80%]"
                :src="build"
                alt=""
              />
            </div>
            <p
              class="self-center text-xl ms:text-2xl font-bold text-blueSky sm:ml-6 md:text-3xl"
            >
              Build
            </p>
          </div>
          <div class="flex justify-center mt-6 w-[230px] lg:mt-0">
            <div class="self-center">
              <img
                class="hidden sm:block sm:w-[70%] md:w-[80%]"
                :src="support"
                alt=""
              />
            </div>
            <p
              class="self-center text-xl ms:text-2xl font-bold text-blueSky sm:ml-6 md:text-3xl"
            >
              Support
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SFooter />
</template>
