<script setup lang="ts">
import HeaderPhone from '~/shared/assets/headerPhone.png'
import HeaderiPhone from '~/shared/assets/headeriPhone.png'
import Logo from '~/shared/assets/logo.svg'
import AppStore from '~/shared/assets/appStore.svg'
import GooglePlay from '~/shared/assets/googlePlay.svg'
</script>
<template>
  <div
    class="flex flex-col grid-cols-12 px-12 pb-24 mx-auto max-w-[1200px] lg:grid lg:py-24"
  >
    <div
      class="flex col-start-1 col-end-7 justify-center text-center lg:justify-start lg:text-left"
    >
      <div class="self-center my-6 mb-3.5">
        <img :src="Logo" alt="img" class="mx-auto mb-6 lg:mx-0" />
        <p class="my-6 text-4xl font-semibold text-[#575195]">GapNurse App</p>
        <p class="my-6 text-xl text-[#575195]">
          Platform for cooperating<br />
          nurses and healthcare<br />
          facilities work together
        </p>
        <div class="flex justify-center max-w-full lg:justify-start">
          <img :src="GooglePlay" class="w-6/12" />
          <img :src="AppStore" class="w-6/12" />
        </div>
      </div>
    </div>
    <div
      class="flex grid-cols-12 col-start-7 col-end-13 justify-center items-end mt-6 lg:grid lg:mt-0"
    >
      <img
        :src="HeaderPhone"
        class="col-start-1 col-end-6 mr-6 w-4/12 md:mr-12 lg:mr-0 lg:w-full"
      />
      <img
        :src="HeaderiPhone"
        class="col-start-7 col-end-12 w-4/12 lg:w-full"
      />
    </div>
  </div>
</template>
