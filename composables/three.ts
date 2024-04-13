import * as THREE from "three";
import {
    OrbitControls
} from "three/examples/jsm/controls/OrbitControls";

export class Three {
    scene!: THREE.Scene;
    camera!: THREE.PerspectiveCamera;
    renderer!: THREE.WebGLRenderer;
    threebox_width: number = 0;
    threebox_height: number = 0;
    threeContainer: HTMLElement; // threeDOM对象
    AnimatorsGroup: Array<Function> = []; // 动画的事件
    public controls!: OrbitControls;// 镜头控制器
    constructor(dom: HTMLElement) {
        this.threeContainer = dom;
        this.initScenes();
        this.createControls();
    }
    // 初始化场景
    private initScenes = () => {
        this.getThreeBoxInfo();
        // 初始化three三件套
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.threebox_width / this.threebox_height, 1, 1000);
        this.camera.position.z = 5;
        this.camera.lookAt(this.scene.position);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.threebox_width, this.threebox_height);
        // 将渲染器添加到dom中
        this.threeContainer && this.threeContainer.appendChild(this.renderer.domElement);
        this.scene.add(new THREE.AxesHelper(10))
        // 渲染场景
        this.animate();
        // 监听场景改变
        window.addEventListener('resize', this.onWindowResize, false);
    }

    // 渲染场景
    private animate = () => {
        requestAnimationFrame(this.animate);

        this.AnimatorsGroup.length > 0 && this.AnimatorsGroup.forEach(Animators => {
            Animators();
        });
        // 更新渲染器
        this.renderer.render(this.scene, this.camera);
        // 更新控制器
        this.controls && this.controls.update();

    }
    // 获得three盒子的宽高
    private getThreeBoxInfo = () => {
        if (this.threeContainer) {
            const { offsetWidth, offsetHeight } = this.threeContainer;
            this.threebox_width = offsetWidth;
            this.threebox_height = offsetHeight;
        }
    };
    // 屏幕大小修改
    private onWindowResize = () => {
        this.getThreeBoxInfo();
        this.camera.aspect = this.threebox_width / this.threebox_height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.threebox_width, this.threebox_height);
    };
    // 不需要监听
    public removeResizeListener() {
        window.removeEventListener('resize', this.onWindowResize, false);
    }
    // 添加控制器
    private createControls = () => {
        // 鼠标控制      相机，渲染dom
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        // 使动画循环使用时阻尼或自转 意思是否有惯性
        this.controls.enableDamping = true;
        // 动态阻尼系数 就是鼠标拖拽旋转灵敏度
        this.controls.dampingFactor = 0.05;
        // 是否可以缩放
        this.controls.enableZoom = true;
        // 是否开启右键拖拽
        this.controls.enablePan = true;
    }
}
