<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import SLink from '../SLink.vue'
import SButton from '../SButton.vue'
import logo from '~/shared/assets/softbeeLogo.svg'

const menu = ref()
const isStick = ref(false)

onMounted(() => {
  const menuHeight = menu.value.offsetHeight
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
  <div
    class="min-h-[216px] bg-[url(~/shared/assets/menu.svg)] bg-no-repeat"
    :class="{ 'bg-none': isStick }"
  >
    <div
      ref="menu"
      :class="{ 'fixed bg-[#104065] justify-between w-full': isStick }"
      class="flex justify-between py-6 px-12 duration-200"
    >
      <div className="self-center">
        <a href="#"><img :src="logo" /></a>
      </div>
      <div className="flex flex-around">
        <div>
          <SLink :footer="isStick" class="mx-6" href="#">Work</SLink>
          <SLink :footer="isStick" class="mx-6" href="#">Our Team</SLink>
          <SLink :footer="isStick" class="mx-6" href="#">Blog</SLink>
        </div>
        <div>
          <SButton class="ml-6" :outline="!isStick">Let`s talk👋</SButton>
        </div>
      </div>
    </div>
  </div>
</template>
