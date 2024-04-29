<template>
  <div
    style="display: flex; align-items: center; justify-content: space-between"
  >
    <div style="width: 50vw; height: 70vh; padding: 30px">
      <my-video></my-video>
    </div>
    <div style="width: 50vw; height: 70vh; padding: 30px">
      <my-audio></my-audio>
    </div>
  </div>
</template>
<script setup lang="ts">
let res = await useFetch("/api/hello");
console.log(res.data.value);
</script>
<style lang="scss" scoped></style>
