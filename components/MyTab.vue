<template>
  <div class="mytabs">
    <NuxtLink to="/">首页</NuxtLink>
    <NuxtLink to="/about">about页面</NuxtLink>
    <NuxtLink to="/el">el页面</NuxtLink>
    <NuxtLink to="/posts/1">posts-1页面</NuxtLink>
    <NuxtLink to="/posts/2">posts-2页面</NuxtLink>
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
