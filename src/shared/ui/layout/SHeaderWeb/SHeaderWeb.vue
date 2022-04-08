<script setup lang="ts">
import HeaderWeb from '~/shared/assets/webCase.png'
import HeaderLogo from '~/shared/assets/webLogo.svg'
</script>

<template>
  <div class="container grid grid-cols-12">
    <div class="col-start-1 col-end-7">
      <img :src="HeaderWeb" />
    </div>
    <div class="col-start-8 col-end-13 self-end">
      <img :src="HeaderLogo" class="mb-6" />
      <p class="mb-6 text-4xl font-semibold text-blueSky">MSHFA Web</p>
      <p class="text-2xl text-[#1a1c1d]">
        Provide the ability for Patients to conduct an online appointment with a
        Doctor. Allow Patients to pay online for appointments and orders.
        Provide the ability for Pharmacies to manage orders.
      </p>
    </div>
  </div>
</template>
