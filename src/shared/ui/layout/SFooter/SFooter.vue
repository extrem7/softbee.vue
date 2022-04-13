<script setup lang="ts">
import { ref } from 'vue'
import {
  SInstagramIcon,
  SUpworkIcon,
  SLinkedInIcon,
  SInput,
  SLink,
} from '~/shared/ui'

const inputValue = ref('')

const sendMessage = () => {
  if (inputValue.value.length >= 10) {
    inputValue.value = ''
  }
}
</script>

<template>
  <div class="bg-blueSky">
    <div
      class="flex flex-col py-10 px-2 mx-auto max-w-[1200px] lg:flex-row lg:justify-between lg:px-12"
    >
      <div class="self-center">
        <div class="flex">
          <div>
            <SLink to="/work" footer>Work</SLink>
            <SLink to="/team" footer class="mx-5 lg:mx-10">Our team</SLink>
            <SLink to="/blog" footer>Contacts</SLink>
          </div>
        </div>
        <div class="flex justify-center mt-10 lg:mt-20">
          <SInstagramIcon class="mr-6" />
          <SUpworkIcon class="mx-6" />
          <SLinkedInIcon class="mx-6" />
        </div>
      </div>
      <div class="self-center mt-12 text-center lg:my-0 lg:ml-6 lg:text-left">
        <div>
          <h1 class="mb-6 text-4xl text-white">Message us anything</h1>
          <p class="text-xl text-white whitespace-pre-wrap">
            Your message will be posted in one of our Slack channels.
          </p>
        </div>
        <div>
          <SInput
            v-model:modelValue="inputValue"
            class="mr-6 w-[180px] sm:w-[250px] md:w-[385px]"
            placeholder="Let’s create something dope!"
          />
          <button
            :class="[
              inputValue.length <= 10
                ? 'cursor-default opacity-50'
                : 'hover:text-blueSky hover:bg-yellowstone cursor-pointer',
            ]"
            class="py-1 px-5 mt-6 text-3xl text-yellowstone rounded-xl border-[2px] border-yellowstone duration-300 ease-in-out"
            @click="sendMessage"
          >
            ➔
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
