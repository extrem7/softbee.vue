<script setup lang="ts">
const props = defineProps<{
  rotate?: boolean
}>()
</script>

<template>
  <div
    :class="[
      !props.rotate
        ? 'xl:bg-[url(~/shared/assets/bgTriangle.svg)] bg-no-repeat bg-contain'
        : 'xl:bg-[url(~/shared/assets/bgTriangleRotate.svg)] bg-right bg-no-repeat bg-contain',
    ]"
  >
    <slot />
  </div>
</template>
