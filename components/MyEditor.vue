<template>
  <div id="editor"></div>
</template>
<script setup lang="ts">
import Quill from "quill";
import type { QuillOptions } from "quill";

import { onMounted } from "vue";

onMounted(() => {
  if (!process.server) {
    nextTick(() => {
      const container = document.getElementById("editor") as HTMLElement;
      const options = {
        debug: "info",
        modules: {
          toolbar: true,
        },
        placeholder: "Compose an epic...",
        theme: "snow",
      } as QuillOptions;
      new Quill(container, options);
    });
  }
});
</script>
<style lang="scss" scoped></style>
