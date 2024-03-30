<template>
  <div class="customLayout">
    <el-scrollbar  height="100vh">
      <div class="header">
        <div style="text-align: center">custom的布局上</div>
        <div class="tabs"><my-tab></my-tab></div>
      </div>

      <div class="content">
        <el-button @click="enableCustomLayout">更改布局</el-button>
        <slot></slot>
      </div>
      <div class="footer">custom的布局下</div>

      <el-backtop target=".el-scrollbar__wrap" :right="50" :bottom="100" />
    </el-scrollbar>
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
.customLayout {
  width: 100vw;
  .tabs {
    width: 90vw;
    height: 50px;
    margin: 0 auto;
  }

  .header,
  .footer {
    min-height: 50px;
    width: 100%;
    background-color: skyblue;
  }
  .content {
    width: 100%;
    background-color: steelblue;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
