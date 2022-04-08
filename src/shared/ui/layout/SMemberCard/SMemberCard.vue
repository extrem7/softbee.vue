<script setup lang="ts">
defineProps<{
  name: string
  description: string
  img: string
}>()
</script>

<template>
  <div class="relative max-w-[300px] rounded">
    <img :src="img" class="rounded-2xl" />
    <div
      class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-blueSky rounded-b-2xl"
    />
    <div class="absolute bottom-2 p-5 text-white">
      <p class="text-2xl">{{ name }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
