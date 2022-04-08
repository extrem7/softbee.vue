<script setup lang="ts">
import { computed, ref } from 'vue'
import { SMenu, SFooter, SMemberCard } from '~/shared/ui/layout'
import { SArrow, SDeclarationCircle, STriangle } from '~/shared/ui'
import ourTeamHeader from '~/shared/assets/ourTeamHeader.svg'
import urix from '~/shared/assets/urix.png'
import shrek from '~/shared/assets/shrek.jpg'
import manura from '~/shared/assets/manura.jpg'
import ourTeamAboutUs from '~/shared/assets/ourTeamAboutUs.svg'

const items = [
  {
    img: urix,
    description: 'VueLead',
    name: 'urix',
  },
  {
    img: shrek,
    description: 'VueJunior',
    name: 'maxesn',
  },
  {
    img: manura,
    description: 'VueTrainee',
    name: 'manura',
  },
]

const defaultCount = ref(6)
const newItems = computed(() => items.slice(0, defaultCount.value))
const addNextItem = () => {
  defaultCount.value += 6
}
</script>

<template>
  <SMenu />
  <div
    class="py-24 bg-right-bottom bg-no-repeat md:pt-0 md:pb-40 xl:bg-[url('~/shared/assets/ourTeamHeaderBg.svg')]"
  >
    <div
      class="flex flex-col-reverse px-10 mx-auto max-w-[1200px] text-center md:grid md:grid-cols-12 md:text-left"
    >
      <div class="self-center mt-12 md:col-start-1 md:col-end-5 md:mt-0">
        <h1
          class="text-3xl font-bold text-center text-blueSky md:text-4xl md:text-left"
        >
          About Our Team
        </h1>
        <p class="mt-6 text-2xl text-blueSky md:mt-12">
          We help companies discover what makes them unique and channel it into
          a memorable experience that outsells and outshines their competition
          online.
        </p>
      </div>
      <div class="col-start-6 col-end-13 mx-auto">
        <img :src="ourTeamHeader" />
      </div>
    </div>
  </div>
  <div class="py-24 mx-auto max-w-[1200px]">
    <div class="mb-12 text-center">
      <p class="text-4xl text-blueSky">Real people creating real results.</p>
      <p class="mt-6 text-xl text-blueSky">
        We teamed up to provide best results for clients all over the world
      </p>
    </div>
    <div
      ref="card"
      class="grid grid-cols-1 gap-6 place-items-center px-10 duration-300 ease-in-out sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-x-36 lg:gap-y-24"
    >
      <SMemberCard
        v-for="{ img, name, description } in newItems"
        :key="img + name"
        class="self-center"
        :img="img"
        :name="name"
        :description="description"
      />
    </div>
    <SArrow
      :class="[defaultCount > items.length ? 'hidden' : 'block']"
      class="mx-auto mt-16 w-[50px]"
      @click="addNextItem"
    >
      hello
    </SArrow>
  </div>
  <STriangle>
    <div class="py-24">
      <div
        class="flex flex-col order-last px-10 mx-auto max-w-[1200px] md:grid md:grid-cols-12"
      >
        <div
          class="self-center text-center md:col-start-8 md:col-end-13 md:ml-6 md:text-left"
        >
          <h1 class="mt-12 text-4xl font-bold text-blueSky md:mt-0">
            About Us
          </h1>
          <p class="mt-6 text-xl text-blueSky md:mt-12">
            We’re designers, developers, illustrators and coders, but we also
            have pure gold ideas. iPhone games, time-keeping apps,
            dog-backpacks, t-shirt slogans and many others.
          </p>
        </div>
        <div class="order-first col-start-1 col-end-8 self-center">
          <img class="mx-auto" :src="ourTeamAboutUs" />
        </div>
      </div>
    </div>
  </STriangle>
  <SDeclarationCircle>
    <div class="py-24 mx-auto max-w-[1200px] sm:px-10">
      <div
        class="py-16 mx-auto w-full bg-blueSky sm:max-w-[900px] sm:rounded-3xl sm:shadow-[17px_17px_0px_2px] sm:shadow-amber-300 md:py-20 lg:py-32"
      >
        <p
          class="mx-3 mb-10 text-2xl text-center text-white sm:mx-0 sm:text-3xl md:text-4xl"
        >
          Follow us on
          <a href="#" class="underline cursor-pointer">Medium</a> and don’t
          <br class="hidden sm:block" />
          forget to
          <a href="#" class="underline cursor-pointer">Hire the team</a>
        </p>
      </div>
    </div>
  </SDeclarationCircle>
  <SFooter />
</template>
