<script setup lang="ts">
import SLink from '../SLink.vue'
import SButton from '../SButton.vue'
import logo from '~/shared/assets/softbeeLogo.svg'
</script>

<template>
  <div
    className="min-h-[216px] bg-no-repeat bg-[url(~/shared/assets/menu.svg)]"
  >
    <div className="flex px-12 pt-6 justify-between">
      <div className="self-center">
        <a href="#"><img :src="logo" /></a>
      </div>
      <div className="flex flex-around">
        <div>
          <SLink class="mx-6" href="#">Work</SLink>
          <SLink class="mx-6" href="#">Our Team</SLink>
          <SLink class="mx-6" href="#">Blog</SLink>
        </div>
        <div>
          <SButton class="ml-6" outline>Let`s talk👋</SButton>
        </div>
      </div>
    </div>
  </div>
</template>
