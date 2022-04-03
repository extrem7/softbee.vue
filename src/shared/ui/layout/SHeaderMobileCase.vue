<script setup lang="ts">
import HeaderPhone from '~/shared/assets/headerPhone.png'
import HeaderiPhone from '~/shared/assets/headeriPhone.png'
import Logo from '~/shared/assets/logo.svg'
import AppStore from '~/shared/assets/appStore.svg'
import GooglePlay from '~/shared/assets/googlePlay.svg'
</script>
<template>
  <div class="container grid grid-cols-12 mx-auto">
    <div class="flex col-start-1 col-end-5">
      <div class="self-center my-6 mb-3.5">
        <img :src="Logo" alt="img" class="mb-6" />
        <p class="my-6 text-4xl font-semibold text-[#575195]">GapNurse App</p>
        <p class="my-6 text-xl text-[#575195]">
          Platform for cooperating<br />
          nurses and healthcare<br />
          facilities work together
        </p>
        <div class="flex">
          <img :src="GooglePlay" class="mr-6" />
          <img :src="AppStore" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 col-start-6 col-end-12 items-end">
      <img :src="HeaderPhone" class="col-start-1 col-end-6" />
      <img :src="HeaderiPhone" class="col-start-7 col-end-12" />
    </div>
  </div>
</template>
