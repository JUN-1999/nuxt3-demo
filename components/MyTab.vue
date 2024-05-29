<template>
  <div class="mytabs">
    <NuxtLink to="/"><el-button link>首页</el-button></NuxtLink>
    <NuxtLink to="/media"><el-button link>media页面</el-button></NuxtLink>
    <NuxtLink to="/el"><el-button link>el页面</el-button></NuxtLink>
    <NuxtLink to="/quill"><el-button link>quill页面</el-button></NuxtLink>
    <NuxtLink to="/postlist"><el-button link>postlist</el-button></NuxtLink>
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
