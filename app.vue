<template>
  <!-- <NuxtWelcome /> -->
  <div>
    <NuxtLayout>
      <el-button @click="enableCustomLayout">更改布局</el-button>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const store = useNuxtStore();
const layout = ref<MaybeRef>("default");
// default  custom

const enableCustomLayout = () => {
  console.log("enableCustomLayout");
  let new_layout: MaybeRef =
    store.layout_name == "default" ? "custom" : "default";
  store.setLayoutName(new_layout);
  setPageLayout(new_layout);
};
</script>
<style lang="scss">
@use "~/assets/styles/common.scss";
@use "~/assets/styles/normalize.scss";
</style>
