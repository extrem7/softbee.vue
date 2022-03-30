<script setup lang="ts">
import { SMenu, SFooter } from '~/shared/ui/layout'
import menuImage from '~/shared/assets/menuImage.svg'
import pcTable from '~/shared/assets/pcTable.svg'
import { SButton, SDashboard } from '~/shared/ui'
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
        <div class="col-start-7 col-end-13"><img :src="menuImage" /></div>
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
      <div class="order-first col-start-1 col-end-7">
        <img :src="pcTable" />
      </div>
    </div>
  </div>
  <SFooter />
</template>
