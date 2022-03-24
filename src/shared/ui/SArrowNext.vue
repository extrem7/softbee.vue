<script setup lang="ts">
import ArrowNext from '~/shared/assets/ArrowNext.svg'

defineProps({ disabled: Boolean })
</script>

<template>
  <img :src="ArrowNext" :class="{ 'opacity-50': disabled }" />
</template>
