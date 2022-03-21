<script setup lang="ts">
defineProps({
  outline: { type: Boolean },
})
</script>

<template>
  <a
    class="py-3 px-6 text-2xl font-semibold text-[#104065] hover:text-[#F5D040] bg-[#F5D040] hover:bg-transparent rounded-xl border-2 border-black hover:border-[#F5D040] duration-300 ease-in-out cursor-pointer"
    :class="{
      'bg-transparent hover:bg-[#F5D040] border-[#F5D040] hover:text-[#104065]':
        outline,
    }"
  >
    <slot />
  </a>
</template>
