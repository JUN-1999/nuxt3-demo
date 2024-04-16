<template>
  <div ref="cesiumContainer" class="cesium-container"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  Viewer,
  Ion,
  TileMapServiceImageryProvider,
  buildModuleUrl,
  GeoJsonDataSource,
  Color,
  JulianDate,
  BoundingSphere,
  Ellipsoid,
  HorizontalOrigin,
  VerticalOrigin,
  ColorMaterialProperty
} from "cesium";

const cesiumContainer = ref<HTMLDivElement>();

onMounted(() => {
  initCesium();
});

function initCesium() {
  if (cesiumContainer.value) {
    // window.CESIUM_BASE_URL = "/CesiumUnminified/";
    window.CESIUM_BASE_URL = "/Cesium/";

    // 初始化 Cesium 地图
    const viewer = new Viewer(cesiumContainer.value as HTMLElement, {
      geocoder: false, //右上角 搜索
      // homeButton: true, //右上角 Home
      sceneModePicker: false, //右上角 2D/3D切换
      baseLayerPicker: false, //右上角 地形
      navigationHelpButton: false, //右上角 Help
      animation: false, // 左下角 圆盘动画控件
      timeline: false, //时间轴
      fullscreenButton: false, //右下角 全屏控件
      vrButton: false, // 如果设置为true，将创建VRButton小部件。
      scene3DOnly: true, // 每个几何实例仅以3D渲染以节省GPU内存

      // ConstructorOptionswidgets: {
      //   Geocoder: false,
      //   NavigationHelpButton: false,
      //   Timeline: false,
      //   FullscreenButton: false,
      // },

      // imageryProvider: new TileMapServiceImageryProvider({
      //   url: "public/static/CesiumUnminified/Assets/Textures/NaturalEarthII",
      // }),

      //   imageryProvider: new Cesium.IonImageryProvider({ assetId: 2 }), // 使用 Cesium 提供的默认卫星图像
      // baseLayerPicker: false, // 不显示图层选择器

      // // ...其他 Cesium 配置项
    });

    // 去除logo

    viewer.cesiumWidget.creditContainer.style.display = "none";
    // viewer.dataSources.add(

    // );

    GeoJsonDataSource.load("/mapinfo/zhejiang.json", {
      stroke: Color.WHITE,
      fill: Color.RED.withAlpha(0.5),
      strokeWidth: 5,
    }).then((dataSource) => {
      viewer.dataSources.add(dataSource);
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity:any = entities[i];
        // 得到每块多边形的坐标集合
        var polyPositions = entity.polygon.hierarchy.getValue(
          JulianDate.now()
        ).positions;
        // 构造随机颜色
        var color = Color.fromRandom({ alpha: 0.6 });
        entity.polygon.material = color;
        entity.polygon.outline = false;


        // 新增点击事件
        // entity.polygon.show = true;
        // entity.polygon.on("click", function () {
        //   // 处理点击事件，如高亮选中的省份
        //   entity.polygon.material = ColorMaterialProperty.fromColor(
        //    Color.YELLOW
        //   );
        //   // 其他操作...
        // });

        // 根据坐标集合构造BoundingSphere获取中心点坐标
        var polyCenter = BoundingSphere.fromPoints(polyPositions).center;
        // 将中心点拉回到地球表面
        polyCenter = Ellipsoid.WGS84.scaleToGeodeticSurface(polyCenter);
        viewer.entities.add({
          position: polyCenter,
          label: {
            font: "24px sans-serif",
            text: entity.properties.name,
            showBackground: true,
            scale: 0.6,
            horizontalOrigin: HorizontalOrigin.CENTER,
            verticalOrigin: VerticalOrigin.BOTTOM,
          },
        });
      }
    });
    // 设置密钥
    Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1M2VlYzEwZS0xY2I4LTQ5NzgtYTRhYi1iNjBjNzZhNGJjYzkiLCJpZCI6MjA3MjUxLCJpYXQiOjE3MTI1NTUwNTZ9.DmHnTcII-oAk_sOx22W6Gr60HEfbLSFH7Xx23eS-z7E";
  }
}
</script>
<style lang="scss" scoped>
@import "cesium/Build/Cesium/Widgets/widgets.css";

.cesium-container {
  width: 100%;
  height: 100%; /* 根据需要设置高度 */
}
</style>
