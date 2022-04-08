<script setup lang="ts">
defineProps<{
  rotate?: boolean
}>()
</script>

<template>
  <div
    :class="[
      !rotate
        ? 'xl:bg-[url(~/shared/assets/bgTriangle.svg)] bg-no-repeat bg-contain'
        : 'xl:bg-[url(~/shared/assets/bgTriangleRotate.svg)] bg-right bg-no-repeat bg-contain',
    ]"
  >
    <slot />
  </div>
</template>
