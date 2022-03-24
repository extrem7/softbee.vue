<script setup lang="ts">
import { SMenu } from '~/shared/ui/layout'
import menuImage from '~/shared/assets/menuImage.svg'
import { SButton } from '~/shared/ui'
</script>

<template>
  <div class="bg-[url(~/shared/assets/menuBg.svg)] bg-right bg-no-repeat">
    <SMenu />
    <div class="pb-40">
      <div class="grid grid-cols-12 mx-auto xl:container">
        <div class="col-start-3 col-end-6 self-center">
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
</template>
