<template>
  <div style="width: 100%" id="main">
    <!-- <audio id="audio" controls>
      <source src="/audio/demo_music.mp3" type="audio/mpeg" />
      您的浏览器不支持 audio 元素。
    </audio> -->
    <canvas id="canvas"></canvas>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const audioCtx = new AudioContext();

  //创建一个音频源
  //在示例中我们使用了一个音频文件，但其实这里也可以用麦克风输入
  const audioEle = new Audio();
  audioEle.src = "/audio/demo_music.mp3"; //这里是文件名
  audioEle.autoplay = true;
  audioEle.controls = true;
  audioEle.preload = "auto";
  document.getElementById('main')?.appendChild(audioEle)
  const audioSourceNode = audioCtx.createMediaElementSource(audioEle);

  //生成一个分析节点 (analyser node)
  const analyserNode = audioCtx.createAnalyser();
  analyserNode.fftSize = 256;
  const bufferLength = analyserNode.frequencyBinCount;
  const dataArray = new Float32Array(bufferLength);

  //设置音频节点网络（音频源->分析节点->输出）
  audioSourceNode.connect(analyserNode);
  analyserNode.connect(audioCtx.destination);

  //生成 2D canvas
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const canvasCtx = canvas.getContext("2d") as CanvasRenderingContext2D;
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

  function draw() {
    //准备好下次重绘
    requestAnimationFrame(draw);

    //获取实时的频谱信息
    analyserNode.getFloatFrequencyData(dataArray);

    //画一个黑色的背景
    canvasCtx.fillStyle = "rgb(0, 0, 0)";
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    //绘制频谱
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let posX = 0;
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] + 140) * 2;
      canvasCtx.fillStyle = "rgb(" + Math.floor(barHeight + 100) + ", 50, 50)";
      canvasCtx.fillRect(
        posX,
        canvas.height - barHeight / 2,
        barWidth,
        barHeight / 2
      );
      posX += barWidth + 1;
    }
  }

  draw();
});
</script>
<style lang="scss" scoped></style>
