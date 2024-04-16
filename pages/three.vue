<template>
  <div
    style="display: flex; align-items: center; justify-content: space-between"
  >
    <div style="width: 50vw; height: 70vh">
      <client-only>
        <!-- <CesiumMap></CesiumMap> -->
      </client-only>
    </div>
    <div style="width: 50vw; height: 70vh">
      <client-only>
        <ThreeBox></ThreeBox>
      </client-only>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
