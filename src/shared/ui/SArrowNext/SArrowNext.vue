<script setup lang="ts">
import ArrowNext from '~/shared/assets/ArrowNext.svg'

defineProps<{ disabled?: boolean; left?: boolean }>()
</script>

<template>
  <img
    :src="ArrowNext"
    class="cursor-pointer"
    :class="{ 'opacity-50 cursor-not-allowed': disabled, 'rotate-180': left }"
  />
</template>
