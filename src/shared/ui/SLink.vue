<script setup lang="ts">
defineProps({
  footer: { type: Boolean },
})
</script>

<template>
  <RouterLink
    to="#"
    :class="[
      footer
        ? 'text-[#ffffff] hover:text-[#F5D040] whitespace-nowrap'
        : 'text-[#674141]  hover:text-[#104065] ',
    ]"
    class="self-center text-xl font-medium duration-300 ease-in-out"
    ><slot />
  </RouterLink>
</template>
