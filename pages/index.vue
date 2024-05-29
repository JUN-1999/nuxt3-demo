<template>
  <div>
    index
    <el-button @click="showBtn">显示</el-button>
    <client-only>
      <FileView v-if="show" :url="fileList[2]" @close="closeBtn"></FileView>
    </client-only>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getIndex } from "~/apis/index";

import { FileView } from "@jun1999/file-view";

const show = ref(false);
const showBtn = () => {
  show.value = true;
};
const closeBtn = () => {
  show.value = false;
};

const fileList = ref([
  "https://jljy2021.oss-cn-hangzhou.aliyuncs.com/wxb3999eccac7b923b/20240520/eaba41dea7ef4bf36b80d0cc376e4616.mp4",
  "https://jljy2021.oss-cn-hangzhou.aliyuncs.com/wxb3999eccac7b923b/20240511/3b15f99314261f7a4ec719024b8b238c.mp3",
  "https://jljy2021.oss-cn-hangzhou.aliyuncs.com/wxb3999eccac7b923b2024/05/11/b0b07202405111553135596.jpg",
]);

// 发送请求
const getAPI = async () => {
  console.log("getAPI");
  const { data, errmsg, errno } = await getIndex();
  console.log("data", data);
  console.log("errmsg", errmsg);
  console.log("errno", errno);
};
</script>
<style lang="scss" scoped>

</style>
