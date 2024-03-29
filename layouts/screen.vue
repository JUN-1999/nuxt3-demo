<template>
  <div>
    <div>全屏展示信息</div>
    <div @click="back">返回</div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const back = () => {
  router.back();
};
</script>
<style lang="scss" scoped></style>
