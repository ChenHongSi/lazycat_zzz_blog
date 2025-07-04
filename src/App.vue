<template>
    <div class="bgStyle">
        <a-layout id="applayout" class="transparent_component">

            <Scroll></Scroll>
            <a-layout-header class="adjusttransparent_component header_component level_2 header_fixed">
                <G_header></G_header>
            </a-layout-header>
            <div class="header_placeholder"></div>

            <a-layout class="transparent_component">
                <a-layout-sider class="transparent_component sider_component level_1" :width="'10%'">
                    <G_sider></G_sider>
                </a-layout-sider>

                <a-layout-content class="transparent_component content_component level_1" :width="'100%'">
                    <G_content></G_content>>
                </a-layout-content>

                <a-layout-sider class="transparent_component sider_component level_1" :width="'20%'">
                    <div>test</div>
                </a-layout-sider>

            </a-layout>

            <a-layout-footer class="adjusttransparent_component footer_component level_2">
                <G_footer></G_footer>
            </a-layout-footer>

        </a-layout>
        <a-back-top class="transparent_component" />
    </div>
</template>


<script setup>
import G_footer from './components/G_footer.vue';
import G_header from './components/G_header.vue';
import G_content from './components/G_content.vue';
import G_sider from './components/G_sider.vue';
import Scroll from './components/scroll.vue';


</script>

<style scoped>
#applayout {
    min-height: 100vh;
    /* 负边距解决滚动条出现导致的页面抖动问题 */
    /* margin-right: -0.5px;
    padding-right: 17px; */
    /* 滚动条宽度补偿 */
}

.level_1 {
    z-index: 1;
}

.level_2 {
    z-index: 2;
}

.transparent_component {
    /* 全透明 */
    background: transparent;
}

.adjusttransparent_component {
    /* 透明度调节 */
    background: rgba(255, 255, 255, 0.1);
    width: 100%;
}

/* header占位元素 */
.header_placeholder {
    height: 64px;
    width: 100%;
}

.header_component {
    /* background: rgba(255, 255, 255, 0.85); */
    position: fixed;
    width: 100%;
    /* 毛玻璃效果 */
    backdrop-filter: blur(5px);
}

.footer_component {
    width: 100%;
}

.sider_component {
    margin: 0;
    padding: 80px 0 0 0;
    /* background: rgba(255, 255, 255, 0.85); */
}

.content_component {
    /* background: rgba(255, 0, 0, 0.85); */
    border: 0;
    width: 100%;
    margin-top: 0;
    padding-top: 20px;
}
</style>