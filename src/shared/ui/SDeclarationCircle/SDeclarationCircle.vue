<script setup lang="ts"></script>

<template>
  <div
    class="bg-right bg-no-repeat bg-contain xl:bg-[url(~/shared/assets/declarationCircle.svg)]"
  >
    <div
      class="bg-no-repeat bg-contain xl:bg-[url(~/shared/assets/declarationCircleRotate.svg)]"
    >
      <slot />
    </div>
  </div>
</template>
