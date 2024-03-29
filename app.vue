<template>
  <!-- <NuxtWelcome /> -->
  <el-scrollbar  height="100vh">
    <div>
      <NuxtLayout :name="layout">
        <div>-app页面中的内容-</div>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
// default  custom
let layout = "custom";
</script>
<style lang="scss">
@use "~/assets/styles/common.scss";
@use "~/assets/styles/normalize.scss";
</style>
