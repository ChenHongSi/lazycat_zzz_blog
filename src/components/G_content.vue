<template>
    <div class="G_content_component">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.G_content_component {
    /* 透明度 */
    /* background: rgba(255, 255, 255, 0.85); */
    /* 圆角效果 */
    /* border-radius: 8px; */
    /* 毛玻璃效果 */
    /* backdrop-filter: blur(10px); */
    margin: 0 auto;
    padding: 10px 10px 100px 10px;
    width: 100%;
}

</style>