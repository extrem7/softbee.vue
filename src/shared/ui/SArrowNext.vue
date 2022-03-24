<script setup lang="ts">
import ArrowNext from '~/shared/assets/ArrowNext.svg'

defineProps({ disabled: Boolean, left: Boolean })
</script>

<template>
  <img
    :src="ArrowNext"
    :class="{ 'opacity-50': disabled, 'rotate-180': left }"
  />
</template>
