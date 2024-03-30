<template>
  <div class="defaultLayout">
   
      <div class="top">
        <p>default 布局公共头部</p>
        <div class="tabs">
          <my-tab></my-tab>
        </div>
      </div>
      <div class="content">
        <el-button @click="enableCustomLayout">更改布局</el-button>
        <slot></slot>
      </div>
  </div>
</template>
<script setup lang="ts">
// default  custom
const store = useNuxtStore();
const enableCustomLayout = () => {
  let new_layout: MaybeRef =
    store.layout_name == "default" ? "custom" : "default";
  store.setLayoutName(new_layout);
  setPageLayout(new_layout);
};
</script>
<style lang="scss" scoped>
.defaultLayout {
  // height: 100vh;
  .top {
    position: sticky;
    top: 0;
    border-bottom: 1px solid #e2e2e2;
    background-color: #fff;
    p {
      height: 50px;
      background-color: greenyellow;
      color: green;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tabs {
      width: 50vw;
      min-width: 600px;
      height: 50px;
      margin: 0 auto;
    }
  }
}
</style>
