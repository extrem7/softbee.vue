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
</script>

<template>
  <div
    style="background-image: url(src/shared/assets/menuBg.svg)"
    class="bg-right bg-no-repeat"
  >
    <SMenu />
    <div class="pb-40">
      <div class="grid grid-cols-12 mx-auto max-w-[1200px]">
        <div class="col-start-1 col-end-5 self-center">
          <h1 class="text-4xl font-bold text-[#104065]">
            Your partners in new products creating
          </h1>
          <p class="my-12 text-2xl text-[#104065]">
            with a beer drinking afterwards. and staying at home =)
          </p>
          <SButton>Let`s talk</SButton>
        </div>
        <div class="col-start-6 col-end-13 mx-auto">
          <img :src="menuImage" />
        </div>
      </div>
    </div>
  </div>
  <div
    class="py-24 bg-[#e7e7e7] bg-right-top bg-no-repeat"
    style="background-image: url(src/shared/assets/bord.svg)"
  >
    <SDashboard />
  </div>
  <div class="py-24">
    <div class="container grid order-last grid-cols-12 mx-auto">
      <div class="col-start-9 col-end-13 self-center">
        <h1 class="w-[415px] text-4xl font-bold text-[#104065]">
          We love taking products from vision to reality.
        </h1>
        <p class="my-12 text-xl text-[#104065]">
          Somethings about how we work. We do all sorts of programming: Web,
          mobile, backend, desktop development. JS is our lovest language. Blala
          something more.
        </p>
        <p class="mb-12 text-xl text-[#104065]">
          We are a team of passionated mobile and web developers who love what
          they do. Also we love being on the same page with our clients and to
          deliver real cases to users.
        </p>
        <SButton>Meet our team 👊</SButton>
      </div>
      <div class="order-first col-start-1 col-end-8 self-center">
        <img class="mx-auto" :src="pcTable" />
      </div>
    </div>
  </div>
  <div class="py-24">
    <div class="container mx-auto">
      <div class="py-12 mx-auto w-[83.3%] rounded-3xl shadow-2xl">
        <div class="mx-auto w-[80%]">
          <p class="mb-12 text-4xl font-bold text-center text-[#104065]">
            Looking for a team willing to go the extra mile for you?
          </p>
        </div>
        <div class="flex justify-around">
          <div><img :src="gears" alt="" /></div>
          <div>
            <p class="text-4xl text-[#104065]">You're in the right place.</p>
          </div>
          <div><img :src="code" alt="" /></div>
        </div>
      </div>
      <div class="mt-24 text-[#104065]">
        <div class="mb-14"><p class="text-4xl text-center">What we do?</p></div>
        <div class="flex justify-around">
          <div class="flex">
            <img :src="search" alt="" />
            <p class="self-center ml-6 text-3xl font-bold text-[#104065]">
              Research
            </p>
          </div>
          <div class="flex">
            <img :src="design" alt="" />
            <p class="self-center ml-6 text-3xl font-bold text-[#104065]">
              Design
            </p>
          </div>
          <div class="flex">
            <img :src="build" alt="" />
            <p class="self-center ml-6 text-3xl font-bold text-[#104065]">
              Build
            </p>
          </div>
          <div class="flex">
            <img :src="support" alt="" />
            <p class="self-center ml-6 text-3xl font-bold text-[#104065]">
              Support
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SFooter />
</template>
