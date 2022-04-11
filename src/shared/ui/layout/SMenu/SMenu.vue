<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { SLink, SButton, SPopup } from '~/shared/ui'
import logo from '~/shared/assets/softbeeLogo.svg'
import menuSvg from '~/shared/assets/menuSvg.svg'
import { dispatch } from '~/shared/utils'

const menu = ref()
const isStick = ref(false)
const isActive = ref(false)

const openModal = () => {
  dispatch('modal/open')
  isActive.value = false
}

onMounted(() => {
  const menuHeight = menu.value.offsetHeight / 2
  const getPositionMenu = (currentScroll: number) => {
    if (menuHeight >= currentScroll && isStick.value === true) {
      isStick.value = false
    }
    if (menuHeight < currentScroll && isStick.value === false) {
      isStick.value = true
    }
  }

  window.addEventListener('scroll', () => {
    getPositionMenu(window.scrollY)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {
    isStick.value = false
  })
})
</script>

<template>
  <SPopup />
  <div
    class="bg-no-repeat md:min-h-[216px]"
    :class="[isStick ? 'bg-none' : 'lg:bg-[url(~/shared/assets/menu.svg)]']"
  >
    <div
      ref="menu"
      :class="[isStick ? 'fixed  justify-between w-full' : 'lg:bg-transparent']"
      class="flex z-50 justify-between py-3 px-12 bg-blueSky duration-200 lg:grid lg:grid-cols-12 lg:py-6"
    >
      <div
        class="order-last self-center w-[140px] lg:order-first lg:col-start-1 lg:col-end-4"
      >
        <RouterLink to="/"><img :src="logo" /></RouterLink>
      </div>
      <div class="w-[30px] cursor-pointer lg:hidden" @click="isActive = true">
        <img class="w-full" :src="menuSvg" alt="" />
      </div>
      <div
        class="hidden flex-col order-first col-start-1 col-end-4 justify-end lg:flex lg:flex-row lg:order-last lg:col-start-4 lg:col-end-13"
      >
        <div class="flex flex-col lg:flex-row">
          <SLink :footer="isStick" class="lg:mx-6" href="#">Work</SLink>
          <SLink to="/team" :footer="isStick" class="mt-6 lg:mx-6 lg:mt-0"
            >Our Team</SLink
          >
          <SLink :footer="isStick" class="my-6 lg:my-0 lg:mx-6" href="#"
            >Blog</SLink
          >
        </div>
        <div>
          <SButton
            outline
            :class="{ 'text-white hover:text-blueSky': isStick }"
            class="ml-6"
            @click="openModal"
            >Let`s talk👋</SButton
          >
        </div>
      </div>
    </div>
  </div>
  <div
    class="z-50 lg:hidden"
    :class="{
      'fixed top-[0px] duration-300 ease-in-out w-full h-full bg-black/50':
        isActive,
    }"
    @click.stop="isActive = false"
  >
    <div
      :class="[isActive ? 'left-[0px]' : 'left-[-500px]']"
      class="fixed top-[0px] z-50 w-[285px] h-[100vh] bg-blueSky duration-200 ease-in-out"
      @click.stop
    >
      <div class="flex flex-col mt-6">
        <SLink footer class="my-4 text-3xl">Work</SLink>
        <SLink to="/team" footer class="my-4 text-3xl">Our team</SLink>
        <SLink footer class="my-4 text-3xl">Blog</SLink>
        <SButton
          outline
          class="mx-auto mt-2 w-8/12 text-white"
          @click="openModal"
        >
          Let’s talk 👋
        </SButton>
      </div>
    </div>
  </div>
</template>
