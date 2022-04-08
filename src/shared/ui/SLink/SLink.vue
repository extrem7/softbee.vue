<script setup lang="ts">
defineProps<{
  footer: boolean
}>()
</script>

<template>
  <RouterLink
    to="#"
    :class="[
      footer
        ? 'text-[#ffffff] hover:text-yellowstone whitespace-nowrap'
        : 'text-[#674141]  hover:text-blueSky ',
    ]"
    class="self-center text-xl font-medium duration-300 ease-in-out"
    ><slot />
  </RouterLink>
</template>
