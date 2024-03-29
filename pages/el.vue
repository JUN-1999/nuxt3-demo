<template>
  <div>
    element-plus组件调试
    <el-button plain @click="dialogVisible = true"> 打开弹窗 </el-button>

    <client-only>
      <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="500"
        :before-close="handleClose"
      >
        <span>This is a message</span>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">
              Confirm
            </el-button>
          </div>
        </template>
      </el-dialog>
    </client-only>
  </div>
</template>
<script setup lang="ts">
let dialogVisible = ref(false);
const handleClose = () => {
  dialogVisible.value = false;
};
</script>
<style lang="scss" scoped></style>
