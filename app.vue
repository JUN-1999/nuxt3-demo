<template>
  <!-- <NuxtWelcome /> -->
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
declare global {
  interface Window {
    CESIUM_BASE_URL: string;
  }
}
</script>
<style lang="scss">
@use "~/assets/styles/common.scss";
@use "~/assets/styles/normalize.scss";

</style>
