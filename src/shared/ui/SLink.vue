<script setup lang="ts">
defineProps({
  footer: { type: Boolean },
})
</script>

<template>
  <a
    href="#"
    :class="[
      footer
        ? 'text-[#ffffff] hover:text-[#F5D040] whitespace-nowrap'
        : 'text-[#606060]  hover:text-[#104065] ',
    ]"
    class="self-center text-xl font-medium duration-300 ease-in-out"
    ><slot
  /></a>
</template>
