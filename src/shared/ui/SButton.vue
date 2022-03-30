<script setup lang="ts">
defineProps({ outline: Boolean })
</script>

<template>
  <a
    class="py-3 px-6 text-2xl font-semibold text-[#104065] hover:text-white bg-[#F5D040] hover:bg-[#104065] rounded-xl border-2 border-[#F5D040] hover:border-[#F5D040] duration-300 ease-in-out cursor-pointer"
    :class="{
      'bg-transparent py-2 hover:bg-[#F5D039] border-2 hover:text-[#104064]':
        outline,
    }"
  >
    <slot />
  </a>
</template>
