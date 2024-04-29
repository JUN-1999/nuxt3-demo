<template>
  <video style="width: 100%" id="video" controls preload="metadata">
    <source src="/video/short.mp4" type="video/mp4" />
    <track
      label="English"
      kind="subtitles"
      srclang="en"
      src="/captions/vtt/sintel-en.vtt"
      default
    />
    <track
      label="Deutsch"
      kind="subtitles"
      srclang="de"
      src="/captions/vtt/sintel-de.vtt"
    />
    <track
      label="中文"
      kind="subtitles"
      srclang="zh"
      src="/captions/vtt/sintel-cn.vtt"
      default
    />
  </video>
  <div id="video-controls" class="controls" data-state="hidden">
    <!-- <button id="playpause" type="button" data-state="play">
          播放/暂停
        </button>
        <button id="stop" type="button" data-state="stop">停止</button>
        <div class="progress">
          <progress id="progress" value="0" min="0">
            <span id="progress-bar"></span>
          </progress>
        </div>
        <button id="mute" type="button" data-state="mute">静音/解除静音</button>
        <button id="volinc" type="button" data-state="volup">音量+</button>
        <button id="voldec" type="button" data-state="voldown">音量-</button>
        <button id="fs" type="button" data-state="go-fullscreen">全屏</button> -->
    <button id="subtitles" type="button" data-state="subtitles">CC 字幕</button>
  </div>
</template>
<script setup lang="ts">
const subtitleMenuButtons: HTMLButtonElement[] = [];
let subtitles: HTMLElement;
let video: HTMLVideoElement;
let subtitlesMenu: any;

function createMenuItem(id: string, lang: string, label: string) {
  const listItem = document.createElement("li");
  const button = listItem.appendChild(document.createElement("button"));
  button.setAttribute("id", id);
  button.className = "subtitles-button";
  if (lang.length > 0) button.setAttribute("lang", lang);
  button.value = label;
  button.setAttribute("data-state", "inactive");
  button.appendChild(document.createTextNode(label));
  button.addEventListener("click", (e) => {
    // 将所有按钮置为非活动状态
    subtitleMenuButtons.forEach((button) => {
      button.setAttribute("data-state", "inactive");
    });

    // 找到要激活的按钮
    const lang = button.getAttribute("lang");
    for (let i = 0; i < video.textTracks.length; i++) {
      // 对于 'subtitles-off' 按钮，第一个条件永远不会满足，故所有字幕都会关闭
      if (video.textTracks[i].language === lang) {
        video.textTracks[i].mode = "showing";
        button.setAttribute("data-state", "active");
      } else {
        video.textTracks[i].mode = "hidden";
      }
    }
    subtitlesMenu.style.display = "none";
  });
  subtitleMenuButtons.push(button);
  return listItem;
}
import { onMounted } from "vue";
onMounted(() => {
  subtitles = document.getElementById("subtitles") as HTMLElement;
  video = document.getElementById("video") as HTMLVideoElement;

  for (let i = 0; i < video.textTracks.length; i++) {
    video.textTracks[i].mode = "hidden";
  }

  if (video.textTracks) {
    const df = document.createDocumentFragment();
    subtitlesMenu = df.appendChild(document.createElement("ul"));
    subtitlesMenu.className = "subtitles-menu";
    subtitlesMenu.appendChild(createMenuItem("subtitles-off", "", "Off"));
    for (let i = 0; i < video.textTracks.length; i++) {
      subtitlesMenu.appendChild(
        createMenuItem(
          `subtitles-${video.textTracks[i].language}`,
          video.textTracks[i].language,
          video.textTracks[i].label
        )
      );
    }

    subtitles.appendChild(subtitlesMenu);
  }

  subtitles.addEventListener("click", (e) => {
    if (subtitlesMenu) {
      subtitlesMenu.style.display =
        subtitlesMenu.style.display === "block" ? "none" : "block";
    }
  });
});
</script>
<style lang="scss" scoped>
// 控制的按钮样式
.controls button[data-state="subtitles"] {
  height: 85%;
  text-indent: 0;
  font-size: 16px;
  font-size: 1rem;
  font-weight: bold;
  color: #666;
  background: #000;
  border-radius: 2px;
}

.subtitles-menu {
  display: none;
  position: absolute;
  bottom: 14.8%;
  right: 20px;
  background: #666;
  list-style-type: none;
  margin: 0;
  width: 100px;
  padding: 10px;
}

.subtitles-menu li {
  padding: 0;
  text-align: center;
}

.subtitles-menu li button {
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
  width: 90%;
  padding: 2px 5px;
  border-radius: 2px;
}

video {
  &::cue {
    background-image: linear-gradient(to bottom, dimgray, lightgray);
    color: yellow;
  }

  &::cue(b) {
    color: red;
  }
  &::cue(#\31) {
    color: blue;
  }
}
</style>
