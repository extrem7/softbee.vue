<script setup lang="ts">
import WebPreview from '~/shared/assets/webPreview.png'
import PhoneWebPreview from '~/shared/assets/phoneWebPreview.png'
import { SButton } from '~/shared/ui'
</script>
<template>
  <div class="container grid-cols-12 mx-auto">
    <div class="flex col-start-1 col-end-8 justify-between">
      <div class="flex items-end w-[92%]">
        <img :src="WebPreview" class="mr-36" />
      </div>
      <div class="self-center ml-11 w-1/4">
        <img :src="PhoneWebPreview" class="#" />
      </div>
      <div class="col-start-8 col-end-12 self-center ml-16 max-w-[370px]">
        <p class="text-4xl text-blueSky">MMO.cat selling website</p>
        <p class="my-12 text-xl text-[#3B4649]">
          We provided full-stack development service for end-to-end websites of
          MMO.cat team
        </p>
        <SButton>See case study</SButton>
      </div>
    </div>
  </div>
</template>
