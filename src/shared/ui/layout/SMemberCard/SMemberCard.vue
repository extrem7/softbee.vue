<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
})
</script>

<template>
  <div class="relative max-w-[300px]">
    <img :src="img" />
    <div
      class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#104065] rounded-b-2xl"
    />
    <div class="absolute bottom-2 p-5 text-white">
      <p class="text-2xl">{{ name }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
