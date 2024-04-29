<template>
  <div class="mytabs">
    <NuxtLink to="/"><el-button type="text">首页</el-button></NuxtLink>
    <NuxtLink to="/three"><el-button type="text">three页面</el-button></NuxtLink>
    <NuxtLink to="/el"><el-button type="text">el页面</el-button></NuxtLink>
    <NuxtLink to="/postlist"><el-button type="text">postlist</el-button></NuxtLink>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.mytabs {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
