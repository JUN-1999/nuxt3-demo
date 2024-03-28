<template>
  <div>
    <p>custom的布局</p>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
</script>
<style lang="scss" scoped></style>
