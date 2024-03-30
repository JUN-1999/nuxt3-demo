<template>
  <div>
    index
    <el-button @click="getAPI">发送请求</el-button>
  </div>
</template>
<script setup lang="ts">
import { getIndex } from "~/apis/index";
const getAPI = async () => {
  console.log("getAPI");
  const { data, errmsg, errno } = await getIndex();
  console.log("data", data);
  console.log("errmsg", errmsg);
  console.log("errno", errno);
};
</script>
<style lang="scss" scoped></style>
