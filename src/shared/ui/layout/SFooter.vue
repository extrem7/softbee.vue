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
    <div class="grid grid-cols-12 py-10 mx-auto max-w-[1200px]">
      <div class="col-start-1 col-end-6">
        <div class="flex">
          <a href="#"><img :src="logo" /></a>
          <SLink footer class="ml-16">Work</SLink>
          <SLink footer class="mx-10">Our team</SLink>
          <SLink footer>Contacts</SLink>
        </div>
        <div class="flex mt-20">
          <SInstagramIcon class="mr-6" />
          <SUpworkIcon class="mx-6" />
          <SLinkedInIcon class="mx-6" />
        </div>
      </div>
      <div class="col-start-8 col-end-13">
        <div>
          <h1 class="mb-6 text-4xl text-white">Message us anything</h1>
          <p class="mb-6 text-xl text-white">
            Your message will be posted in one of our Slack channels.
          </p>
        </div>
        <div>
          <SInput
            class="mr-6 w-[385px]"
            placeholder="Let’s create somethign dope!"
          />
          <button
            class="py-1 px-5 text-3xl text-[#F5D040] hover:text-[#104065] hover:bg-[#F5D040] rounded-xl border-[2px] border-[#F5D040] duration-300 ease-in-out"
          >
            ➔
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
