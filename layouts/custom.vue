<template>
  <div class="customLayout">
    <p class="header">
      <div style="text-align: center;"> custom的布局上</div>
      <div class="tabs"><my-tab></my-tab></div>
    </p>

    <div class="content">
      <slot></slot>
    </div>
    <p class="footer">custom的布局下</p>

    <el-backtop :right="50" :bottom="100" /> 
  </div>
</template> 
<script setup lang="ts"></script>
<style lang="scss" scoped>
.tabs {
  width: 90vw;
  height: 50px;
  margin: 0 auto;
}
.customLayout {
  width: 100vw;

  .header,.footer {
    min-height: 50px;
    width: 100%;
    background-color: skyblue;
  }
  .content {
    width: 100%;
    background-color: steelblue;
  }
  .footer{
    display: flex;
    align-items: center;
    justify-content: center
  }
}
</style>
