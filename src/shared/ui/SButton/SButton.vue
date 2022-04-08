<script setup lang="ts">
defineProps<{ outline?: boolean }>()
</script>

<template>
  <a
    class="py-3 px-6 text-2xl font-semibold text-blueSky hover:text-white bg-yellowstone hover:bg-blueSky rounded-xl border-yellowstone duration-300 ease-in-out cursor-pointer"
    :class="{
      'bg-transparent py-2 hover:bg-yellowstone border-2 hover:text-blueSky':
        outline,
    }"
  >
    <slot />
  </a>
</template>
