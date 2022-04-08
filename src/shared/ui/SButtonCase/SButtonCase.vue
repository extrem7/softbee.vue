<script setup lang="ts">
defineProps({ outline: Boolean })
</script>

<template>
  <a
    class="py-3 px-6 text-2xl font-semibold text-white hover:text-blueSky bg-blueSky hover:bg-transparent rounded-xl border-2 hover:border-blueSky duration-300 ease-in-out cursor-pointer"
  >
    <slot />
  </a>
</template>
