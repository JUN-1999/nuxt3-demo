<template>
  <!-- <NuxtWelcome /> -->
  <div>
    <NuxtLayout :name="layout"> 1 </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
let layout = "custom";
</script>
<style lang="scss" scoped></style>
