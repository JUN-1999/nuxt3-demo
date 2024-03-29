<template>
  <div>
      <ul>
        <li v-for="item in 99" :key="item">posts-2</li>
      </ul>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "screen Layout Page",
  layout: false,
});
setPageLayout("screen");
</script>
<style lang="scss" scoped></style>
