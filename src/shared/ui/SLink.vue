<script setup lang="ts">
defineProps({
  footer: { type: Boolean },
})
</script>

<template>
  <a
    href="#"
    :class="{ 'hover:text-[#F5D040] whitespace-nowrap': footer }"
    class="self-center text-xl font-medium text-[#606060] hover:text-[#104065] duration-300 ease-in-out"
    ><slot
  /></a>
</template>
