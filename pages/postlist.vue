<template>
  <div class="posts">
    <div>postlist页面</div>
    <div class="pages">
      <div class="page" @click="toPosts(1)">1</div>
      <div class="page" @click="toPosts(2)">2</div>
      <div class="page">1</div>
      <div class="page">2</div>
      <div class="page">1</div>
      <div class="page">2</div>
      <div class="page">1</div>
      <div class="page">2</div>
      <div class="page">1</div>
      <div class="page">2</div>
      <div class="page">1</div>
      <div class="page">2</div>
      <div class="page">1</div>
      <div class="page">2</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const toPosts = (id) => {
  router.push(`/posts/${id}`);
};
</script>
<style lang="scss" scoped>
.posts {
  width: 100%;
  .pages {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    gap: 20px;

    .page {
      background-color: green;
      height: 50px;
      width: 100%;
      cursor: pointer;
    }
  }
}
</style>
