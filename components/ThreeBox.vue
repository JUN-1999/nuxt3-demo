<template>
  <div id="threeContainer" class="three-container"></div>
</template>
<script setup lang="ts">
import * as THREE from "three";
import { onMounted, onUnmounted, onBeforeUnmount, ref } from "vue";

let three: any = null;

onMounted(() => {
  console.log("onMounted-three");
  three = new MyThree(document.querySelector("#threeContainer") as HTMLElement);
  addBox();
});

onBeforeUnmount(() => {
  // three && three.removeResizeListener ();
  three && three.destroyThree();
  three = null;
});

const addBox = () => {
  // 添加一些 3D 对象到场景中
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  three.scene.add(cube);

  three.AnimatorsGroup.push(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  });
};
</script>
<style lang="scss" scoped>
.three-container {
  width: 100%;
  height: 100%; /* 根据需要设置高度 */
}
</style>
