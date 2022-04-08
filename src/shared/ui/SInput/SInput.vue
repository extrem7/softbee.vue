<script setup lang="ts">
defineProps<{
  outline?: boolean
  modelValue?: string
}>()

defineEmits<{
  (e: 'update:modelValue', modelValue: string): void
}>()
</script>

<template>
  <input
    :value="modelValue"
    class="placeholder:[#a0a0a0] py-2 w-full placeholder:text-2xl text-2xl text-[#a0a0a0] bg-transparent border-b-[0.1px] border-b-white focus:border-b-yellowstone outline-none duration-300 ease-in-out"
    @input="$emit('update:modelValue', ($event.target as any).value)"
  />
</template>
