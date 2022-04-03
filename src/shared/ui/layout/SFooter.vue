<script setup lang="ts">
import { SLink } from '~/shared/ui/.'
import logo from '~/shared/assets/softbeeLogo.svg'
import SInstagramIcon from '../SInstagramIcon.vue'
import SUpworkIcon from '../SUpworkIcon.vue'
import SLinkedInIcon from '../SLinkedInIcon.vue'
import SInput from '../SInput.vue'
</script>

<template>
  <div class="bg-[#104065]">
    <div
      class="flex flex-col py-10 px-2 mx-auto max-w-[1200px] lg:flex-row lg:justify-between lg:px-12"
    >
      <div class="self-center">
        <div class="flex">
          <div>
            <SLink footer>Work</SLink>
            <SLink footer class="mx-5 lg:mx-10">Our team</SLink>
            <SLink footer>Contacts</SLink>
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
            class="mr-6 w-[180px] sm:w-[250px] md:w-[385px]"
            placeholder="Let’s create something dope!"
          />
          <button
            class="py-1 px-5 text-3xl text-[#F5D040] hover:text-[#104065] hover:bg-[#F5D040] rounded-xl border-[2px] border-[#F5D040] duration-300 ease-in-out sm:mt-6"
          >
            ➔
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
