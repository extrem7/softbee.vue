<script setup lang="ts">
import { computed, ref } from 'vue'
import { SArrowNext, SInput } from '~/shared/ui'
import { useBus } from '~/shared/utils'

const currentData: {
  name?: string
  project?: string
  price?: string
  email?: string
} = {}
const isModal = ref(false)
const inputValue = ref('')
const step = ['step1', 'step2', 'step3', 'step4', 'step5']
const countStep = ref(0)
const currentStep = computed(() => step[countStep.value])

const getTextForModal = () => {
  if (currentStep.value === 'step1') {
    return ' Hey! Let’s get started. We’re SoftBee, and you are?'
  }
  if (currentStep.value === 'step2') {
    return `Hello, ${currentData.name}! What do you want to make with us?`
  }
  if (currentStep.value === 'step3') {
    return 'Is there any other information you can share?'
  }
  if (currentStep.value === 'step4') {
    return 'Please provide your email 📧'
  }
  if (currentStep.value === 'step5') {
    return 'Sended your query'
  }

  return undefined
}

const getLabel = () => {
  if (currentStep.value === 'step1') {
    return 'Lovely person'
  }
  if (currentStep.value === 'step2') {
    return 'Apps, a website'
  }
  if (currentStep.value === 'step3') {
    return 'Budget / Timeframe'
  }
  if (currentStep.value === 'step4') {
    return 'best@customer.com'
  }

  return undefined
}

const stepPrev = () => {
  if (step.length - 1 >= countStep.value && countStep.value !== 0) {
    countStep.value += -1
  }
  if (currentStep.value === 'step1') {
    currentData.name = ''
  }
  if (currentStep.value === 'step2') {
    currentData.project = ''
  }
  if (currentStep.value === 'step3') {
    currentData.price = ''
  }
  if (currentStep.value === 'step4') {
    currentData.email = ''
  }
}

const stepNext = () => {
  if (currentStep.value === 'step1') {
    currentData.name = inputValue.value
  }
  if (currentStep.value === 'step2') {
    currentData.project = inputValue.value
  }
  if (currentStep.value === 'step3') {
    currentData.price = inputValue.value
  }
  if (currentStep.value === 'step4') {
    currentData.email = inputValue.value
  }
  if (step.length - 1 > countStep.value && inputValue.value !== '') {
    inputValue.value = ''
    countStep.value += 1
  }
}

const clearModal = () => {
  countStep.value = 0
  currentData.name = ''
  currentData.project = ''
  currentData.price = ''
  currentData.email = ''
}

const actionModal = (value: boolean) => {
  isModal.value = value
  clearModal()
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
        :class="[isModal ? 'left-0' : 'left-[-100%]']"
        class="flex relative justify-between py-24 px-2 w-full max-h-[360px] bg-blueSky duration-300 sm:px-6 md:px-12 lg:max-w-[1000px] lg:rounded-3xl"
        @click.stop
      >
        <div class="self-center">
          <SArrowNext
            v-if="countStep !== 4"
            :disabled="countStep === 0"
            class="mx-auto w-9/12 md:w-full"
            left
            @click="stepPrev"
          />
        </div>
        <div class="w-[70%]">
          <div :class="[countStep !== 4 ? 'mb-5' : '']" class="md:mb-10">
            <p class="text-xl text-center text-white sm:text-2xl md:text-4xl">
              {{ getTextForModal() }}
            </p>
          </div>
          <div>
            <SInput
              v-if="countStep !== 4"
              v-model:modelValue="inputValue"
              type="text"
              :placeholder="getLabel()"
            />
          </div>
        </div>
        <div class="self-center">
          <SArrowNext
            v-if="countStep !== 4"
            :disabled="countStep === 4 || inputValue === ''"
            class="mx-auto w-9/12 md:w-full"
            @click="stepNext"
          />
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
