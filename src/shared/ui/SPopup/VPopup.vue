<script setup lang="ts">
import { ref } from 'vue'
import { SArrowNext, SInput } from '~/shared/ui'
import { useBus } from '~/shared/utils'

const isModal = ref(false)

const actionModal = (value: boolean) => {
  isModal.value = value
}
useBus('modal/open', () => actionModal(true))
</script>

<template>
  <Transition name="modal">
    <div
      v-if="isModal"
      class="flex fixed z-50 justify-center content-center items-center w-full h-full bg-black/50"
      @click.stop="actionModal(false)"
    >
      <div
        :class="{ 'left-0': isModal }"
        class="flex relative left-[-100%] justify-between py-24 px-2 w-full max-h-[360px] bg-blueSky duration-300 sm:px-6 md:px-12 lg:max-w-[1000px] lg:rounded-3xl"
        @click.stop
      >
        <div class="self-center">
          <SArrowNext disabled class="mx-auto w-9/12 md:w-full" left />
        </div>
        <div class="w-[70%]">
          <div class="mb-5 md:mb-10">
            <p class="text-xl text-center text-white sm:text-2xl md:text-4xl">
              Hey! Let’s get started. We’re SoftBee, and you are?
            </p>
          </div>
          <div>
            <SInput placeholder="Lovely Person" />
          </div>
        </div>
        <div class="self-center">
          <SArrowNext class="mx-auto w-9/12 md:w-full" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter, .modal-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
