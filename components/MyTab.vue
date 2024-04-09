<template>
  <div class="mytabs">
    <NuxtLink to="/">首页</NuxtLink>
    <NuxtLink to="/three">three页面</NuxtLink>
    <NuxtLink to="/el">el页面</NuxtLink>
    <NuxtLink to="/postlist">postlist</NuxtLink>
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
